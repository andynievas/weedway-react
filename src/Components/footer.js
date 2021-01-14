import React from 'react';
import NavItem from './navItem.js';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer" >
        <NavItem mostrar={this.props.setEstado} texto="Foto" icon="fas fa-camera" />
        <NavItem mostrar={this.props.setEstado} texto="Buscar" icon="fas fa-search" />
        <NavItem mostrar={this.props.setEstado} texto="Lugares" icon="fas fa-map-marked-alt" />
        <NavItem mostrar={this.props.setEstado} texto="Notifications" icon="fas fa-search" />
        <NavItem mostrar={this.props.setEstado} texto="Cuenta" icon="fas fa-search" />
  
      </div>
    );
  }
}

export default Footer;