import React from 'react'
import video1 from "../../assets/video1.mp4"
import video2 from "../../assets/video2.mp4"
import video3 from "../../assets/video3.mp4"

import "./GalleryImage.scss"

export default function GalleryImage() {
  return (
    <div className='gallery-part'>
    <h3>GALÉRIA</h3>
    <div className='gallery-wrapper'>
      <video src={video1} autoPlay muted loop></video>
      <video src={video2} autoPlay muted loop></video>
      <video src={video3} autoPlay muted loop></video>
    </div>
    </div>
  )
}
