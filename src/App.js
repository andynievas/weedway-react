
import React from 'react';

import HeaderTitle from './Components/headerTitle.js';
import Login from './Components/login';
import Modal from './Components/modal.js';
import PostsTotal from './Components/postsTotal.js';
import Footer from './Components/footer.js';


class App extends React.Component {

  menuLateral = {
    show: true
  }
  showMenu = () => {
    this.menuLateral = {
      show: !this.menuLateral.show
    }
  }

  state = {
    modal: false
  }
  textoModal = '';

  changEstado = (texto) => {
    this.textoModal = texto;
    // if( this.state.modal ){
    //   let body = document.getElementById("body");
    //   console.log(body)
    //   body.classList.add("hidden");
    // }else{
    //   let body = document.getElementById("body");
    //   body.classList.add("hidden");
    // }

    this.setState({modal: !this.state.modal});
  }
  usuarios = [];

  render(){

    if( localStorage.getItem('weedway-user') ){
      return (
        <div className="App">
          <HeaderTitle estado={this.menuLateral.show} showMenu={this.showMenu} setEstado={this.changEstado} />
          <Modal estado={this.state.modal} setEstado={this.changEstado} view={this.textoModal} />
          <PostsTotal setEstado={this.changEstado} />

          <Footer setEstado={this.changEstado} />
        </div>
      );
    } else {
      return <Login />;
    }

  }

}

export default App;
