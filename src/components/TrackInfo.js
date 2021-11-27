import React from 'react';

const TrackInfo = ({trackinfo}) => {

    if(Object.keys(trackinfo).length === 0 ) return null;

    const { strArtistThumb, strGenre, strBiographyES } = trackinfo;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist info
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Genre: {strGenre}</p>
                <h2 className="card-text">Biography:</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${trackinfo.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${trackinfo.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${trackinfo.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default TrackInfo;