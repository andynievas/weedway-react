
import React from 'react';

import MenuLateral from './menulateral';


// weedway-icon.png
class HeaderTitle extends React.Component{

  state = {
    showMenu: false
  }
  showMenu = ()=>{
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render(){

    // var newURL = window.location.protocol + "//" + window.location.host + "/";

    return (
      <div
      // className=""
      style={{border: '1px lightgreen solid', display: 'flex', width: 'calc(100% - 4px)'}/* El -8px es por los bordes */} >
        
        <div className="animate__animated animate__fadeInDown" style={{width: '80%', minWidth: '100px'}} id="weedway">
          <h2 > <a href="/"> <img src="icons/weedway-icon.png" alt="«icon»" /> WeedWay </a> </h2>
        </div>
        <span className="animate__animated animate__fadeInDown nav-button" >
          <button className="" /*onClick={ ()=>{ props.setEstado('Buscar') } }*/ > <i className={'far fa-search navIcon'} > </i> <span style={{fontSize: '16px'}} > Buscar </span> </button>
        </span>
        <span className="animate__animated animate__fadeInDown nav-button" >
          <button onClick={ ()=>{ this.showMenu(); } } > <i className={'far fa-user navIcon'} > </i> <span style={{fontSize: '16px'}} > Cuenta </span> </button>
        </span>

        <MenuLateral estado={this.state.showMenu} showMenu={this.showMenu} />

      </div>
    );
  }
}

export default HeaderTitle;