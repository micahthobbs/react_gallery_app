import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import apiKey from './config';

//Components
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import Route404 from './Components/Route404';

// CSS
import './App.css';

// Libraries
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

  // Query Flicker API
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
            <h1>Photo Gallery Search</h1>
            <SearchBar onSearch={this.performSearch} searchText={this.state.searchText}/>
            <Nav/>
            <Switch>
              <Route exact path="/" />
              <Route path="/cats" render={ () => <PhotoContainer data={this.state.catPhotos} />} />
              <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogPhotos} />}/>
              <Route path="/computers" render={ () => <PhotoContainer data={this.state.computerPhotos} />} />
              {
                (this.state.loading)
                ? <p>Loading...</p>
                : <Route path="/search/:query" render={ () => <PhotoContainer data={this.state.searchPhotos} /> } />
              }
              <Route component={Route404} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
