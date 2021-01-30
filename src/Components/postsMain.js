import React from 'react';
// import Posteo from './postImg.js';

export default class PostsMain extends React.Component{

  render(){
    return(
      <div>
        <h4>
          Esto es PostsMain
        </h4>
        El primer nombre es:
        {this.props.usuarios[0].userName}
      </div>
    );
  }
}
