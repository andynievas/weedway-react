import React from 'react';


class NavItem extends React.Component {

  // styling () {

  //   if(this.state.show){
  //     return {
  //       background: 'green',
  //       color: 'blue',
  //       border: '2px yellow solid',
  //       padding: '0px',
  //       lineHeight: '18px',
  //       fontSize: '16px'
  //     };
  //   }
  //   else{
  //     return {
  //       background: 'red',
  //       color: 'grey',
  //       border: '2px white solid'
  //     };
  //   }
  // }

  render(){
    const {props} = this;
    return (
      <button className="navItem" onClick={ ()=>{ this.props.mostrar(props.texto) } } > <i className={props.icon + ' navIcon'} > </i> <span> {props.texto} </span> </button>
    );
  }

}

export default NavItem;