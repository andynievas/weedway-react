
import React from 'react';
import Mensajes from './mensajes';
import Cuenta from './cuenta';
import Foto from './foto';
import Notifications from './notification';
import Lugares from './lugares';


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
        }else if (this.props.view === 'Foto'){
            return (
                <Foto />
            );
        }else if (this.props.view === 'Notifications'){
            return (
                <Notifications />
            );
        }else if (this.props.view === 'Lugares'){
            return (
                <Lugares />
            );
        }
    }
    
    render(){
        return (
            <div style={this.styles} >
                <div style={{display: 'flex'}} >
                    <button style={this.buttonStyle} onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                    <p style={{width: '100%', textAlign: 'center', fontSize: '26px', lineHeight: '50px', height: '50px', padding: '0 45px 0 0', margin: '0px'/* , color: 'lightgreen' */}} >{this.props.view}</p>
                </div>
                {this.view()}
            </div>
        );
    }
}

export default ModalBody;