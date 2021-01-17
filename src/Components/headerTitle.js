import React from 'react';
import NavItem from './navItem.js';


function HeaderTitle(props){
    return (
      <div style={{border: '2px lightgreen solid', display: 'flex', width: 'calc(100% - 4px)'}/* El -8px es por los bordes */} >
        
        <div style={{width: '80%'}} id="weedway">
          <h2 > <a href="/"> <img src="weedway-icon.png" alt="weedway-icon" /> WeedWay </a> </h2>
        </div>
        <a href='/search' className="nav-button" >
          <button  /*onClick={ ()=>{ props.setEstado('Buscar') } }*/ > <i className={'fas fa-search' + ' navIcon'} > </i> <span style={{fontSize: '16px'}} > Buscar </span> </button>
        </a>
        <a className="nav-button" >
          <button  onClick={ ()=>{ props.setEstado('cuenta') } } > <i className={'fas fa-user' + ' navIcon'} > </i> <span style={{fontSize: '16px'}} > Cuenta </span> </button>
        </a>
      </div>
    );
}

export default HeaderTitle;