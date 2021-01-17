import React from 'react';


// weedway-icon.png
function HeaderTitle(props){
    return (
      <div style={{border: '2px lightgreen solid', display: 'flex', width: 'calc(100% - 4px)'}/* El -8px es por los bordes */} >
        
        <div style={{width: '80%'}} id="weedway">
          <h2 > <a href="/"> <img src="https://lh3.googleusercontent.com/proxy/tBukVJMhBxqLUNCPgRf7bR16GIcvl_AAcwf0RHPXti-LYq47i2_KDLVP6zxRhybPnDs63T3mI1F3CG-B9IT0FblksgPfyWvmVCBfmG8QlgxzKhWuvayvnQbpqmmrCZXrbRFtgta2vjtDd2PeDgRJgMsy-AxoXKp7Wq0yY2dRDHZDUHyu4JI" alt="«icon»" /> WeedWay </a> </h2>
        </div>
        <a href='/search' className="nav-button" >
          <button  /*onClick={ ()=>{ props.setEstado('Buscar') } }*/ > <i className={'far fa-search navIcon'} > </i> <span style={{fontSize: '16px'}} > Buscar </span> </button>
        </a>
        <span className="nav-button" >
          <button  onClick={ ()=>{ props.setEstado('Cuenta') } } > <i className={'far fa-user navIcon'} > </i> <span style={{fontSize: '16px'}} > Cuenta </span> </button>
        </span>
      </div>
    );
}

export default HeaderTitle;