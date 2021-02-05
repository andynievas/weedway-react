
import React from 'react';

export default class Options extends React.Component{

    containerStyle = {
        background: 'rgba(255,228,196,0.7)',
        position: 'fixed',
        top: '60px',
        left: '0px',
        right: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0 0 10px 10px',
        height: '230px',
        zIndex: '4'
    }
    closeButton = {
        fontSize: '26px',
        color: 'rgb(40,40,40)',
        position: 'fixed',
        top: '16px',
        right: '20px',
        cursor: 'pointer'
    }

    render(){
        return (
            <div style={{position: 'fixed', left: '0', top: '0'}} >
                <i className="fas fa-times " style={this.closeButton} onClick={ ()=>{this.props.setEstado(); } } ></i>
                <div style={this.containerStyle} >
                    <button className="btn-block btn-options" >Dejar de seguir a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button className="btn-block btn-options" >Compartir publicación de <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                    <button className="btn-block btn-options" style={{borderRadius: '0 0 9px 9px'}} >Reportar a <span style={{fontWeight: 'bold'}} >"{this.props.user}"</span></button>
                </div>
            </div>
        );

    }
}
