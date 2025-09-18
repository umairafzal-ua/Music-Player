import React from 'react'
import Navbar from './Navbar'
import Albumitems from './Albumitems'
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
const DisplayHome = () => {
  const {songsData,albumsData}=useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((items, index) => (<Albumitems key={index} name={items.name} desc={items.desc} id={items._id} image={items.image} />))}
        </div>

        <h1 className='my-5 font-bold text-2xl'>Today Biggest Hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((items, index) => (<SongItem key={index} name={items.name} desc={items.desc} id={items._id} image={items.image} />))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
