import { useCallback, useEffect, useRef, useState } from 'react'
import playlist from '../data/playlist'

// Encapsulates all HTML5 <audio> state and controls for the playlist.
// The returned `audioRef` must be attached to an <audio> element.
function usePlayer() {
  const audioRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const currentSong = playlist[currentIndex]

  // Load the new track whenever the current song changes, and keep
  // playing if we were already playing (e.g. after next/previous).
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
  }, [currentIndex])

  // Pausing/resuming here never touches currentTime — the browser keeps
  // the audio position exactly where it was, so playback continues from
  // the same point rather than restarting.
  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().catch(() => {})
      setIsPlaying(true)
    }
  }, [isPlaying])

  const playNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % playlist.length)
    setIsPlaying(true)
  }, [])

  const playPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }, [])

  // Jumps directly to a chosen track (used by the playlist panel) and
  // starts playing it immediately.
  const selectSong = useCallback((index) => {
    setCurrentIndex(index)
    setIsPlaying(true)
  }, [])

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
  }
}

export default usePlayer
