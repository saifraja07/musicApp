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
    togglePlay,
    playNext,
    playPrevious,
    selectSong,
    seek,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleEnded,
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
        onEnded={handleEnded}
      />

      <button
        type="button"
        className="player__playlist-toggle"
        onClick={() => setIsPlaylistOpen(true)}
        aria-label="Open playlist"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h10v2H4z" />
        </svg>
      </button>

      <p className="player__title">{currentSong.title}</p>
      <p className="player__artist">{currentSong.artist}</p>

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
