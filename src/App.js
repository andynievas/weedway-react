
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
    this.setState({modal: !this.state.modal});
    this.textoModal = texto;
  }
  usuarios = [];

  printUsers = ()=>{
    let contenido = document.getElementById("seccionPublicaciones");
    this.usuarios.map( user=>contenido.innerHTML += user.userName );
  }
/*
  usuarios = [
    {
      userName: 'andynievas92',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://picsum.photos/700/700',
      id: 0
    },
    {
      userName: 'reyJulian',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://picsum.photos/600/600',
      id: 1
    },
    {
      userName: 'mamfristo',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://picsum.photos/500/500',
      id: 2
    },
    {
      userName: 'salchipapa',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://loremflickr.com/460/460',
      id: 3
    },
    {
      userName: 'ndeaaaAa',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://www.fillmurray.com/560/560',
      id: 4
    },
    {
      userName: 'otros',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://picsum.photos/200/400',
      id: 5
    }
  ]
*/
  render(){

    if( localStorage.getItem('weedway-user') ){
      return (
        <div className="App">
          <HeaderTitle estado={this.menuLateral.show} showMenu={this.showMenu} setEstado={this.changEstado} />
          <Modal estado={this.state.modal} setEstado={this.changEstado} view={this.textoModal} />
          <div style={{position: 'fixed', top: '80px', left: '0'}} >Fixed o khe</div>
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
