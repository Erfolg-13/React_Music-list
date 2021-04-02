
import './ListMusic.css';
import React from 'react';
import { useCallback, useState } from 'react';

function ListMusic (props) {
    const [btnplay, btnstop] = useState('play');
    const changeBtnStatus = useCallback (() => {
        if (btnplay === 'play') {
            btnstop('stop')
        } else if (btnplay === 'stop') {
            btnstop('play')
    }
  }, [btnplay])

    // const changeStatus = useCallback (() => {
    //     button.onChange(props.status)
    // }, [props.status])
   
   return (
    <div className= {`list-container is-${btnplay}`}>
        <div>{props.track}</div>
        <div>{props.status}</div>
        <button onClick={changeBtnStatus}>{btnplay}</button>
    </div>
    
   )
}

export default ListMusic;