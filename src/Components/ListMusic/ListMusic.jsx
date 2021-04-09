import './ListMusic.css';
import React from 'react';
import { useCallback, useState } from 'react';

function ListMusic (props) {

    const [btnplay, btnstop] = useState('play');

    const changeBtnStatus = useCallback(() => {
        props.onChange(props.id, props.track, props.status);
        
        if (btnplay === 'play') {
            return btnstop('stop');
        } else if (btnplay === 'stop') {
            return btnstop('play');
        };
    }, [ props, btnplay]);

    const handleEditItem = useCallback (() => {
        props.onEdit(props.id);
    }, [ props ]);

    const handleDeleteItem = useCallback (() => {
        props.onDelete(props.id);
    }, [ props ]);

  

   return (
    <div className= {`list-container is-${btnplay}`}>
        <div>{props.track}</div>
        <div>{props.status}</div>
        <button className={`btnPlay${btnplay}`} onClick={changeBtnStatus}>{btnplay}</button>
        <button onClick={handleEditItem}>edit</button>
        <button onClick={handleDeleteItem}>X</button>
    </div>
    
   );
}

export default ListMusic;