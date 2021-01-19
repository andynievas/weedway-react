
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

    return (
      <div
      style={{border: '1px lightgreen solid', display: 'flex', width: 'calc(100% - 4px)'}/* El -8px es por los bordes */} >
        
        <div className="animate__animated animate__backInUp" style={{width: '80%', minWidth: '100px'}} id="weedway">
          <h2 > <a href="/"> <img src="https://lh3.googleusercontent.com/proxy/tBukVJMhBxqLUNCPgRf7bR16GIcvl_AAcwf0RHPXti-LYq47i2_KDLVP6zxRhybPnDs63T3mI1F3CG-B9IT0FblksgPfyWvmVCBfmG8QlgxzKhWuvayvnQbpqmmrCZXrbRFtgta2vjtDd2PeDgRJgMsy-AxoXKp7Wq0yY2dRDHZDUHyu4JI" alt="«icon»" /> WeedWay </a> </h2>
        </div>
        <a  href='/search' className="nav-button" >
          <button className="animate__animated animate__backInUp" /*onClick={ ()=>{ props.setEstado('Buscar') } }*/ > <i className={'far fa-search navIcon'} > </i> <span style={{fontSize: '16px'}} > Buscar </span> </button>
        </a>
        <span className="animate__animated animate__backInUp nav-button" >
          <button onClick={ ()=>{ this.showMenu(); } } > <i className={'far fa-user navIcon'} > </i> <span style={{fontSize: '16px'}} > Cuenta </span> </button>
        </span>

        <MenuLateral estado={this.state.showMenu} showMenu={this.showMenu} />

      </div>
    );
  }
}

export default HeaderTitle;