import React from 'react';
import ModalBody from './modalbody';

export default class Modal extends React.Component{

    modalStyle = {
        backgroundColor: 'rgba(30,30,30,0)',
        backdropFilter: 'blur(6px)',
        color: 'white',
        position: 'fixed',
        top: '0vh',
        bottom: '0vh',
        left: '0px',
        right: '0px',
        width: 'auto',
        zIndex: '4'
    }

    first = 0;
    animation = () => {
        const entrance = "animate__animated animate__fadeInUp";
        const exit = "animate__animated animate__fadeOutDown";

        if(this.first === 0){
            this.first = 1;
            return 'none';
        }
        else if(this.props.estado){
          // alert("ocultar body")
            return (entrance);
        }else{
            return (exit);
        }
    }

    render(){

        return (
            <div className={ this.animation() }  style={this.modalStyle}>
                <ModalBody view={this.props.view} setEstado={this.props.setEstado} />
            </div>
        );

    }
}
