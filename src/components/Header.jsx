import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css';
import img from './saad.jpeg'
import { Link } from 'react-router-dom';


function Header() {

  const [inputSearch,setInputSearch] = useState("");
  return (
    <div className='Header'>
      <div className="Header__Left">
        <MenuIcon className='Menu' />
        <Link to={`/`}>
        <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" 
        className='Header__Logo' />
        </Link>
      </div>
      <div className="Header__Center">
        <div className="Header__Search">
          <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} type="text" placeholder='Search'/>
          <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='Search' />
          </Link>
        </div>
        <div className="MicM">
          <MicIcon className='Mic' />
        </div>
      </div>
      <div className="Header__Right">
        <VideoCallIcon className='Right__Icon' />
        <NotificationsIcon className='Right__Icon' />
        <Avatar src={img} className='Right__Icon' />
      </div>

    </div>
  )
}

export default Header