import React from 'react'
import './App.css'
import Header from './components/Header'
import Head from './components/Head'
import Sidebar from './components/Sidebar'
import RecommendedVideo from './components/RecommendedVideos'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchedComponent from './components/SearchedComponent'
import Head2 from './components/Head2'





function App() {
  return (
    <div>

      <Router>
      <Header/>
      

        <Routes>

         <Route path='/search/:search' element={
          <div className='Main'>
          <Sidebar/>
          <div className='Right'>
          <Head2/>
          <SearchedComponent/>
          </div>
          </div>
         }/>
          <Route path='/search/' element={
          <div className='Main'>
          <Sidebar/>
          <div className='Right'>
          <Head/>
          <RecommendedVideo/>
          </div>
          </div>
         }/>
            
         
         <Route path='/' element={
          <div className='Main'>
          <Sidebar/>
          <div className='Right'>
          <Head/>
          <RecommendedVideo/>
          </div>
          </div>
         }/>
                 
         

        </Routes>
      </Router>
     
     

     {/* <div className='Main'>
     <Sidebar/>
     <div className='Right'>
     <Head/>
     <RecommendedVideo/>
     </div>
     </div> */}

      
    </div>
  )
}

export default App