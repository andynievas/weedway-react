
import React from 'react';
import Mensajes from './mensajes';
import Foto from './foto';
import Notifications from './notification';
import Lugares from './lugares';


class Buscar extends React.Component{

    render(){
        return (
            <div>
                Busca a tus amigos
            </div>
        );
    }
}

class ModalBody extends React.Component{

    styles = {
        margin: 'auto',
        padding: '0 20px',
        color: 'rgb(120,120,120)',
        backgroundColor: 'rgba(220,220,220,1)',
        // backdropFilter: 'blur(0px)',
        borderRadius: '20px 20px 0 0',
        // marginTop: '70px',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        top: '64px',
        // height: 'calc(100% - 70px)'
    }

    buttonStyle = {
        margin: '0px',
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        fontSize: '28px'
    }

    view = ()=>{
        if (this.props.view === 'Buscar'){
            return (
                <Buscar />
            );
        }else if (this.props.view === 'Foto'){
            return (
                <Foto />
            );
        }else if (this.props.view === 'Mensajes'){
            return (
                <Mensajes />
            );
        }else if (this.props.view === 'Notifications'){
            return (
                <Notifications />
            );
        }else if (this.props.view === 'Lugares'){
            return (
                <Lugares />
            );
        }else{
            // if (this.props.view === 'User')
            return (
                <div style={{ backgroundColor: 'green' }} >
                    Posteos recientes:
                    <div>
                        <div>Total posts: 6</div>
                    </div>

                    <div className="profile-posts" >
                        <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                        <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                        <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                        <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                        <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                        <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                    </div>
                    <div style={{width: '200px', border: '3px blue solid'}} >
                      <div style={{width: 'auto', border: '2px red solid', margin: '10%'}} >
                        asdfgh
                      </div>
                    </div>
                </div>
                // <UserProfile nombre del usuario a visitar />
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
