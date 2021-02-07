
import React from 'react';

// Static Files
import imgTitle from './weedway-icon.png';

export default class Login extends React.Component{ // Se va a un Componente

  // state = {
  //   name: '',
  //   password: ''
  // }

  state = {
    login: true
  }

  container = {
    width: '80%',
    maxWidth: '600px',
    margin: '10vh auto',
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
  loginBtn = {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: '16px',
    border: '3px solid rgb(250, 180, 150)',
    display: 'block',
    width: '60%',
    height: '40px',
    minWidth: '150px',
    margin: '30px auto',
    cursor: 'pointer',
    borderRadius: '20px'
  }

  data = {
    name: '',
    password: ''
  }
  usernameStyle = ()=>{
    if( this.data.name === "" ){
      return ("username-label");
    }
    else{
      return("username-label-focused");
    }
  }
  passwordStyle = ()=>{
    if( this.data.password === "" ){
      return ("password-label");
    }
    else{
      return("password-label-focused");
    }
  }

  onchangeUser = e => {
    // console.log(e.target);
    this.setState( { name: e.target.value, password: this.state.password } );
  }
  onchangePass = e => {
    // console.log(e.target);
    this.setState( { name: this.state.name, password: e.target.value } );
  }

  onsubmit = e => {
    // e.preventDefault();
    if( this.state.name !== '' ){
      localStorage.setItem('weedway-user', this.state.name);
    }
    //e.target[0].value = ''; // e.target[0] es el input correspondiente al post
    console.log(this.state)
  }

  login = ()=>{
    return (
      <div style={this.subContainer} >
        <button onClick={()=>{this.setState({login: !this.state.login}); }} >Register</button>
        <form onSubmit={this.onsubmit} autoComplete="on" id="formToAtuh" >
          <input type='text' className="inputForm" onChange={this.onchangeUser} autoComplete="on" id='username-login' />
          <label htmlFor="username-login" className={ this.usernameStyle() } >Usuario</label>

          <input type='password' className="inputForm" onChange={this.onchangePass} id='password-login' />
          <label htmlFor="password-login" className={ this.passwordStyle() } /*"password-label"*/ >Contraseña</label>

          <button type='submit' style={this.loginBtn} id="login-btn">Log in</button>
        </form>
      </div>
    );
  }

  register = ()=>{
    return (
      <div style={this.subContainer} >
        <button onClick={()=>{this.setState({login: !this.state.login}); }} >Login</button>
        <form onSubmit={this.onsubmit} autoComplete="on" id="formToAtuh" >
          <input type="text" className="inputForm" />
          <input type="text" className="inputForm" />
          <input type="text" className="inputForm" />
          <input type="text" className="inputForm" />
          <input type="text" className="inputForm" />

          <button type='submit' style={this.loginBtn} onClick={ ()=>{alert("Registrado con exito")} } id="login-btn" >Register</button>
        </form>
      </div>

    );
  }

  render(){
    document.getElementById("body").style="height: 100vh";
      return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column',  justifyContent: 'space-around'}} >
          <div style={{ backgroundColor: 'rgb(30,30,30)', display: 'flex', width: '100%', justifyContent: 'center' }} id="weedway-title">
              <img style={ this.icon } src={ imgTitle } alt="«icon»" />
              <h2 style={{margin: '3px'}} >WeedWay</h2>
          </div>

          <div style={this.container} >
            <h3 style={{margin: '10px', textAlign: 'center', fontSize: '34px'}} >Welcome to WeedWay</h3>
            <p style={{margin: '0 0 30px 0', textAlign: 'center', fontSize: '20px'}} >Tu sitio favorito!</p>
            {this.state.login ? this.login() : this.register()}
          </div>

          <div className="allRightsReserved"
            style={{
              width: '100%',
              height: '140px'
            }} >

            <h2>Todos los derechos reservados
              <span style={{display: 'block', padding: '6px 0'}} >Developed By Andy Nievas</span>
              <span style={{display: 'block', padding: '6px 0'}} >©2021</span>
            </h2>

          </div>

        </div>

      );

  }
}
