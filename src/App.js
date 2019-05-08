import React, { Component } from 'react'
import axios from 'axios';
import Album from './components/album';

import './App.css';

export default class App extends Component {

  state = {
    albums: undefined,
  };

  getAlbums = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response)  => {
      let data = response.data.reverse();
      let idLastAlbum = data[0].albumId;
      let albums = [[],[],[]];
      let focusAlbum = 0;
      data.map(photo => {
        let focusPhoto;
        if(focusAlbum === 3) {
          return;
        }
        if(photo.albumId === idLastAlbum) {
          focusPhoto = photo;
        } else {
          return;
        }
        if(albums[focusAlbum].length === 2) {
          idLastAlbum--;
          focusAlbum++;
        } else {
          albums[focusAlbum].push(focusPhoto);
        }
      });
      console.log(albums);
      this.setState({albums})
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }

  componentWillMount = () => {
    this.getAlbums();
  }

  render() {
    return (
      <div className="App-Albums">
        {
          this.state.albums
          ? this.state.albums.map( album => <Album key={album[0].albumId} album={album}/>)
          : null
        }
      </div>
    )
  }
}
