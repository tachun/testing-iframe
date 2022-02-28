import './App.css'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Testing iframe</h1>
      <iframe src="http://playlist-widget.smartmusic.localhost:4211/playlists/9-my-first-playlist-with-a-name-super-super-mega-long-my-first-playlist-with-a-name-super-super-mega-long-1644944094" width="400" height="480" frameBorder="0"></iframe>
    </div>
  )
}

export default App
