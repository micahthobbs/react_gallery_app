import React, { Component } from 'react';

import apiKey from './config';

//Components
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import Route404 from './Components/PhotoContainer'
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'

import './App.css';

// Libs
const axios = require('axios');

class App extends Component {

  state = {
    searchPhotos: [],
    catPhotos: [],
    dogPhotos: [],
    computerPhotos: [],
    loading: true,
  };

  componentDidMount() {
    this.performSearch('random', 'searchPhotos');
    this.performSearch('cats', 'catPhotos');
    this.performSearch('dogs', 'dogPhotos');
    this.performSearch('computers', 'computerPhotos');
  }

  performSearch = (query = "random", photoState = "searchPhotos" ) => {
    this.setState({
        loading:true
    });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        [photoState]: response.data.photos.photo,
        loading: false
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
          <div className="container">
            <h1>React Gallery App</h1>
            <SearchBar onSearch={this.performSearch}/>
            <Nav/>
            <Switch>
              <Route exact path="/" />
              <Route path="/cats" render={ () => <PhotoContainer data={this.state.catPhotos} />} />
              <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogPhotos} />}/>
              <Route path="/computers" render={ () => <PhotoContainer data={this.state.computerPhotos} />} />
              {
                (this.state.loading)
                ? <p>Loading...</p>
                : <Route path="/:query" render={ () => <PhotoContainer data={this.state.searchPhotos} /> } />
              }
              <Route component={Route404} data={this.state.searchPhotos}  />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
