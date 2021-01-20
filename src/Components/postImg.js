
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
  
class Comentario extends React.Component{ // Quiero hacer autofocus al clickear en el comentar

    ident = 0;

    comentario = {
      'user': localStorage.getItem('weedway-user'),
      'comentario': '',
      'id': this.ident
    }

    onsubmit = e => {
      e.preventDefault();
      if( this.comentario.comentario.trim() !== '' ){
        this.props.addComment(this.comentario.user, this.comentario.comentario, this.comentario.id);
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
  
    render(){
        return (
          <form className="comentar " onSubmit={this.onsubmit} autoComplete="off" >
            <input type="text" className="comentario-text-input" name="comentario" onChange={this.onchange} placeholder="Escribe aquí tu comentario..." />
            <input type="submit" className="send" style={{padding: '0'}} value='send' />
          </form>
        );
    }
  }

class Interaction extends React.Component {

    state = {
      comments: [
        {
          'user': 'Usuario2',
          'comentario': 'Que wapo estas <3',
          'id': 0
        },
        {
          'user': 'Usuario3',
          'comentario': 'Bombonaso',
          'id': 1
        }
      ]
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
      
      setTimeout( ()=>{
        console.log(this.state.comments);
      } ,1000);

    }
  
    render(){
      return (
        <div className="interaction-section" >
          <InteractionFav/>
          <i className="far fa-share interaction-button" ></i>
          <p className="description" > <span>Usuario1</span> Este es mi primer post</p>
          {this.state.comments.map( e=> <p key={e.id} className="animate__animated animate__zoomIn description comentario" > { <span> {e.user} </span> } {e.comentario} </p> )}
          <Comentario addComment={this.addComment} />
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
        return (
          <Options
            estado={this.state.show}
            setEstado={this.changEstado}
            user={this.props.user}
          />
        );
      }else{
        return (
          <div>
            <i className="fas fa-ellipsis-h options" onClick={ ()=>{this.setState({show: !this.state.show})} } ></i>
          </div>
        );
      }
    }
  }

function PostImg(props){
  // console.log(props)
  const userName = props.posteo.userName;
  const profilePhoto = props.posteo.profilePhoto;
  const userPost = props.posteo.userPost;
    return (
      <div className="post-full" >
        <div className="userName" >
          <img className="fondo-negro user-photo" src={profilePhoto} alt="user-logo" />
          <h3 className="user-title" >{userName}</h3>
          <Dropdown user={userName} />
        </div>
        <img className=" img-post fondo-negro" src={userPost} alt="img-posted" />
        <Interaction/>
      </div>
    );
}
  
class Posteo extends React.Component{

  render (){
    return (
      <div className="animate__animated animate__fadeInUp" >
        <br/>
        <PostImg
          posteo={this.props.posteo}
        />
        <br/>
      </div>
    );
  }
  
}

export default Posteo;