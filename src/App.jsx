import { useState } from 'react'
import './App.css'
import VinylDisk from './components/VinylDisk'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="app">
      <div className="app__bg" />
      <div className="app__grain" />
      <div className="app__vignette" />

      <VinylDisk isSpinning={isPlaying} />

      <h1 className="app__title">पुरानी धुनें</h1>

      <MusicPlayer onPlayingChange={setIsPlaying} />
    </div>
  )
}

export default App
