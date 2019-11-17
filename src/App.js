import React, { Component } from 'react';
//import apiKey from 'config.js';

//Components
import SearchBar from './Components/SearchBar';
import MainNav from './Components/MainNav';

const axios = require('axios');

// import './App.css';

function getImages() {

}

class App extends Component {

  state = {
    photos: [],
  };


  render() {
    return (
      <div className="App"> 
        <div className="Container">
          <SearchBar />
          <MainNav />
          <div className="photo-container">
            <h2>Results</h2>
            <ul>
              {/* Photo list item */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
