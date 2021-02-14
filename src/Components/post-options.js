
import React from 'react';

// background-color: rgba(255,228,196,0.6);

export default class Options extends React.Component{

    fondo = {
      backgroundColor: 'rgba(20,20,20,0.8)',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      zIndex: '1'
    }
    containerStyle = {
        background: 'rgba(0,0,0,0.7)',
        maxWidth: '500px',
        margin: 'auto',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        position: 'fixed',
        top: '20%',
        left: '0',
        right: '0',
        zIndex: '4'
    }
    closeButton = {
        fontSize: '26px',
        color: 'white',
        position: 'fixed',
        top: '-30px',
        right: '6px',
        cursor: 'pointer'
    }

    render(){
        return (
            <div>
                <div style={this.fondo} onClick={ ()=>{this.props.options(); } } >
                </div>

                <div className="animate__animated animate__fadeInUp" style={this.containerStyle} >
                    <i className="fas fa-times " style={this.closeButton} onClick={ ()=>{this.props.options(); } } ></i>
                    <button style={{height: '10vh', minHeight: '50px'}} className="btn-options" >Dejar de seguir a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button style={{height: '10vh', minHeight: '50px'}} className="btn-options" >Compartir publicación de <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button style={{height: '10vh', minHeight: '50px'}} className="btn-options" >Reportar a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                </div>
            </div>
        );

    }
}
