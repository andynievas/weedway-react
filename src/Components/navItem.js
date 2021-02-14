import React from 'react';


class NavItem extends React.Component {

  render(){
    const {props} = this;
    return (
      <button className="navItem" onClick={ ()=>{ this.props.mostrar(props.texto) } } > <i className={props.icon + ' navIcon'} > </i> <span> {props.texto} </span> </button>
    );
  }

}

export default NavItem;