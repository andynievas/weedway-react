
import React from 'react';
// import './App.css';

import HeaderTitle from './Components/headerTitle.js';
// import Header from './Components/header.js';
import Modal from './Components/modal.js';
import Posteo from './Components/postImg.js';
import Footer from './Components/footer.js';

// let array = [
//   {"nombre": "Andy", "Apellido": "Nievas", "id": 0},
//   {"nombre": "Kevin", "Apellido": "Molina", "id": 1}
// ];

// function Aver(){
//   return (
//     <div>
//       {array.map(element => <h2 key={element.id} >{'Nombre: ' + element.nombre + ', Apellido: ' + element.Apellido}</h2>)}
//     </div>
//   );
// }

class App extends React.Component {

  state = {
    modal: false
  }
  textoModal = '';

  changEstado = (texto) => {
    this.setState({modal: !this.state.modal});
    this.textoModal = texto;
  }

  usuarios = [
    {
      userName: 'AndyNievas',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image'
    },
    {
      userName: 'Juliansito',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image'
    }
  ]

  render(){
    return (
      <div className="App">
  
        <HeaderTitle setEstado={this.changEstado} />
        <Modal estado={this.state.modal} setEstado={this.changEstado} view={this.textoModal} />
        
        {this.usuarios.map( user=><Posteo posteo={user} /> ) }

        {/* {this.posts.map( post => <Posteo key={post.id} posteo={post} /> )} */}

        {/* userName={post.userName} profilePhoto={post.profilePhoto} userPost={post.userPost} */}
        
        <Footer setEstado={this.changEstado} />
      </div>
    );
  }
  
}

export default App;
