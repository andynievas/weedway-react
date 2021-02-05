
import React from 'react';
import Cuenta from './cuenta';


export default class MenuLateral extends React.Component{

  fondoMenuLateral = {
    display: 'block',
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
    if(this.props.estado){
      document.getElementsByTagName('body')[0].style = 'overflow: hidden;';
      return entrance;
    }
  }

  cerrar = ()=>{
    this.props.showMenu();

    // var specifiedElement = document.getElementById("closeMenuLat");
    // //I'm using "click" but it works with any event
    // document.addEventListener('click', (event)=>{
    //   var isClickInside = specifiedElement.contains(event.target);
    //
    //   if (!isClickInside) {
    //     //the click was outside the specifiedElement, do something
    //     this.props.showMenu();
    //   }
    // });
  }

  render(){

    return (
      <div style={this.fondoMenuLateral} onClick={()=>{this.cerrar() }} id='menuLateral' >
      <div>Click en esta area deberia cerrar el menu</div>

          <div style={this.estiloMenuLateral} className={ this.animation() } >

              <div style={{margin: '20px'}} >
                  <button id="closeMenuLat" style={this.botonCerrar} onClick={ ()=>{ this.props.showMenu(); }} >&times; Cerrar</button>
                    Hola soy el menu lateral que aparezco desde la derecha
                  <button onClick={()=>{this.setState({viendo: true})}} >Cambiar el estado</button>

                  <Cuenta />
              </div>

          </div>

      </div>
    );
  }
}
