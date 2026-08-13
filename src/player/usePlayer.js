import { useCallback, useEffect, useRef, useState } from 'react'
import playlists from '../data/playlist'

const DEFAULT_CATEGORY = 'oldHindi'

// Encapsulates all HTML5 <audio> state and controls for the playlist.
// The returned `audioRef` must be attached to an <audio> element.
function usePlayer() {
  const audioRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const currentPlaylist = playlists[activeCategory]
  const currentSong = currentPlaylist[currentIndex]

  // Load the new track whenever the current song changes (either because
  // of next/previous, or because the active category switched and the
  // index reset), and keep playing if we were already playing.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    setCurrentTime(0)
    setDuration(0)
    audio.load()

    if (isPlaying) {
      audio.play().catch(() => {
        // Playback can be rejected (e.g. placeholder URL, autoplay
        // policy) — fail silently rather than throwing in the UI.
      })
    }
    // Only re-run when the track itself changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, activeCategory])

  // Pausing/resuming here never touches currentTime — the browser keeps
  // the audio position exactly where it was, so playback continues from
  // the same point rather than restarting.
  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false))
  }, [isPlaying])

  const handlePlay = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const handlePause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const playNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % currentPlaylist.length)
    setIsPlaying(true)
  }, [currentPlaylist.length])

  const playPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + currentPlaylist.length) % currentPlaylist.length)
    setIsPlaying(true)
  }, [currentPlaylist.length])

  // Switches the active category (e.g. "ghazals" -> "oldHindi"). Next/
  // previous then operate only within the newly selected collection.
  // Playback isn't forced on or off here — whatever the play state was
  // before the switch carries over, same as changing tracks does.
  const setCategory = useCallback(
    (category) => {
      if (category === activeCategory || !playlists[category]) return
      setActiveCategory(category)
      setCurrentIndex(0)
    },
    [activeCategory],
  )

  const seek = useCallback((time) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = time
    setCurrentTime(time)
  }, [])

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime)
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) setDuration(audioRef.current.duration || 0)
  }, [])

  const handleEnded = useCallback(() => {
    playNext()
  }, [playNext])

  return {
    audioRef,
    activeCategory,
    setCategory,
    currentIndex,
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
  }
}

export default usePlayer
