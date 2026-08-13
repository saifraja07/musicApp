import { useEffect, useState } from 'react'
import usePlayer from '../player/usePlayer'
import formatTime from '../player/formatTime'
import PlaylistPanel from './PlaylistPanel'
import './MusicPlayer.css'

function MusicPlayer({ onPlayingChange }) {
  const {
    audioRef,
    currentIndex,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    changeVolume,
    playNext,
    playPrevious,
    selectSong,
    seek,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleEnded,
    handlePlay,
    handlePause,
  } = usePlayer()

  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)

  // Let the parent (vinyl disk animation) know when playback state changes.
  useEffect(() => {
    if (onPlayingChange) onPlayingChange(isPlaying)
  }, [isPlaying, onPlayingChange])

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      />

      <div className="player__song-header">
        <div className="player__song-meta">
          <p className="player__title">{currentSong.title}</p>
          <p className="player__artist">{currentSong.artist}</p>
        </div>

        <button
          type="button"
          className="player__playlist-toggle"
          onClick={() => setIsPlaylistOpen(true)}
          aria-label="Open playlist"
          title="Open playlist"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h10v2H4z" />
          </svg>
        </button>
      </div>

      <input
        type="range"
        className="player__progress"
        min="0"
        max={duration || 0}
        step="0.01"
        value={Math.min(currentTime, duration || 0)}
        onChange={(event) => seek(Number(event.target.value))}
        aria-label="Seek"
      />

      <p className="player__time">
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>

      <div className="player__volume" aria-label="Volume control">
        <button
          type="button"
          className="player__volume-button"
          onClick={() => changeVolume(volume > 0 ? 0 : 1)}
          aria-label={volume > 0 ? 'Mute' : 'Unmute'}
          title={volume > 0 ? 'Mute' : 'Unmute'}
        >
          {volume === 0 ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4z" />
              <path d="m17 9-5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="m12 9 5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : volume < 0.5 ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4z" />
              <path d="M16 10a3 3 0 0 1 0 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4z" />
              <path d="M16 9a5 5 0 0 1 0 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M18.5 6.5a8.5 8.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <input
          type="range"
          className="player__volume-range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => changeVolume(event.target.value)}
          aria-label="Volume"
        />
      </div>

      <div className="player__controls">
        <button
          type="button"
          className="player__button"
          onClick={playPrevious}
          aria-label="Previous song"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 5h2v14H6z" />
            <path d="M18 5 8 12l10 7z" />
          </svg>
        </button>

        <button
          type="button"
          className="player__button player__button--play"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 5h4v14H7z" />
              <path d="M13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 5v14l12-7z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="player__button"
          onClick={playNext}
          aria-label="Next song"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 5h2v14h-2z" />
            <path d="M6 5l10 7-10 7z" />
          </svg>
        </button>
      </div>

      {isPlaylistOpen && (
        <PlaylistPanel
          currentIndex={currentIndex}
          onSelect={(index) => {
            selectSong(index)
            setIsPlaylistOpen(false)
          }}
          onClose={() => setIsPlaylistOpen(false)}
        />
      )}
    </div>
  )
}

export default MusicPlayer
