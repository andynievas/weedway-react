import React from 'react';
import NavItem from './navItem.js';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer" >
        <NavItem mostrar={this.props.setEstado} texto="Foto" icon="far fa-camera" />

        <NavItem mostrar={this.props.setEstado} texto="Mensajes" icon="far fa-envelope" />
        
        <NavItem mostrar={this.props.setEstado} texto="Notifications" icon="far fa-bell" />
        
        <NavItem mostrar={this.props.setEstado} texto="Lugares" icon="far fa-map-marked-alt" />
  
      </div>
    );
  }
}

export default Footer;