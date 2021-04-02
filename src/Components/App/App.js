import ListMusic from '../ListMusic/ListMusic';
import {useCallback, useState} from 'react';
import './App.css';
import React from 'react';

function App() {
  // const [btnplay, btnstop] = useState('play');
  // const [statusStop, statusPlay] = useState('stop');

  // const changedStatusItem = useCallback (() => {
  //   if (statusStop === 'stop') {
  //     statusPlay('play')
  //   } else if (statusStop === 'play') {
  //     statusPlay('stop')
  //   }
  // }, [statusStop])

  const [list, changedTracks] = useState ([
    {track: '1. Singer: 1, Song title: 1', status: 'stop'},
    {track: '2. Singer: 2, Song title: 2', status: 'stop'},
    {track: '3. Singer: 3, Song title: 3', status: 'stop'}
  ]);
  console.log(list);

  const changedStatusItem = useCallback((track, status) => {
    if (status === 'stop') {
      changedTracks((prevState) => {
        return prevState.map((todo) => {
          if (todo.track === track) {
             return {
               track: todo.track,
               status: 'play',
            }
          }
         return todo;
        })
      });
   
    } else if (status === 'play') {
      changedTracks((prevState) => {
        return prevState.map((todo) => {
          if (todo.track === track) {
             return {
              track: todo.track,
              status: 'stop',
            }
          }
         return todo;
        })
      });
    } ;
  }, [list]);

  return (
    <div className="App">
      <header>Music list</header>

      {list.map((trackItem) => {
        return (
        <ListMusic 
            key = {trackItem.track}
            track = {trackItem.track} 
            status = {trackItem.status}
            onChange = {changedStatusItem}
        />
        );
       
      })}

    </div>
  );
}

export default App;
