import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import './Sidebar.css'
import SideIcons from './SideIcons';

function Sidebar() {
  return (
    <div className='Sidebar'>
       <SideIcons Icon={HomeIcon} title="Home"/>
       <SideIcons Icon={YouTubeIcon} title="Shorts"/>
       <SideIcons Icon={SubscriptionsIcon} title="Subscriptions"/>
       <SideIcons Icon={VideoLibraryOutlinedIcon} title="Library"/>
    </div>
  )
}

export default Sidebar