import './VinylDisk.css'

// Rotation is driven by the `isSpinning` prop, which reflects the music
// player's play/pause state. This component is never unmounted while
// playback toggles, so the same <svg> persists and CSS animation-play-state
// simply freezes/resumes it at its current angle rather than restarting it.
function VinylDisk({ isSpinning }) {
  return (
    <div className="vinyl" aria-hidden="true">
      <svg
        className={`vinyl__disk ${isSpinning ? 'vinyl__disk--spinning' : ''}`}
        viewBox="0 0 200 200"
        role="img"
      >
        <circle cx="100" cy="100" r="98" fill="#0f0b0a" />
        <circle cx="100" cy="100" r="98" fill="none" stroke="#2a201c" strokeWidth="1" />

        <circle cx="100" cy="100" r="88" fill="none" stroke="#221a17" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="76" fill="none" stroke="#241b18" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="64" fill="none" stroke="#221a17" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="#241b18" strokeWidth="1.2" />

        <circle cx="100" cy="100" r="98" fill="none" stroke="#3a2b24" strokeWidth="0.6" opacity="0.5" />
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#d1a04a"
          strokeWidth="0.4"
          opacity="0.12"
        />

        <circle cx="100" cy="100" r="44" fill="#d1a04a" />
        <circle cx="100" cy="100" r="44" fill="none" stroke="#a8492a" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="38" fill="none" stroke="#3a1310" strokeWidth="0.6" opacity="0.4" />

        <circle cx="100" cy="100" r="5.5" fill="#140807" />

        {/* Static specular highlight, suggesting glossy vinyl catching light */}
        <path
          d="M 42 34 A 92 92 0 0 1 96 10"
          fill="none"
          stroke="#f3e4c4"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.08"
        />
      </svg>
    </div>
  )
}

export default VinylDisk
