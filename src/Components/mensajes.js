
import React from 'react';


class Mensaje extends React.Component{

    styles = {
        fontSize: '20px',
        fontWeight: 'bold'
    }

    render(){
        return (
            <p> <span style={this.styles} > {this.props.userName} </span> {this.props.message} </p>
        );
    }
}

class Mensajes extends React.Component{

    styles = {
        margin: 'auto'
    }
    
    render(){
        // if(this.view === '')
        return (
            <div style={this.styles} >
                <button onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                <h2>{this.props.view}</h2>
                <p>Y aca sigue la seccion de la view correspondiente</p>
                <input type='text' placeholder='Buscar' />
                <button>Nuevo mensaje</button>
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                <Mensaje userName='Andy98' message='Este es un mensaje de ejemplo' />
                
            </div>
        );
    }
}

export default Mensajes;