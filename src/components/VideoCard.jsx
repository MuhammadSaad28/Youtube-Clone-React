import React from 'react'
import Avatar from '@mui/material/Avatar';
import './VideoCard.css'

function VideoCard({img,title,channel,views,timestamp,logo,href}) {
  return (
    <div className='VideoCard'>
      <a href={href}><img src={img} alt="" /></a>
      
      <div className="set">
      <Avatar src={logo}/>
      <div className="set1">
      <h2>{title}</h2>
      <p>{channel} </p>
      <p>{views} • {timestamp}</p>
      </div>
      </div>
    </div>
  )
}

export default VideoCard