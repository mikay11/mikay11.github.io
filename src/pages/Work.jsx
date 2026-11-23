import { useEffect, useState } from 'react'
import WorkCard from '../components/WorkCard'
import { asset } from '../lib/asset'
import { filters, galleries } from '../data/work'
import '../work.css'

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    document.body.classList.add('work-page')
    return () => document.body.classList.remove('work-page')
  }, [])

  return (
    <>
      <section className="page-hero" style={{ padding: '64px 0 90px' }}>
        <div className="container">
          <span className="eyebrow reveal">Portfolio</span>
          <h1 className="display reveal reveal-delay-1">
            Selected <span className="serif-italic">work.</span>
          </h1>
          <p className="lead reveal reveal-delay-2" style={{ marginTop: 18 }}>
            A showcase of my work, projects, and creative outputs. Scroll through to discover the different
            things I've built and designed.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="video-wrap reveal">
            <span className="video-tag">My First Ever Film Making Editing</span>
            <video controls preload="none" poster={asset('assets/images/video-poster.svg')}>
              <source src={asset('assets/videos/fb-video.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filters reveal" id="filters">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {galleries.map((gallery) => {
            const hidden = activeFilter !== 'all' && activeFilter !== gallery.id
            return (
              <div
                key={gallery.id}
                className={`work-section reveal ${hidden ? 'hidden-card' : ''}`}
                data-category={gallery.id}
              >
                <div className="work-section-head">
                  <h2 className="work-section-title">{gallery.title}</h2>
                  <span className="work-section-note">{gallery.note}</span>
                </div>
                <div className={`work-grid ${gallery.gridClass}`}>
                  {gallery.items.map((item, index) => (
                    <WorkCard key={`${gallery.id}-${index}`} item={item} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
