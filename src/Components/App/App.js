import ListMusic from '../ListMusic/ListMusic';
import ListMusicItemForm from '../ListMusicItemForm/ListMusicItemForm';
import {useState, useCallback} from 'react';
import './App.css';
import React from 'react';

function App() {
  
  const [list, changedTracks] = useState ([
    {id: '001', track: 'Dj ACTOR Mixtape 001', status: 'stop'},
    {id: '002', track: 'White Door - Beautiful Girl (I Wish)', status: 'stop'},
    {id: '003', track: 'White Door "Resurrection"', status: 'stop'},
    {id: '004', track: 'Agent Side Grinder "Stripdown"', status: 'stop'}
  ]);

  const [formIsVisible, changeFormVisibility] = useState(false);

  const createListMusicItem = useCallback(() => {
    changeFormVisibility(true);
  }, []);

  const generateID = useCallback(() => {
    return (
      Math.random().toString(36).substr(2,9)
    );
  }, [])

  const addNewItemList = useCallback((track) => {
    changedTracks((prevState) => {
      const newState = prevState.concat([{ id: generateID(), track}]);
      return newState;
    });
    changeFormVisibility(false);
  }, []);

  const deleteItemByID = useCallback((id) => {
    changedTracks((prevState) => {
      const newState = prevState.filter((trackItem) => {
        return (trackItem.id !== id);   
      });
      return newState;
    });
  }, []);
 
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
            onDelete={deleteItemByID}
        />
        );
       
      })}
      <div>
        <button className="addItemBtn" onClick={createListMusicItem}>
          Add item
        </button>
         {formIsVisible ? <ListMusicItemForm onSave={addNewItemList} /> : null}
      </div>
    </div>
  );
}

export default App;
