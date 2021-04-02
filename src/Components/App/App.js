import ListMusic from '../ListMusic/ListMusic';
import {useState} from 'react';
import './App.css';
import React from 'react';

function App() {
  
  const [list, changedTracks] = useState ([
    {track: 'Dj ACTOR Mixtape 001', status: 'stop'},
    {track: 'White Door - Beautiful Girl (I Wish)', status: 'stop'},
    {track: 'White Door "Resurrection"', status: 'stop'},
    {track: 'Agent Side Grinder "Stripdown"', status: 'stop'}
  ]);
 
  return (
    <div className="App">
      <h1>Music list</h1>

      {list.map((trackItem) => {
        return (
        <ListMusic 
            key={trackItem.track}
            track={trackItem.track} 
            status={trackItem.status}
            onChange={changedTracks}
        />
        );
       
      })}

    </div>
  );
}

export default App;
