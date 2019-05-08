import React from 'react';
import './album.css';

const Album = props => (
  <div className='Album'>
    <p> Album {props.album[0].albumId} </p>
    <div className='Album-top-photos'>
      { props.album.map(photo => <img key={photo.id} src={photo.url} alt={photo.url} />) }
    </div>
  </div>
);

export default Album;
