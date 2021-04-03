import './ListMusicItemForm.css';
import { useState, useCallback } from 'react';

function ListMusicItemForm (props) {
    const [track, setTrack] = useState('');
    
    const handleSubmitForm = useCallback ((event) => {
       event.preventDefault();
       props.onSave(track);
   }, [ track, props ])
    return (
        <div>
        <form className="form-add" onSubmit={handleSubmitForm}>
            <div className="form-addLabel">
                <label htmlFor="track">The title of composition:</label>
                <input 
                    className="form-add-input" 
                    type="text" 
                    id="track"
                    onChange={(event) => setTrack(event.target.value)} />
            </div>
            <button className="form-brn-Submit" type="submit">save</button>
            
        </form>
    </div>
    )
};

export default ListMusicItemForm;