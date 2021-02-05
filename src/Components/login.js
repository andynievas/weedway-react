
import React from 'react';

// Static Files
import imgTitle from './weedway-icon.png';

export default class Login extends React.Component{ // Se va a un Componente

  state = {
    name: '',
    password: ''
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

  render(){
    return (

      <div>
        <div style={{ backgroundColor: 'rgb(30,30,30)', display: 'flex', width: '100%', justifyContent: 'center' }} id="weedway-title">
            <img style={ this.icon } src={ imgTitle } alt="«icon»" />
            <h2 style={{margin: '3px'}} >WeedWay</h2>
        </div>

        {/* <div style={{ height: 'calc( 100vh - 10px )', display: 'flex', justifyContent: 'center', alignItems: 'center' }} > */}
          <div style={this.container} >

            <h3 style={{margin: '10px', textAlign: 'center', fontSize: '34px'}} >Welcome to WeedWay</h3>
            <p style={{margin: '0 0 30px 0', textAlign: 'center', fontSize: '20px'}} >Tu sitio favorito!</p>

            <div style={this.subContainer} >

              <form onSubmit={this.onsubmit} autoComplete="on" id="loginForm" >

                <div style={{ position: 'relative', margin: '20px 30px' }} id='username' >
                  <input type='text' style={this.inputs} onChange={this.onchangeUser} autoComplete="on" id='username-input' />
                  <label htmlFor="username-input" className={ this.usernameStyle() } >Usuario</label>
                </div>

                <div style={{ position: 'relative', margin: '20px 30px' }} id='password-user' >
                  <input type='password' style={this.inputs} onChange={this.onchangePass} id='password-user-input' />
                  <label htmlFor="password-user-input" className={ this.passwordStyle() } /*"password-label"*/ >Contraseña</label>
                </div>

                <input type='submit' value='Log in' onClick={ ()=>{} } id="login-btn" />
              </form>

            </div>

          </div>
        {/* </div> */}

        <div className="allRightsReserved"
          style={{
            width: '100%',
            height: '140px'
          }} >

          <h2
            // style={{
            //   position: 'absolute',
            //   bottom: '0'
            // }}

            >Todos los derechos reservados
            <span style={{display: 'block', padding: '6px 0'}} >Developed By Andy Nievas</span>
            <span style={{display: 'block', padding: '6px 0'}} >©2021</span>

          </h2>

        </div>

      </div>

    );
  }
}
