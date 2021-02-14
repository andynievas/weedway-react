
import React from 'react';


class Mensaje extends React.Component{

    styles = {
      color: 'rgb(50,50,50)',
      fontSize: '20px',
    }

    render(){
      return (
        <p style={this.styles} > <span style={{fontWeight: 'bold'}} > {this.props.userName}: </span> {this.props.message} </p>
      );
    }
}

class Mensajes extends React.Component{

    styles = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        top: '140px',
        padding: '0 14px',
        overflowY: 'auto' // Esta es la clave para la scrollbar
    }
    buscar = {
      display: 'none',/* block */
      width: '80%',
      margin: '10px auto',
      padding: '10px',
      border: 'none',
      borderRadius: '10px'
    }

    render(){
        return (
            <div style={this.styles} >
                <input type='text' style={this.buscar} placeholder='Buscar' />
                <button>Nuevo mensaje</button>
                <Mensaje userName='Usuario1' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Usuario2' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Usuario3' message='Este es un mensaje de ejemplo' />

            </div>
        );
    }
}

export default Mensajes;
