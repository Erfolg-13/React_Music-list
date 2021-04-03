import './ListMusic.css';
import React from 'react';
import { useCallback, useState } from 'react';

function ListMusic (props) {

    const [btnplay, btnstop] = useState('play');
    const [status, newStatus] = useState ('stop');

    const changeBtnStatus = useCallback (() => {
        if (btnplay === 'play') {
            return (
                btnstop('stop'),
                newStatus('play') 
            );
           
        } else if (btnplay === 'stop') {
            return (
               btnstop('play'),
                newStatus('stop') 
            );
            
        } 
        props.onChange(props.status);
    }, [btnplay, props]);

    const handleDeleteItem = useCallback (() => {
        props.onDelete(props.id);
}   , [props]);

  

   return (
    <div className= {`list-container is-${btnplay}`}>
        <div>{props.track}</div>
        <div>{status}</div>
        <button className="btnPlayStop" onClick={changeBtnStatus}>{btnplay}</button>
        <button onClick={handleDeleteItem}>X</button>
    </div>
    
   )
}

export default ListMusic;