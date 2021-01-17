
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
        marginTop: '70px'
    }

    buttonStyle = {
        margin: '0px',
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        fontSize: '28px'
    }

    view(){
        if (this.props.view === 'Mensajes'){
            return (
                <Mensajes />
            );
        }else if (this.props.view === 'Cuenta'){
            return (
                <Cuenta />
            );
        }
    }
    
    render(){
        // if (this.props.view === 'Mensajes'){
            return (
                <div style={this.styles} >
                    <div style={{display: 'flex'}} >
                        <button style={this.buttonStyle} onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                        <p style={{width: '100%', textAlign: 'center', fontSize: '26px', lineHeight: '50px', height: '50px', padding: '0 45px 0 0', margin: '0px', color: 'lightgreen'}} >{this.props.view}</p>
                    </div>
                    {this.view()}
                </div>
            );
        /*} else if (this.props.view === 'Cuenta'){
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
        }*/
        
    }
}

export default ModalBody;