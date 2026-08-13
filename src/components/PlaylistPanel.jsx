import playlist from '../data/playlist'
import './PlaylistPanel.css'

function PlaylistPanel({ currentIndex, onSelect, onClose }) {
  return (
    <div className="playlist-backdrop" onClick={onClose}>
      <div
        className="playlist-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-label="Playlist"
      >
        <div className="playlist-panel__header">
          <span className="playlist-panel__label">Playlist</span>
          <button
            type="button"
            className="playlist-panel__close"
            onClick={onClose}
            aria-label="Close playlist"
          >
            ×
          </button>
        </div>

        <ul className="playlist-panel__list">
          {playlist.map((song, index) => {
            const isActive = index === currentIndex
            return (
              <li key={song.id}>
                <button
                  type="button"
                  className={`playlist-panel__item${isActive ? ' playlist-panel__item--active' : ''}`}
                  onClick={() => onSelect(index)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="playlist-panel__title">{song.title}</span>
                  <span className="playlist-panel__artist">{song.artist}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PlaylistPanel
