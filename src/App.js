import React, { Component } from 'react';

import apiKey from './config';

//Components
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import './App.css';

// Libs
const axios = require('axios');

class App extends Component {

  state = {
    photos: [],
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cat') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      this.setState({
        photos: response.data.data
      });
     })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
          <div className="Container">
            <SearchBar onSearch={this.performSearch}/>
            <Nav />
            <Switch>
              <Route exact path="/" />
              <Route path="/cats" />
              <Route path="/dogs" />
              <Route path="/computers" />
              <Route component={NotFound} />
            </Switch>
            <PhotoContainer data={this.state.photos}>
              {/* Photos will go here*/}
            </PhotoContainer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
