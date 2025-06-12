import { MdGridOn } from 'react-icons/md'
import { BiMoviePlay } from 'react-icons/bi'
// import { LuUserSquare2 } from 'react-icons/lu'
import { useState } from 'react'

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('posts')

  const iconClass = (tab) =>
    `flex flex-col items-center pb-2 cursor-pointer ${
      activeTab === tab ? 'text-black' : 'text-gray-400'
    }`

  return (
    <div className="flex justify-around border-b border-gray-300 p-2 mt-4 mb-0.1 relative bg-white">
      <div className={iconClass('posts')} onClick={() => setActiveTab('posts')}>
        <MdGridOn className="w-7 h-7" />
        {activeTab === 'posts' && (
          <div className="w-full h-0.5 bg-black rounded-full mt-1" />
        )}
      </div>

      <div className={iconClass('reels')} onClick={() => setActiveTab('reels')}>
        <BiMoviePlay className="w-7 h-7" />
        {activeTab === 'reels' && (
          <div className="w-full h-0.5 bg-black rounded-full mt-1" />
        )}
      </div>

      <div className={iconClass('tagged')} onClick={() => setActiveTab('tagged')}>
        <BiMoviePlay className="w-7 h-7" />
        {activeTab === 'tagged' && (
          <div className="w-full h-0.5 bg-black rounded-full mt-1" />
        )}
      </div>
    </div>
  )
}
