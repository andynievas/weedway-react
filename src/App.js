
import React from 'react';
// import './App.css';

import HeaderTitle from './Components/headerTitle.js';
import Header from './Components/header.js';
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

  users = [
    {
      id: '0',
      name: 'AndyNievas',
      profilePhoto: 'url',
      posts: '3'
    }
  ]
// https://jsonplaceholder.typicode.com/posts

// https://github.com/andynievas/WeedWay-Api/posts.json


  // posts = async () => {
  //   const posts = await fetch('http://localhost:3001/posts', {mode: 'cors'});
  //   const data = await posts.json();
  //   setTimeout( ()=>{
  //     console.log( data );
  //   } , 1000)
  // }

  posts = () => {

    fetch(`http://localhost:3001/posts`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    // .then((response) => response.json())
    .then((messages) => {console.log(messages); console.log('Andy'); });

  }

  changEstado = (texto) => {
    this.setState({modal: !this.state.modal});
    this.textoModal = texto;
  }

  render(){
    return (
      <div className="App">
  
        <HeaderTitle />
        <Header setEstado={this.changEstado} onClick={()=>{this.posts()}} />
        <Modal estado={this.state.modal} setEstado={this.changEstado} view={this.textoModal} />
        
        {/* {this.posts.map( post => <Posteo key={post.id} posteo={post} /> )} */}

        {/* userName={post.userName} profilePhoto={post.profilePhoto} userPost={post.userPost} */}
        
        <Footer setEstado={this.changEstado} />
      </div>
    );
  }
  
}

export default App;
