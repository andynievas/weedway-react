
import React from 'react';

import HeaderTitle from './Components/headerTitle.js';
import Modal from './Components/modal.js';
import Posteo from './Components/postImg.js';
import Footer from './Components/footer.js';


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
      userName: 'andynievas92',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image'
    },
    {
      userName: 'reyJulian',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image'
    },
    {
      userName: 'mamfristo',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image'
    },
    {
      userName: 'salchipapa',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image'
    },
    {
      userName: 'ndeaaaAa',
      profilePhoto: 'https://thispersondoesnotexist.com/image',
      userPost: 'https://thispersondoesnotexist.com/image'
    },
    {
      userName: 'otros',
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
