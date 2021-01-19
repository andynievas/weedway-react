
import React from 'react';


class Options extends React.Component{

    modalStyle = {
        background: 'rgba(255,228,196,0.7)',
        backdropFilter: 'blur(8px)',
        position: 'absolute',
        top: '60px',
        bottom: '-300px',
        left: '0px',
        right: '0px',
        width: 'auto',
        
        zIndex: '2'
    }

    optionsStyle = {
        position: 'absolute',
        top: '-60px'
    }

    containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
  
    buttonStyle = {
        display: 'block',
        width: '100%'
    }

    render(){
        return (
            <div
            className="animate__animated animate__fadeInUp"
            style={this.modalStyle} >
            
                {/* <i className="fas fa-ellipsis-h options" style={this.optionsStyle} onClick={ ()=>{this.props.setEstado(); } } ></i> */}
                <i className="fas fa-times options" style={this.optionsStyle} onClick={ ()=>{this.props.setEstado(); } } ></i>
                
                <div style={this.containerStyle} >
                    <button className="btn-block btn-options" >Dejar de seguir a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button className="btn-block btn-options" >Compartir publicación de <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button className="btn-block btn-options" >Reportar a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                </div>
            </div>
        );

    }
}

export default Options;