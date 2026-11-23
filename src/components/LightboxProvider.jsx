import { useEffect, useState } from 'react'
import { LightboxContext } from '../lib/lightbox'

export default function LightboxProvider({ children }) {
  const [media, setMedia] = useState(null)

  useEffect(() => {
    if (!media) return
    function onKeyDown(event) {
      if (event.key === 'Escape') setMedia(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [media])

  const openLightbox = (nextMedia) => setMedia(nextMedia)
  const closeLightbox = () => setMedia(null)

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      {media && (
        <div
          className={`lightbox open ${media.type === 'video' ? 'show-video' : 'show-img'}`}
          onClick={(event) => {
            if (event.target === event.currentTarget || event.target.closest('.lightbox-close')) {
              closeLightbox()
            }
          }}
        >
          <button className="lightbox-close" aria-label="Close">
            &times;
          </button>
          {media.type === 'video' ? (
            <video src={media.src} controls autoPlay playsInline />
          ) : (
            <img src={media.src} alt={media.alt || ''} />
          )}
        </div>
      )}
    </LightboxContext.Provider>
  )
}
