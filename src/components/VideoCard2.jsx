import React from 'react'
import Avatar from '@mui/material/Avatar';

import './VideoCard2.css'

function VideoCard2({img,title,channel,views,timestamp,logo,href}) {
  return (
    <div className='VideoCard2'>
      <a href={href}><img src={img} alt="" /></a>
      <div className="te">
      <h2>{title}</h2>
      <p className='para'>{views} • {timestamp}</p>
      
      <div className="ch">
      <Avatar src={logo}/>
      <p>{channel} </p>
      
      </div>
      </div>
      
    </div>
  )
}
export default VideoCard2