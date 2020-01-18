import React, { Component } from 'react';

import apiKey from './config';

//Components
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import Route404 from './Components/PhotoContainer'
// import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'

import './App.css';

// Libs
const axios = require('axios');

class App extends Component {

  state = {
    photos: [],
    loading: true,
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "random" ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      });
      console.log(this.state.photos);
     })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
          <div className="container">
            <SearchBar onSearch={this.performSearch}/>
            <Nav onClick={this.performSearch}/>
            <Switch>
              <Route exact path="/" />
              <Route path="/cats" />
              <Route path="/dogs" />
              <Route path="/computers" />
              <Route component={Route404}  />
            </Switch>
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer data={this.state.photos} />
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
