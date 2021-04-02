
import './ListMusic.css';

import { useCallback } from 'react';

function ListMusic (props) {

    const changeStatus = useCallback (() => {
        props.onChange(props.status)
    }, [props.status])
   
   return (
    <div className= {`list-container is-${props.track}`}>
        <div>{props.track}</div>
        <div>{props.status}</div>
        <button onClick={changeStatus}>Change status</button>
    </div>
    
   )
}

export default ListMusic;