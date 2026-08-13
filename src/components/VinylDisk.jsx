import './VinylDisk.css'

function VinylDisk({ isSpinning }) {
  return (
    <div className={`vinyl${isSpinning ? ' vinyl--playing' : ''}`} aria-hidden="true">
      <div className="vinyl__record">
        <div className="vinyl__groove vinyl__groove--1" />
        <div className="vinyl__groove vinyl__groove--2" />
        <div className="vinyl__groove vinyl__groove--3" />
        <div className="vinyl__groove vinyl__groove--4" />

        <div className="vinyl__shine" />

        <div className="vinyl__label">
          <span className="vinyl__label-text">PURANI</span>
          <span className="vinyl__label-center">धुनें</span>
          <span className="vinyl__label-text">GAANE</span>
          <span className="vinyl__label-hole" />
        </div>
      </div>
    </div>
  )
}

export default VinylDisk
