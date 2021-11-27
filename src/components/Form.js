import React, { useState } from 'react';

const Form = ({saveSearchLetter}) => {

    const [search, saveSearch] = useState({
        artist: '',
        track: ''
    });

    const [ error, saveError ] = useState(false);

    const { artist, track } = search;

    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const searchInfo = e => {
        e.preventDefault();

        if(artist.trim() === '' || track.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);

        saveSearchLetter(search);
    }

    return ( 
        <div className="bg-info">

            { error ? <p className="alert alert-danger text-center p-2">All fields are required</p> : null }

            <div className="container">
                <div className="row">
                    
                    <form 
                        onSubmit={searchInfo}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Lyrify</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist name"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Track</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="track"
                                            placeholder="Track"
                                            onChange={updateState}
                                            value={track}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Search</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;