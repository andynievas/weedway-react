
import React from 'react';
import Options from './post-options';


class InteractionFav extends React.Component{

    state = {
      pressed: false
    }

    render(){
      if(this.state.pressed){
        return(
          <i className="fas fa-heart interaction-button" onClick={ ()=>{ this.setState({pressed: false}) } } ></i>
        );
      } else {
        return (
          <i className="far fa-heart interaction-button" onClick={ ()=>{ this.setState( {pressed: true} ) } } ></i>
        );
      }
    }
  }


class Interaction extends React.Component {

    state = {
      comments: []
    }

    fetchData = ()=>{
      if(JSON.stringify(this.state.comments) === '[]'){

          fetch('https://sample-api-practice-node.herokuapp.com/comentarios')
              .then( e=>{ if(e.status === 200){let data = e.json(); return data } } )
              .then( comments=>{ this.setState({comments: comments}); /* console.log(this.state);  SpinnerWrapper display none */ } )
              .catch( err=>console.log(err) )

      }/*else{
        console.log("Estoy dentro del ELSE")
      }*/
    }

    addComment = (user, comentario, id) => {
      const newComment = {
        user: user,
        comentario: comentario,
        id: id
      };
      this.setState({
        // comments: [...this.state.comments, newComment]
        comments: this.state.comments.concat([newComment])
      });

    }

    // Funciones y estados del componente Comentario
      ident = 2;

      comentario = {
        'user': localStorage.getItem('weedway-user'),
        'comentario': '',
        'id': this.state.comments.length
      }

      onsubmit = e => {
        e.preventDefault();
        if( this.comentario.comentario.trim() !== '' ){
          this.addComment(this.comentario.user, this.comentario.comentario, this.comentario.id);
          this.ident += 1;
          this.comentario.comentario = '';
        }
        e.target[0].value = ''; // e.target[0] es el input correspondiente al post
        console.log(this.comentario)
      }

      onchange = e => {
        // this.comentario = {
        //   [e.target.name]: e.target.value
        // }

        this.comentario.comentario = e.target.value;

      }
    // Termina el componente Comentrario

    render(){
      this.fetchData();
      return (
        <div className="interaction-section" >
          <InteractionFav/>
          <i className="far fa-share interaction-button" ></i>
          {this.state.comments.map( e=> <p key={e.id} className="animate__animated animate__zoomIn description comentario" > { <span> {e.user} </span> } {e.comentario} </p> )}
            <form action="http://localhost:3001/comentar" method="POST" className="comentar " onSubmit={this.onsubmit} autoComplete="off" >
              <input type="text" className="comentario-text-input" name="comentario" onChange={this.onchange} placeholder="Escribe aquí tu comentario..." />
              <input type="submit" className="send" value="Publicar" />
            </form>
        </div>
      );
    }
  }

class Dropdown extends React.Component{

    state={
      show: false
    }

    changEstado = () => {
      this.setState({show: !this.state.show});
    }

    render(){
      if(this.state.show){
        document.getElementsByTagName('body')[0].style = "overflow: hidden;";

        return (
          <Options
            estado={this.state.show}
            setEstado={this.changEstado}
            user={this.props.user}
          />
        );
      }else{
        document.getElementsByTagName('body')[0].style = "overflow: auto;";
        return (
          <div>
            <i className="fas fa-ellipsis-h options" onClick={ ()=>{this.setState({show: !this.state.show})} } ></i>
          </div>
        );
      }
    }
  }


// Property of Posteo --> posteo={this.props.postData} setEstado={this.props.setEstado}

class Posteo extends React.Component{

  post = { /* Post completo osea el card clarito redondeado con los elementos */
      borderRadius: '10px',
      backgroundColor: 'bisque',
      width: '97%', /* Minimo margen de pantalla para <500px */
      maxWidth: '500px',
      margin: 'auto',
      padding: '1px'
  }

  userName = {
    display: 'flex'
  }

  // componentDidMount = ()=>{
  //   alert("Close SpinnerWrapper")
  // }

  render (){
    const userName = this.props.usuario.userName;
    const profilePhoto = this.props.usuario.profilePhoto;
    const userPost = this.props.usuario.userPost;

    return (
      <div style={{marginBottom: '30px'}} >
        <div style={{position: 'fixed', top: '100px', left: '0'}} >Fixed o khe</div>

            <div style={this.post} className="animate__animated animate__fadeInUp" >{/* Post completo osea el card clarito redondeado con los elementos */}
              <div style={this.userName} >
                <img className="fondo-negro user-photo" src={profilePhoto} alt="user-logo" />
                <h3 className="user-title" style={{ cursor: 'pointer', width: 'calc(100% - 130px)' }} >{userName}</h3>
                <Dropdown user={userName} />
              </div>
              <img className=" img-post fondo-negro" src={userPost} alt="img-posted" />
              <p className="description" > <span>{userName}</span> Este es mi primer post</p>
              <Interaction/>
            </div>

      </div>
    );
  }

}

export default class PostsTotal extends React.Component{

  state = {
    users: []
  }

  // async componentDidMount(){
  //   const res = await fetch('http://sample-api-practice-node.herokuapp.com/usuarios')
  //   const data = await res.json();
  //   this.setState({usuarios: data})
  // }
  // https://sample-api-practice-node.herokuapp.com/usuarios

  fetchData = ()=>{
    if(JSON.stringify(this.state.users) === '[]'){

        console.log("Estoy dentro del if (fetchData in PostsTotal)");
        fetch('https://sample-api-practice-node.herokuapp.com/usuarios')
            .then( e=>{ if(e.status === 200){let data = e.json(); return data } } )
            .then( users=>{ this.setState({users: users}); /*document.getElementById("spinnerWrapper").style = "display: none;";*/ } )

    }else{
      console.log("Estoy dentro del ELSE")
      return false;
    }
    return true;
  }

  render(){
    if( this.fetchData() ){
      return (
        <div style={{marginBottom: '80px', marginTop: '80px', position: 'relative', zIndex: '1'}} >

          <div style={{ display: 'flex' }} id="spinnerWrapper" >
            <div></div>
          </div>

        </div>
      );
    }else{
      return (
        <div style={{marginBottom: '80px', marginTop: '80px', position: 'relative', zIndex: '1'}} >

          {this.state.users.map( user=><Posteo usuario={user} /> )}

        </div>
      );
    }
  }
}
