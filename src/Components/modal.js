import React from 'react';
import ModalBody from './modalbody';

class Modal extends React.Component{

    modalStyle = {
        backgroundColor: 'rgb(30,30,30,0.5)',
        backdropFilter: 'blur(6px)',
        color: 'white',
        position: 'fixed',
        top: '0vh',
        bottom: '0vh',
        left: '0px',
        right: '0px',
        width: 'auto',
        zIndex: '1'
    }

    first = 0;
    animation = () => {
        const entrance = "animate__animated animate__backInUp";
        const exit = "animate__animated animate__backOutDown";

        if(this.first === 0){
            this.first = 1;
            return 'none';
        }
        else if(this.props.estado){

            document.getElementsByTagName('body')[0].style = 'overflow: hidden;';
            return (entrance);
        }else{
            document.getElementsByTagName('body')[0].style = 'overflow: auto;';
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

export default Modal;
