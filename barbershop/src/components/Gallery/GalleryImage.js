import {React, useRef, useEffect} from 'react'
import video1 from "../../assets/video1.mp4"
import video2 from "../../assets/video2.mp4"
import video3 from "../../assets/video3.mp4"

import "./GalleryImage.scss"

export default function GalleryImage() {
  return (
    <div className='gallery-part'>
    <h3>GALÉRIA</h3>
    <div className='gallery-wrapper'>
    <div className='vid' dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video1}"
        />,
      ` }}></div>
      <div className='vid' dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video2}"
        />,
      ` }}></div>
      <div className='vid' dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video3}"
        />,
      ` }}></div>
    </div>
    </div>
  )
}
