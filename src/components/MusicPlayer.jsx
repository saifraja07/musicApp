import { useEffect, useRef, useState } from 'react'
import usePlayer from '../player/usePlayer'
import formatTime from '../player/formatTime'
import CategoryMenu from './CategoryMenu'
import './MusicPlayer.css'

function MusicPlayer() {
  const {
    audioRef,
    activeCategory,
    setCategory,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    playNext,
    playPrevious,
    seek,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleEnded,
    handlePlay,
    handlePause,
  } = usePlayer()

  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
  const playerRef = useRef(null)


  // Close the category menu on outside click, same as a typical dropdown.
  useEffect(() => {
    if (!isCategoryMenuOpen) return

    function handleOutsideClick(event) {
      if (playerRef.current && !playerRef.current.contains(event.target)) {
        setIsCategoryMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isCategoryMenuOpen])

  // Global keyboard shortcuts:
  //   Space  - play / pause
  //   N      - next song
  //   P      - previous song
  //   Right  - seek forward 5s
  //   Left   - seek backward 5s
  // Ignored while typing in an input/textarea/contenteditable, or while
  // any modifier key is held, so browser/OS shortcuts keep working.
  useEffect(() => {
    function handleKeyDown(event) {
      const target = event.target
      const isTypingTarget =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)

      if (isTypingTarget || event.metaKey || event.ctrlKey || event.altKey) return

      switch (event.code) {
        case 'Space':
          event.preventDefault()
          togglePlay()
          break
        case 'KeyN':
          event.preventDefault()
          playNext()
          break
        case 'KeyP':
          event.preventDefault()
          playPrevious()
          break
        case 'ArrowRight':
          event.preventDefault()
          seek(Math.min((audioRef.current?.currentTime ?? currentTime) + 5, duration || 0))
          break
        case 'ArrowLeft':
          event.preventDefault()
          seek(Math.max((audioRef.current?.currentTime ?? currentTime) - 5, 0))
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [togglePlay, playNext, playPrevious, seek, audioRef, currentTime, duration])

  const handleCategorySelect = (category) => {
    setCategory(category)
    setIsCategoryMenuOpen(false)
  }

  return (
    <div className="player" ref={playerRef}>
      {isCategoryMenuOpen && (
        <CategoryMenu activeCategory={activeCategory} onSelect={handleCategorySelect} />
      )}

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
          onClick={() => setIsCategoryMenuOpen((open) => !open)}
          aria-label="Choose playlist category"
          title="Choose playlist category"
          aria-expanded={isCategoryMenuOpen}
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
    </div>
  )
}

export default MusicPlayer
