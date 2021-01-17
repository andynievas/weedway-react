import React from 'react';
import ModalBody from './modalbody';

class Modal extends React.Component{

    modalStyle = {
        background: 'rgb(30,30,30,0.5)',
        color: 'white',
        position: 'fixed',
        top: '0vh',
        bottom: '0vh',
        left: '0px',
        right: '0px',
        width: 'auto',
        zIndex: '1'
    }

    animation = () => {
        const entrance = " animate__backInUp";
        const exit = " animate__backOutDown";

        if(this.props.estado){
            document.getElementsByTagName('body')[0].style = 'overflow: hidden;';
            return (entrance);
        }else{
            document.getElementsByTagName('body')[0].style = 'overflow: auto;';
            return (exit);
        }
    }

    render(){

        return (
            <div className={"animate__animated" + this.animation() }  style={this.modalStyle}>
                <ModalBody view={this.props.view} setEstado={this.props.setEstado} />
            </div>
        );

    }
}

export default Modal;