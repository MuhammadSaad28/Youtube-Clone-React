import React from 'react'
import './RecommendedVideo.css'
import VideoCard from './VideoCard'
import AllData from './AllData'



function RecommendedVideos() {
      return (
            <div className='Recomm'>


                  {
                        AllData.map((card, index) => {
                              return (
                                    <VideoCard
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

export default RecommendedVideos