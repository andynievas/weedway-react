
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
        // padding: '40px 20px 0 20px',
        height: 'calc(100vh - 120px)',
        overflowY: 'auto' // Esta es la clave para la scrollbar
    }
    
    render(){
        // if(this.view === '')
        return (
            <div style={this.styles} >
                {/* <button onClick={ ()=>{this.props.setEstado()} } > &times;</button> */}
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
                
            </div>
        );
    }
}

export default Mensajes;