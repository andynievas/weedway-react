
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
                <h2 style={{textAlign: 'center', margin: '0', fontSize: '40px', fontWeight: 'bold'}} >{localStorage.getItem('weedway-user')}</h2>
                <p>Aqui puedes ver tus datos personales y posteos</p>
                <button style={this.edit} >Editar datos personales</button>
                <input type='text' style={this.input} placeholder='Nombre de usuario' />
                <input type='text' style={this.input} placeholder='Apodo' />
            </div>
        );
    }
}

export default Cuenta;
