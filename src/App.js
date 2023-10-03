import React from 'react'
import './App.css'
import Header from './components/Header'
import Head from './components/Head'
import Sidebar from './components/Sidebar'
import RecommendedVideo from './components/RecommendedVideos'



function App() {
  return (
    <div>
     
     <Header/>

     <div className='Main'>
     <Sidebar/>
     <div className='Right'>
     <Head/>
     <RecommendedVideo/>
     </div>
     </div>

      
    </div>
  )
}

export default App