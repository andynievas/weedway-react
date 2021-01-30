
import React from 'react';


class Options extends React.Component{

    modalStyle = {
        background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(8px)',
        position: 'fixed',
        top: '-100px',
        bottom: '0',
        left: '100px',
        right: '0',
        zIndex: '4'
    }

    containerStyle = {
        background: 'rgba(255,228,196,0.7)',
        position: 'fixed',
        left: '100px',
        right: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '430px',
        border: '5px red solid'
    }

    closeButton = {
        background: 'rgb(25,28,196)',
        position: 'fixed',
        top: '60px'
    }

    buttonStyle = {
        display: 'block',
        width: '100%'
    }

    render(){
        return (
            <div
            style={this.modalStyle} >

                <i className="fas fa-times options" onClick={ ()=>{this.props.setEstado(); } } ></i>
                <div className="animate__animated animate__fadeInUp" style={this.containerStyle} >
                    <button className="btn-block btn-options" >Dejar de seguir a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button className="btn-block btn-options" >Compartir publicación de <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button className="btn-block btn-options" >Reportar a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                </div>
            </div>
        );

    }
}

export default Options;
