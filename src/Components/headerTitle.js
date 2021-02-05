
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
  componentDidUpdate = ()=>{ /* Quita el scroll para el body cuando se muestra el menuLateral */
    if(this.state.showMenu){
      document.getElementById('body').style = 'overflow: hidden;';
    }else{
      document.getElementById('body').style = 'overflow: auto;';
    }
  }

  toggleShowMenu = ()=>{ /* Muestra u oculta el menuLateral */
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  headerTitle = {
    backgroundColor: 'rgb(30,30,30)',
    borderTop: '2px rgb(30,30,30) solid',
    borderBottom: '2px rgb(30,30,30) solid',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '4'
  }

  render(){

      return (
          <div className="animate__animated animate__fadeInDown" style={this.headerTitle} >
            <div style={{width: '60%', minWidth: '100px'}} id="weedway-title">
              <img className="header-icon" style={ this.iconStyle } src={ imgTitle } alt="«icon»" />
              <h2>WeedWay</h2>
            </div>

            <span className=" nav-button" >
              <button onClick={ ()=>{ this.props.setEstado('Buscar') } } > <i className={'far fa-search navIcon'} > </i> <span style={{fontSize: '16px'}} > Buscar </span> </button>
            </span>
            <span className=" nav-button" >
              <button onClick={ ()=>{ this.toggleShowMenu(); this.first = 1; } } > <i className={'far fa-user navIcon'} > </i> <span style={{fontSize: '16px'}} > Cuenta </span> </button>
            </span>

            { this.state.showMenu ? (<MenuLateral estado={this.state.showMenu} showMenu={this.toggleShowMenu} />) : null }

          </div>
      );
  }
}

export default HeaderTitle;
