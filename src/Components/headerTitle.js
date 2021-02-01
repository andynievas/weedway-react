
import React from 'react';

// Components
import MenuLateral from './menulateral';
// Static Files
import imgTitle from './weedway-icon.png';


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

  first = 0;

  headerTitle = { backgroundColor: 'rgb(30,30,30)',
    borderTop: '2px rgb(30,30,30) solid',
    borderBottom: '2px rgb(30,30,30) solid',
    display: 'flex',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '2'
  }

  render(){

    // var newURL = window.location.protocol + "//" + window.location.host + "/";
// ndeaaaAa
    return (
      <div >

        <div className="animate__animated animate__fadeInDown" style={this.headerTitle} >
          <div className=" weedway" style={{width: '80%', minWidth: '100px'}} id="weedway-title">
            <img className="header-icon" style={ this.iconStyle } src={ imgTitle } alt="«icon»" />
            <h2>WeedWay</h2>
          </div>

          <span className=" nav-button" >
            <button onClick={ ()=>{ this.props.setEstado('Buscar') } } > <i className={'far fa-search navIcon'} > </i> <span style={{fontSize: '16px'}} > Buscar </span> </button>
          </span>
          <span className=" nav-button" >
            <button onClick={ ()=>{ this.showMenu(); this.first = 1; } } > <i className={'far fa-user navIcon'} > </i> <span style={{fontSize: '16px'}} > Cuenta </span> </button>
          </span>
        </div>

        <MenuLateral estado={this.state.showMenu} showMenu={this.showMenu} first={this.first} />

      </div>
    );
  }
}

export default HeaderTitle;
