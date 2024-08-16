// src/components/VideoPlayer.jsx

import { useRef } from 'react'

export function VideoPlayer({ src }) {
  const videoRef = useRef(null)

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <div>
      <video ref={videoRef} controls width="640">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={playVideo}>Play</button>
    </div>
  )
}
