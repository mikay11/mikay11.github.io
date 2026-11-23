import { useEffect, useState } from 'react'
import { asset } from '../lib/asset'

export default function PhotoSlider({ images }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="photo-slider" id="photo-slider">
      {images.map((image, i) => (
        <img
          key={`${image.src}-${i}`}
          src={asset(image.src)}
          alt={image.alt}
          className={i === index ? 'active' : ''}
        />
      ))}
      <div className="dots">
        {images.map((image, i) => (
          <span
            key={`dot-${image.src}-${i}`}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  )
}
