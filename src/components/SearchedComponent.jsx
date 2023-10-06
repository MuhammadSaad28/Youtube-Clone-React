import React from 'react'
import VideoCard2 from './VideoCard2'
import AllData2 from './AllData2'
import './SearchedComponent.css'


function SearchedComponent() {
  return (
    <div className='SearchedComponent'>
       
       {
                        AllData2.map((card, index) => {
                              return (
                                    <VideoCard2
                                          key={index}
                                          img={card.img}
                                          title={card.title}
                                          channel={card.channel}
                                          views={card.views}
                                          timestamp={card.timestamp}
                                          logo={card.logo}
                                          href={card.href}
                                    />
                              )
                        })
                  }

    </div>
  )
}

export default SearchedComponent