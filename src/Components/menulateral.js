
import React from 'react';
import Cuenta from './cuenta';


export default class MenuLateral extends React.Component{

  fondoMenuLateral = {
    display: 'flex',
    backgroundColor: 'rgba(10,10,10,0.6)',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    height: '100vh',
    zIndex: '4'
  }
  estiloMenuLateral = {
    position: 'fixed',
    right: '0',
    top: '0',
    bottom: '0',
    width: '40%',
    height: '100vh',
    minWidth: '300px',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: 'rgb(30,30,30)',
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

  //   const entrance = "animate__animated animate__fadeInRight";
  //   const exit = "animate__animated animate__fadeOutRight";

  render(){

    return (
      <div style={this.fondoMenuLateral} id='menuLateral' >
        <div onClick={ ()=>{ this.props.showMenu(); }} style={{ width: '100%' }} ></div>

        <div style={this.estiloMenuLateral} className="animate__animated animate__fadeInRight" >
          <button id="closeMenuLat" style={this.botonCerrar} onClick={ ()=>{ this.props.showMenu(); }} >&times; Cerrar</button>
            Hola soy el menu lateral que aparezco desde la derecha
          <Cuenta />
        </div>
      </div>
    );
  }
}
