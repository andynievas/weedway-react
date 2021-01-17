import React from 'react';
import NavItem from './navItem.js';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer" >
        <NavItem mostrar={this.props.setEstado} texto="Foto" icon="fas fa-camera" />

        <NavItem mostrar={this.props.setEstado} texto="Mensajes" icon="fas fa-envelope" />
        
        <NavItem mostrar={this.props.setEstado} texto="Notifications" icon="fas fa-search" />
        
        <NavItem mostrar={this.props.setEstado} texto="Lugares" icon="fas fa-map-marked-alt" />
  
      </div>
    );
  }
}

export default Footer;