import { useContext } from 'react'
import Sidebar from './component/Sidebar'
import Player from './component/Player'
import Display from './component/Display'
import { PlayerContext } from './context/PlayerContext'

function App() {
  const { audioRef, track, songsData } = useContext(PlayerContext)

  return (
    
      <div className='bg-black h-screen'>
        {
          songsData.length !== 0 
            ? <>
              <div className='h-[90%] flex '>
                <Sidebar />
                <Display />
              </div>
              <Player />
            </>
            : null
        }
        <audio ref={audioRef} preload='auto' src={track?track.file:""}></audio>
      </div>
  
  )
}

export default App  
