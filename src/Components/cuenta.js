
import React from 'react';


class EditarDatos extends React.Component{

    state = {
        name: ''
    }
    onchange = e => {this.setState( { name: e.target.value } );}
    onsubmit = e => {
        e.preventDefault();
        if( this.state.name !== '' ){
          localStorage.setItem('weedway-user', this.state.name);
        }
        //e.target[0].value = ''; // e.target[0] es el input correspondiente al post
        console.log(this.state);
        window.location.reload();
      }

    edit = {
        display: 'block',
        width: '80%',
        margin: 'auto',
        backgroundColor: 'lightgreen'
    }

    render(){
        if( this.props.mostrar ){
            return (
                <button style={this.edit} onClick={ ()=>{this.props.setEstado(); } } >Editar datos personales</button>
            );
        }else {
            return (
                <form className="animate__animated animate__fadeInUp" onSubmit={this.onsubmit} id="changeUserName" autoComplete="off" >
                    <input type="text" onChange={this.onchange} placeholder="Username" />
                    <input type="submit" value="Guardar" />
                </form>
            );
        }
    }
}

class Cuenta extends React.Component{

    state = {
        show: true
    }
    changEstado = () => {
        this.setState({show: !this.state.show});
    }

    input = {
        display: 'block',
        width: '80%',
        margin: 'auto'
    }

    logOut = {
        display: 'block',
        width: '70%',
        margin: '5px auto',
        padding: '6px',
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '2rem'
    }
    
    render(){
        return (
            <div style={{maxWidth: '300px', margin: 'auto'}} >
                <h5 style={{textAlign: 'center', margin: '0', fontSize: '40px', fontWeight: 'bold', overflow: 'hidden'}} >{localStorage.getItem('weedway-user')}</h5>
                <p>Aqui puedes ver tus datos personales y posteos</p>

                <EditarDatos mostrar={this.state.show} setEstado={this.changEstado} />

                <button style={this.logOut} id='logOut' onClick={ ()=>{localStorage.removeItem('weedway-user'); window.location.reload()} } >Cerrar sesión</button>
            </div>
        );
    }
}

export default Cuenta;
