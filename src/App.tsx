import './App.css'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Testing iframe</h1>
      <iframe src="https://uatplaylistwidget.smartmusic.com/playlists/474-untitled_-playlist-102____-1645193416" width="400" height="480" frameBorder="0"></iframe>
    </div>
  )
}

export default App
