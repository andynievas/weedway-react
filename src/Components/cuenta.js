
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
        width: '100%',
        margin: 'auto',
        backgroundColor: 'rgb(100,160,200)'
    }

    logOut = {
        display: 'block',
        width: '100%',
        margin: '15px 0',
        padding: '6px',
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '2rem'
    }

    // estilo_V2 = { width: '80px', position: 'absolute', top: '-30px', right: '0' }

    render(){
        if( this.props.mostrar ){
            return (
                <div className="animate__animated animate__fadeInUp" style={{margin: '20px 0'}} >
                    <button style={this.edit} onClick={ ()=>{this.props.setEstado(); } } >Editar datos personales</button>
                    <button style={this.logOut} id='logOut' onClick={ ()=>{localStorage.removeItem('weedway-user'); window.location.reload()} } >Cerrar sesión</button>
                </div>
            );
        }else {
            return (
                <form className="animate__animated animate__fadeInUp" style={{margin: '20px 0'}} onSubmit={this.onsubmit} id="changeUserName" autoComplete="off" >
                    <button style={this.edit} onClick={ ()=>{this.props.setEstado(); } } >Editar datos personales</button>
                    <input type="text" onChange={this.onchange} placeholder="Username" />
                    <input type="submit" value="Guardar" style={{ backgroundColor: 'rgb(20,180,20)', color: 'white', cursor: 'pointer' }} />
                    <button style={this.logOut} id='logOut' onClick={ ()=>{localStorage.removeItem('weedway-user'); window.location.reload()} } >Cerrar sesión</button>
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
        width: '100%',
        // margin: '5px auto',
        padding: '6px',
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '2rem'
    }
    
    render(){
        if(this.state.show){
            return (
                <div className="animate__animated animate__fadeInUp" /*style={{maxWidth: '300px', margin: 'auto'}}*/ >
                    <h5 style={{textAlign: 'center', margin: '0', fontSize: '40px', fontWeight: 'bold', overflow: 'hidden'}} >{localStorage.getItem('weedway-user')}</h5>
                    <p>Aqui puedes ver tus datos personales y posteos</p>
                    <p>Hola soy la opcion numero 1</p>
                    <p>Hola soy la opcion numero 2</p>
                    <p>Hola soy la opcion numero 3</p>
                    <p>Hola soy la opcion numero 4</p>
                    <p>Hola soy la opcion numero 5</p>
                    <p>Hola soy la opcion numero 6</p>
                    <p>Hola soy la opcion numero 7</p>
                    <p>Hola soy la opcion numero 8</p>
                    <p>Hola soy la opcion numero 9</p>
                    <EditarDatos mostrar={this.state.show} setEstado={this.changEstado} />
    
                    {/* <button style={this.logOut} id='logOut' onClick={ ()=>{localStorage.removeItem('weedway-user'); window.location.reload()} } >Cerrar sesión</button> */}
                </div>
            );
        } else {
            return (
                <div style={{position: 'relative'}} >
                    <EditarDatos mostrar={this.state.show} setEstado={this.changEstado} />
                    {/* <button style={this.logOut} id='logOut' onClick={ ()=>{localStorage.removeItem('weedway-user'); window.location.reload()} } >Cerrar sesión</button> */}
                </div>
            );
        }
        // return (
        //     <div style={{maxWidth: '300px', margin: 'auto'}} >
        //         <h5 style={{textAlign: 'center', margin: '0', fontSize: '40px', fontWeight: 'bold', overflow: 'hidden'}} >{localStorage.getItem('weedway-user')}</h5>
        //         <p>Aqui puedes ver tus datos personales y posteos</p>

        //         <EditarDatos mostrar={this.state.show} setEstado={this.changEstado} />

        //         <button style={this.logOut} id='logOut' onClick={ ()=>{localStorage.removeItem('weedway-user'); window.location.reload()} } >Cerrar sesión</button>
        //     </div>
        // );
    }
}

export default Cuenta;
