import './ListMusic.css';
import React from 'react';
import { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';

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
    <div className= {`list-container is-${btnplay} row`}>
        <div className="col-5">{props.track}</div>
        <div className="col-2">{props.status}</div>
        <div className="col-5 list-music-btns">
            <button className={`firstBtn btnPlay${btnplay}`} onClick={changeBtnStatus}>{btnplay}</button>
            <Button 
                variant="outline-dark" onClick={handleEditItem}>
                    edit
                </Button>
            <Button variant="outline-warning" onClick={handleDeleteItem}>X</Button>
        </div>
        
       
    </div>
    
   );
}

export default ListMusic;