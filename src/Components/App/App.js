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
  const [formForEdit, setFormForEdit] = useState(null);

  function handleChangeStatus (someStatus) {
    if (someStatus === 'stop') {
      return 'play';
    } else if (someStatus === 'play') {
      return 'stop';
    } 
  };

  const changeStatus = useCallback((id, track, status) => {
    changedTracks((prevState) =>  {
      const newState = prevState.map((itemTrack) => {
        if (itemTrack.id === id) {
          return {
            id: id,
            track: track,
            status: handleChangeStatus(status),
          }
        }
        return itemTrack;
      });
      return newState
    });
  }, []);


  const createListMusicItem = useCallback(() => {
    changeFormVisibility(true);
  }, []);

  const generateID = useCallback(() => {
    return (
      Math.random().toString(36).substr(2,9)
    );
  }, []);

  const addNewItemList = useCallback((id, track) => {
    changedTracks((prevState) => {

      const newState = prevState.concat([{id: generateID(), track, status: 'stop'}]);
      return newState;
    });
    changeFormVisibility(false);
  }, []);

  const updateItem = useCallback((updateItemID, updateItemTrack) => {
    changedTracks((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === updateItemID) {
          return {
            id: item.id,
            track: updateItemTrack,
            status: item.status,
          }
        } else {
          return item;
        }
      });
      return newState;
    });
    setFormForEdit(false);
  }, []);

  const editToItem = useCallback((id) => {
    const showItemForEdit = list.find((item) => {
      return (item.id === id);
    });
    setFormForEdit(showItemForEdit);
  }, [list]);


  const deleteItemByID = useCallback((id) => {
    changedTracks((prevState) => {
      const onDelete = prevState.filter((trackitem) => {
        return (trackitem.id !== id);
      }); 
      return onDelete;
    });
  }, []);
 
  return (
    <div className="App">
      <h1>Music list</h1>

      {list.map((trackItem) => {
        return (
        <ListMusic 
            key={trackItem.track}
            id={trackItem.id}
            track={trackItem.track} 
            status={trackItem.status}
            onChange={changeStatus}
            onEdit={editToItem}
            onDelete={deleteItemByID}
        />
        );
       
      })}
      <div>
        <button className="addItemBtn" onClick={createListMusicItem}>
          Add item
        </button>
         {formIsVisible ? (<ListMusicItemForm onSave={addNewItemList} />) : null}
         {formForEdit ? (
          <ListMusicItemForm 
            id={formForEdit.id}
            track={formForEdit.track}
            status={formForEdit.status}
            onSave={updateItem} />) : null}
      </div>
    </div>
  );
}

export default App;
