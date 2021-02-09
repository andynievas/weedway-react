
import React from 'react';

// Static Files
import imgTitle from './weedway-icon.png';

class LoginForm extends React.Component{

  state = {
    name: "",
    password: ""
  }

  onchangeUser = e => {
    // console.log(e.target);
    this.setState( { name: e.target.value } );
  }
  onchangePass = e => {
    // console.log(e.target);
    this.setState( { password: e.target.value } );
  }
  onsubmit = e => {
    // e.preventDefault();
    if( this.state.name !== '' ){
      localStorage.setItem('weedway-user', this.state.name);
    }else{
      e.preventDefault();
      alert("Usuario vacío")
      // document.
    }
    //e.target[0].value = ''; // e.target[0] es el input correspondiente al post
  }

  render(){
    return (
      <div className="animate__animated animate__fadeInUp" >

        <form onSubmit={this.onsubmit} autoComplete="on" id="formToAuth" >
          <div style={{position: 'relative', margin: '10px 0'}} >
            <input type='text' className="inputForm" value={this.state.name} onChange={this.onchangeUser} autoComplete="on" id='username-login' />
            <label htmlFor="username-login" className="label-input-login" >Usuario</label>
          </div>

          <div style={{position: 'relative', margin: '10px 0'}} >
            <input type='password' className="inputForm" value={this.state.password} onChange={this.onchangePass} id='password-login' />
            <label htmlFor="password-login" className="label-input-login" /*"password-label"*/ >Contraseña</label>
          </div>

          <span style={{cursor: 'pointer'}} id="forgotPass" >Forgot password</span>
          <div style={{display: 'flex', margin: '20px'}} >
            <p id="swapSession" onClick={ ()=>{ this.props.cambiarEstado() } } >Crear cuenta</p>
            <button id="login-btn">Log in</button>
          </div>
        </form>
      </div>
    );
  }
}

class RegisterForm extends React.Component{

  onsubmit = e => {
    // e.preventDefault();
    if( this.state.name !== '' ){
      localStorage.setItem('weedway-user', this.data.name);
    }else{
      e.preventDefault();
      alert("Usuario vacío")
      // document.
    }
    //e.target[0].value = ''; // e.target[0] es el input correspondiente al post
  }

  render(){
    return (
      <div className="animate__animated animate__fadeInUp" >

        <form
        onSubmit={this.onsubmit}
        autoComplete="on" id="formToAuth" >

          <div style={{position: 'relative', margin: '10px 0'}} >
            <input type="text" className="inputForm" id="username-register" value="" />
            <label htmlFor="username-register" className="label-input-login" >Nombre de usuario</label>
          </div>

          <div style={{position: 'relative', margin: '10px 0'}} >
            <input type="text" className="inputForm" placeholder="Correo" value="" />
            <label htmlFor="username-register" className="label-input-login" >Nombre de usuario</label>
          </div>

          <div style={{position: 'relative', margin: '10px 0'}} >
            <input type="text" className="inputForm" placeholder="Nueva contraseña" value="" />
            <label htmlFor="username-register" className="label-input-login" >Nombre de usuario</label>
          </div>

          <div style={{position: 'relative', margin: '10px 0'}} >
            <input type="text" className="inputForm" placeholder="Confirmar contraseña" value="" />
            <label htmlFor="username-register" className="label-input-login" >Nombre de usuario</label>
          </div>

          <div style={{display: 'flex', margin: '20px'}} >
            <button id="swapSession" onClick={ ()=>{ this.props.cambiarEstado() } } >Prefiero iniciar sesión</button>
            <button type='submit' onClick={ ()=>{alert("Registrado con exito")} } id="login-btn" >Register</button>
          </div>
        </form>

      </div>
    );
  }
}

export default class Login extends React.Component{

  state = {
    login: true
  }

  container = {
    width: '96%',
    maxWidth: '600px',
    margin: '70px auto',
    color: 'rgb(250,250,190)',
    background: 'tomato',
    borderTop: '1px rgb(250,50,70) solid',
    borderBottom: '6px rgb(250,50,70) solid',
    borderLeft: '2px rgb(250,50,70) solid',
    borderRight: '2px rgb(250,50,70) solid',
    borderRadius: '20px',
    boxShadow: '0px 6px 60px -10px red'
  }
  icon = {
    height: '42px',
    margin: '6px'
  }

  cambiarEstado = ()=>{
    this.setState({login: !this.state.login});
  }

  render(){
    document.getElementById("body").style="min-height: 100vh";
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',  justifyContent: 'space-between'}} >
          <div style={{ backgroundColor: 'rgb(30,30,30)', display: 'flex', width: '100%', justifyContent: 'center' }} id="weedway-title">
              <img style={ this.icon } src={ imgTitle } alt="«icon»" />
              <h2 style={{margin: '3px'}} >WeedWay</h2>
          </div>

          <div style={this.container} >
            <h3 style={{margin: '10px', textAlign: 'center', fontSize: '34px'}} >Welcome to WeedWay</h3>
            <p style={{margin: '0 0 10px 0', textAlign: 'center', fontSize: '20px'}} >Tu sitio favorito!</p>
            {this.state.login ? <LoginForm cambiarEstado={this.cambiarEstado} /> : <RegisterForm cambiarEstado={this.cambiarEstado} />}
          </div>

          <div className="allRightsReserved" style={{width: '100%'}} >

            <h2 style={{padding: '30px 0'}} >
              <span style={{display: 'block', padding: '6px 0'}} >Todos los derechos reservados</span>
              <span style={{display: 'block', padding: '6px 0'}} >Developed By Andy Nievas</span>
              <span style={{display: 'block', padding: '6px 0'}} >©2021</span>
            </h2>

          </div>

        </div>

      );

  }
}
