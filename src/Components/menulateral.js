
import React from 'react';
import Cuenta from './cuenta';


export default class MenuLateral extends React.Component{

  // state = {
  //   show: false
  // }

  fondo = {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgb(0,0,0,0.6)',
      zIndex: '1'
  }
  estiloMenuLateral = {
    position: 'fixed',
    right: '0',
    top: '0',
    bottom: '0',
    width: '40%',
    minWidth: '300px',
    maxWidth: '500px',
    backgroundColor: 'rgb(30,30,30)',
  //   backdropFilter: 'blur(40px)',
    boxShadow: '0px 0px 16px 10px rgb(20,20,20)',
    overflowY: 'auto',
    zIndex: '2'
  }
  botonCerrar = {
      display: 'block',
      width: '100%',
      backgroundColor: 'red',
      fontSize: '30px',
      borderRadius: '2rem'
  }
  
  // first = 0;
  animation = ()=>{

    const entrance = "animate__animated animate__bounceInRight";
    const exit = "animate__animated animate__bounceOutRight";

    if(this.props.first === 0){
      return 'none';

    }else if(this.props.estado){
      document.getElementsByTagName('body')[0].style = 'overflow: hidden;';
      return entrance;

    }else {
      document.getElementsByTagName('body')[0].style = 'overflow: auto;';
      return exit;
    }
  }
  
  render(){

    return (
      <div style={this.fondo} className={ this.animation() } id='menuLateral' >

          <div style={this.estiloMenuLateral} >

              <div style={{margin: '20px'}} >
                  <button style={this.botonCerrar} onClick={ ()=>{ this.props.showMenu(); }} >&times; Cerrar Menu</button>
                  Hola soy el menu lateral que aparezco desde la derecha
                  
                  <Cuenta />
              </div>

          </div>

      </div>
    );
  }
  
}