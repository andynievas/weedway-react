import React from 'react';
import NavItem from './navItem.js';
import Modal from './modal.js';


class Footer extends React.Component{

  state = {
    modal: false
  }
  textoModal = '';

  changEstado = (texto) => {
    this.textoModal = texto;

    this.setState({modal: !this.state.modal});
  }

  render(){
    return(
      <div className="footer animate__animated animate__fadeInUp" id="footer" >
        <NavItem mostrar={this.changEstado} texto="Foto" icon="far fa-camera" />

        <NavItem mostrar={this.changEstado} texto="Mensajes" icon="far fa-envelope" />
        
        <NavItem mostrar={this.changEstado} texto="Notifications" icon="far fa-bell" />
        
        {/* {<NavItem mostrar={this.changEstado} texto="Lugares" icon="far fa-map-marked-alt" />} */}
  
        <Modal estado={this.state.modal} setEstado={this.changEstado} view={this.textoModal} />

      </div>
    );
  }
}

export default Footer;