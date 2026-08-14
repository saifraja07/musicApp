import './App.css'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <div className="app">
      <div className="app__bg" />
      <div className="app__grain" />
      <div className="app__vignette" />

      <MusicPlayer />
    </div>
  )
}

export default App
