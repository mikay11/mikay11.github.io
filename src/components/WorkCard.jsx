import { Link } from 'react-router-dom'
import { useLightbox } from '../lib/lightbox'
import { asset } from '../lib/asset'

export default function WorkCard({ item, href, delay = '' }) {
  const { openLightbox } = useLightbox()
  const isVideo = item.type === 'video'
  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { to: href } : {}

  function openMedia(event) {
    event.preventDefault()
    openLightbox({
      type: isVideo ? 'video' : 'image',
      src: asset(item.src),
      alt: item.alt,
    })
  }

  return (
    <Wrapper {...wrapperProps} className={`work-item reveal ${delay}`} data-category={item.category}>
      <div className="work-thumb" onClick={openMedia}>
        {isVideo ? (
          <video
            controls
            preload="metadata"
            playsInline
            src={asset(item.src)}
            aria-label={item.alt}
          ></video>
        ) : (
          <img src={asset(item.src)} alt={item.alt} />
        )}
      </div>
      <div className="work-info">
        <div>
          <h3>{item.title}</h3>
          <div className="work-tags">
            {item.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="year">{item.year}</span>
      </div>
      {item.desc && <p className="work-desc">{item.desc}</p>}
    </Wrapper>
  )
}
