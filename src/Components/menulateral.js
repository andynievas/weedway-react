
import React from 'react';
import Cuenta from './cuenta';


export default class MenuLateral extends React.Component{

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
  
    animation = ()=>{
    //   const entrance = "animate__backInRight";
    //   const exit = "animate__backOutRight";

        const entrance = "animate__bounceInRight";
        const exit = "animate__bounceOutRight";
  
        if(this.props.estado){
        document.getElementsByTagName('body')[0].style = 'overflow: hidden;';
        return entrance;
        }else {
        document.getElementsByTagName('body')[0].style = 'overflow: auto;';
        return exit;
        }
    }
  
    render(){
  
      return (
        <div style={this.fondo} className={ "animate__animated " + this.animation() } id='menuLateral' >

            <div style={this.estiloMenuLateral} >

                <div style={{margin: '20px'}} >
                    <button style={this.botonCerrar} onClick={ ()=>{ this.props.showMenu(); }} >&times; Cerrar Menu</button>
                    Hola soy el menu lateral que aparezco desde la derecha
                    <p>Hola soy la opcion numero 1</p>
                    <p>Hola soy la opcion numero 2</p>
                    <p>Hola soy la opcion numero 3</p>
                    <p>Hola soy la opcion numero 4</p>
                    <p>Hola soy la opcion numero 5</p>
                    <p>Hola soy la opcion numero 6</p>
                    <p>Hola soy la opcion numero 7</p>
                    <p>Hola soy la opcion numero 8</p>
                    <p>Hola soy la opcion numero 9</p>
                    
                    <Cuenta />
                </div>

            </div>

        </div>
      );
    }
  
  }