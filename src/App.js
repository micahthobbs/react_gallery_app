import React, { Component } from 'react';

import apiKey from './config';

//Components
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Libs
const axios = require('axios');

// import './App.css';

function getImages() {

}

class App extends Component {

  state = {
    photos: [],
  };

  componentDidMount() {
    // axios.get('')
    // .then(response => {
    //   this.setState({
    //     photos: response.data.???
    //   });
    //  })
    // .catch(error => {
    // console.log('Error fetching and parsing data', error);
    // });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
          <div className="Container">
            <SearchBar />
            <Nav />
            <Switch>
              <Route path="/cats" />
              <Route path="/dogs" />
              <Route path="/computers" />
              <Route component={NotFound} />
            </Switch>
            <PhotoContainer>
              {/* Photos will go here*/}
            </PhotoContainer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
