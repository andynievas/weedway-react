
import React from 'react';
import Mensajes from './mensajes';
import Cuenta from './cuenta';


class ModalBody extends React.Component{

    styles = {
        margin: 'auto',
        padding: '0 20px',
        color: 'rgb(220,220,220)',
        background: 'rgb(60,60,60)',
        borderRadius: '20px 20px 0 0',
        position: 'fixed',
        top: '68px',
        bottom: '0',
        left: '0',
        right: '0'
    }

    buttonStyle = {
        position: 'absolute',
        margin: '0px',
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        fontSize: '28px'
    }
    
    render(){
        if (this.props.view === 'Mensajes'){
            return (
                <div style={this.styles} >
                    <button style={this.buttonStyle} onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                    <Mensajes setEstado={this.props.setEstado} />
                </div>
            );
        } else if (this.props.view === 'Cuenta'){
            return (
                <div style={this.styles} >
                    <button style={this.buttonStyle} onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                    <Cuenta setEstado={this.props.setEstado} />
                </div>
            );
        } else if (this.props.view === 'Notifications'){
            return (
                <div style={this.styles} >
                    <button style={this.buttonStyle} onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                    <Mensajes setEstado={this.props.setEstado} />
                </div>
            );
        } else {
            return (
                <div style={this.styles} >
                    <button style={this.buttonStyle} onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                    <h2>{this.props.view}</h2>
                    <p>Y aca sigue la seccion de la view correspondiente</p>
                </div>
            );
        }
        
    }
}

export default ModalBody;