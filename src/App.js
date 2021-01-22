
import React from 'react';

import HeaderTitle from './Components/headerTitle.js';
import Modal from './Components/modal.js';
import Posteo from './Components/postImg.js';
import Footer from './Components/footer.js';

// Static Files
import imgTitle from './Components/weedway-icon.png';

class Login extends React.Component{ // Se va a un Componente

  state = {
    name: '',
    password: ''
  }

  container = {
    width: '80%',
    maxWidth: '600px',
    margin: '60px auto',
    color: 'rgb(250,250,190)',
    background: 'tomato',
    borderTop: '1px rgb(250,50,70) solid',
    borderBottom: '6px rgb(250,50,70) solid',
    borderLeft: '2px rgb(250,50,70) solid',
    borderRight: '2px rgb(250,50,70) solid',
    borderRadius: '20px',
    boxShadow: '0px 6px 60px -10px red'
  }

  // subContainer = {
  //   width: '80%',
  //   margin: 'auto'
  // }

  icon = {
    height: '42px',
    margin: '6px'
  }

  usernameStyle = ()=>{

    if( this.state.name === "" ){
      return ("username-label");
    }
    else{
      return("username-label-focused");
    }
  }

  passwordStyle = ()=>{

    if( this.state.password === "" ){
      return ("password-label");
    }
    else{
      return("password-label-focused");
    }
  }

  onchange = e => {
    this.setState( { name: e.target.value, password: e.target.value } );
  }

  onsubmit = e => {
    // e.preventDefault();
    if( this.state.name !== '' ){
      localStorage.setItem('weedway-user', this.state.name);
    }
    //e.target[0].value = ''; // e.target[0] es el input correspondiente al post
    console.log(this.state)
  }

  render(){
    return (

      <div>
        <div className="weedway" style={{ display: 'flex', width: '100%', justifyContent: 'center' }} id="weedway">
            <img style={ this.icon } src={ imgTitle } alt="«icon»" />
            <h2 style={{margin: '3px'}} >WeedWay</h2>
        </div>

        {/* <div style={{ height: 'calc( 100vh - 10px )', display: 'flex', justifyContent: 'center', alignItems: 'center' }} > */}
          <div style={this.container} >

            <h3 style={{textAlign: 'center', fontSize: '34px'}} >Login</h3>

            <div style={this.subContainer} >

              <form onSubmit={this.onsubmit} autoComplete="on" id="loginForm" >
                {/* <label className="label" for='username' style={this.label} >Nombre de usuario</label> */}
                
                <div style={{ position: 'relative', margin: '10px' }} id='username' >
                  <input type='text' style={this.inputs} onChange={this.onchange} autoComplete="on" /* id='username' */ />
                  <span className={ this.usernameStyle() } >Usuario</span>
                </div>

                {/* <label className="label" for='password-user' style={this.label} >Contraseña</label> */}

                <div style={{ position: 'relative', margin: '10px' }} id='password-user' >
                  <input type='password' style={this.inputs} onChange={this.onchange} /*id='password-user'*/ />
                  <span className={ this.passwordStyle() } /*"password-label"*/ >Contraseña</span>
                </div>

                <input type='submit' value='Log in' onClick={ ()=>{} } id="login-btn" />
              </form>

            </div>

          </div>
        {/* </div> */}

      </div>

    );
  }
}

class App extends React.Component {

  menuLateral = {
    show: true
  }
  showMenu = () => {
    this.menuLateral = {
      show: !this.menuLateral.show
    }
    // console.log(this.menuLateral)
  }

  state = {
    modal: false
  }
  textoModal = '';

  changEstado = (texto) => {
    this.setState({modal: !this.state.modal});
    this.textoModal = texto;
  }

  usuarios = [
    {
      userName: 'andynievas92',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image',
      id: 0
    },
    {
      userName: 'reyJulian',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image',
      id: 1
    },
    {
      userName: 'mamfristo',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image',
      id: 2
    },
    {
      userName: 'salchipapa',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image',
      id: 3
    },
    {
      userName: 'ndeaaaAa',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image',
      id: 4
    },
    {
      userName: 'otros',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image',
      id: 5
    }
  ]

  render(){

    if( localStorage.getItem('weedway-user') ){
      return (
        <div className="App">
          <HeaderTitle estado={this.menuLateral.show} showMenu={this.showMenu} setEstado={this.changEstado} />
          <Modal estado={this.state.modal} setEstado={this.changEstado} view={this.textoModal} />
          
          {this.usuarios.map( user=><Posteo key={user.id} posteo={user} /> ) }
    
          {/* userName={post.userName} profilePhoto={post.profilePhoto} userPost={post.userPost} */}
          
          <Footer setEstado={this.changEstado} />
        </div>
      );
    } else {
      return <Login />;
    }

  }
  
}

export default App;
