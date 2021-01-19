
import React from 'react';


class Cuenta extends React.Component{

    input = {
        display: 'block',
        width: '80%',
        margin: 'auto'
    }

    edit = {
        display: 'block',
        width: '80%',
        margin: 'auto',
        backgroundColor: 'lightgreen'
    }
    
    render(){
        return (
            <div style={{maxWidth: '300px', margin: 'auto'}} >
                <h5 style={{textAlign: 'center', margin: '0', fontSize: '40px', fontWeight: 'bold', overflow: 'hidden'}} >{localStorage.getItem('weedway-user')}</h5>
                <p>Aqui puedes ver tus datos personales y posteos</p>
                <button style={this.edit} >Editar datos personales</button>
                <a href='/' style={{textDecoration: 'none', color: 'red', display: 'block'}} onClick={ ()=>{localStorage.removeItem('weedway-user')} } >Cerrar sesión</a>
                <input type='text' style={this.input} placeholder='Nombre de usuario' />
                <input type='text' style={this.input} placeholder='Apodo' />
            </div>
        );
    }
}

export default Cuenta;
