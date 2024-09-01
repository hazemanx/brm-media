import React, { useState, useEffect } from 'react';
import './App.css'; // You'll need to create this CSS file

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Track 1', artist: 'Artist 1', url: 'path/to/audio1.mp3' },
    { id: 2, title: 'Track 2', artist: 'Artist 2', url: 'path/to/audio2.mp3' },
    { id: 3, title: 'Track 3', artist: 'Artist 3', url: 'path/to/audio3.mp3' },
  ]);

  useEffect(() => {
    if (playlist.length > 0 && !currentTrack) {
      setCurrentTrack(playlist[0]);
    }
  }, [playlist, currentTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Add actual audio play/pause logic here
  };

  const nextTrack = () => {
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextIndex]);
  };

  const prevTrack = () => {
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrack(playlist[prevIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BRM Media Player</h1>
      </header>
      <main>
        {currentTrack && (
          <div className="player">
            <h2>{currentTrack.title}</h2>
            <p>{currentTrack.artist}</p>
            <div className="controls">
              <button onClick={prevTrack}>Previous</button>
              <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
              <button onClick={nextTrack}>Next</button>
            </div>
          </div>
        )}
        <div className="playlist">
          <h3>Playlist</h3>
          <ul>
            {playlist.map(track => (
              <li key={track.id} onClick={() => setCurrentTrack(track)}>
                {track.title} - {track.artist}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
