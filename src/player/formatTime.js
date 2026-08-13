// Formats a duration in seconds as "m:ss". Returns "0:00" for
// anything that isn't a finite, non-negative number (e.g. NaN
// duration before metadata has loaded).
function formatTime(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    return '0:00'
  }

  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.floor(totalSeconds % 60)

  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export default formatTime
