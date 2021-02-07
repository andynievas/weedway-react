
import React from 'react';


class Mensaje extends React.Component{

    styles = {
      color: 'red',
      fontSize: '20px',
    }

    render(){
      return (
        <p style={this.styles} > <span style={{fontWeight: 'bold'}} > {this.props.userName} </span> {this.props.message} </p>
      );
    }
}

class Mensajes extends React.Component{

    styles = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        top: '120px',
        padding: '0 14px',
        overflowY: 'auto' // Esta es la clave para la scrollbar
    }

    render(){
        return (
            <div style={this.styles} >
                <h2>{this.props.view}</h2>
                <p>Y aca sigue la seccion de la view correspondiente</p>
                <input type='text' style={{width: '200px', maxWidth: 'calc(100% - 8px)', margin: 'auto'}} placeholder='Buscar' />
                <button>Nuevo mensaje</button>
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo para ver como es que se ve' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />

            </div>
        );
    }
}

export default Mensajes;
