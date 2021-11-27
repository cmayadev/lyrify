import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Track from './components/Track';
import TrackInfo from './components/TrackInfo';

import axios from 'axios';

function App() {

  const [ searchLetter, saveSearchLetter ] = useState({});
  const [ lyric, saveLyric ] = useState('');
  const [ trackinfo, saveTrackinfo] = useState({});
  const [ error, saveError ] = useState(false);

  useEffect(() => {
    if(Object.keys(searchLetter).length === 0) return;

    const queryLyricsApi = async () => {

      const { artist, track } = searchLetter;

      const url = `https://api.lyrics.ovh/v1/${artist}/${track}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;

      const [lyric, trackinfo] = await Promise.all([
        axios(url), 
        axios(url2)
      ]);
      saveError(false);

      if(lyric.data.error) {
        saveLyric(lyric.data.error);
      } else {
        saveLyric(lyric.data.lyrics);
      }
      if(trackinfo.data.artists) {
        saveTrackinfo(trackinfo.data.artists[0]);
      }
      
      saveSearchLetter({});

    }
    queryLyricsApi();

  }, [searchLetter, trackinfo]);

  return (
    <Fragment>
      <Form 
        saveSearchLetter={saveSearchLetter}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <TrackInfo 
              trackinfo={trackinfo}
            />
              {Object.keys(trackinfo).length === 0 ? (
              <p className="alert alert-primary text-center">
                  Artist not found.
              </p>
              ) : null}
          </div>
          <div className="col-md-6">
              <Track 
                lyric={lyric}
              />
              {lyric.length === 0 && Object.keys(trackinfo).length !== 0 ? (
              <p className="alert alert-primary text-center">
                  Lyrics not found.
              </p>
              ) : null}
          </div>
        </div>
      </div>

    </Fragment>   
  );
}

export default App;
