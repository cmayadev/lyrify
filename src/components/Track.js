import React, { Fragment } from 'react';

const Track = ({lyric}) => {

    if(lyric.length === 0) return null;

    return ( 
        <Fragment>
            <h2>Lyrics</h2>
            <p className="track">{lyric}</p>
        </Fragment>
    );
}

export default Track;