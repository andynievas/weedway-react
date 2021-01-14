
import React from 'react';


class Cuenta extends React.Component{

    styles = {
        maxWidth: '400px',
        margin: 'auto'
    }
    
    render(){
        // if(this.view === '')
        return (
            <div style={this.styles} >
                <button onClick={ ()=>{this.props.setEstado()} } > &times;</button>
                <h2 style={{textAlign: 'center'}} >Perfil personal</h2>
                <p>Aqui puedes ver tus datos personales y posteos</p>
                <input type='text' placeholder='Buscar' />
                <button>Nuevo Post</button>
            </div>
        );
    }
}

export default Cuenta;
