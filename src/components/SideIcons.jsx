import React from 'react'
import './SideIcons.css'


function SideIcons({Icon,title}) {
  return (
    <div className='SideIcons'>
      < Icon />
      <h2>{title} </h2>
    </div>
  )
}

export default SideIcons