
import React from 'react';

import HeaderTitle from './Components/headerTitle.js';
import Login from './Components/login';
import PostsTotal from './Components/postsTotal.js';
import Footer from './Components/footer.js';


class App extends React.Component {

  render(){

    if( localStorage.getItem('weedway-user') ){
      return (
        <div className="App">
          <HeaderTitle />

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
