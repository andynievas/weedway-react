
import React from 'react';
import Cuenta from './cuenta';


export default class MenuLateral extends React.Component{

  estiloMenuLateral = {
    position: 'fixed',
    right: '0',
    top: '0',
    bottom: '0',
    width: '40%',
    height: '100vh',
    minWidth: '300px',
    maxWidth: '500px',
    backgroundColor: 'rgb(30,30,30)',
  //   backdropFilter: 'blur(40px)',
    boxShadow: '0px 0px 16px 10px rgb(20,20,20)',
    overflowY: 'auto',
    zIndex: '5'
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

    const entrance = "animate__animated animate__fadeInRight";
    const exit = "animate__animated animate__fadeOutRight";

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
      <div /*style={this.fondo}*/  id='menuLateral' >

          <div style={this.estiloMenuLateral} className={ this.animation() } >

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
