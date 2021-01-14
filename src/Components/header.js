import React from 'react';

import NavItem from './navItem.js';



class Header extends React.Component {

  render(){
    return (
      <div className="header" >

        <div className="navBar" >

          {/* <NavItem texto="Home" icon="fas fa-home" /> */}
          <NavItem mostrar={this.props.setEstado} texto="Mensajes" icon="fas fa-envelope" />
          <NavItem mostrar={this.props.setEstado} texto="Cuenta" icon="fas fa-user-circle" />

        </div>
      </div>
    );
  }
    
}

export default Header;