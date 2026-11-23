import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import WorkCard from '../components/WorkCard'
import { asset } from '../lib/asset'
import { heroTags, homeServices, homeFeatured } from '../data/home'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-visual reveal">
            <div className="dots-accent"></div>
            <div className="hero-photo">
              <img src={asset('assets/images/portrait-hero.jpg')} alt="Portrait of Mikay" />
            </div>
            <div className="glitch-deco"></div>
            <div className="sticker">
              Open to
              <br />
              Freelance
              <br />
              Work
            </div>
          </div>

          <div className="hero-copy">
            <span className="eyebrow reveal"> Institute of Student Council - Board Member Treasurer </span>
            <h1 className="display hero-title reveal reveal-delay-1">
              Hi, I'm Mikay, a passionate student leader{' '}
              <span className="serif-italic">serving with purpose.</span>
            </h1>
            <p className="lead reveal reveal-delay-2">
              I serve with purpose, lead with integrity, and work with dedication to create meaningful
              opportunities and positive experiences for every student in our college community.
            </p>

            <div className="play-row reveal reveal-delay-2">
              <Link className="circle-btn" to="/work" aria-label="View my work">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Link>
              <span className="play-label">
                View my work<small>Selected projects &darr;</small>
              </span>
            </div>

            <div className="hero-meta reveal reveal-delay-3">
              {heroTags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Be</span>
          <span><em>&bull;</em></span>
          <span>the</span>
          <span><em>&bull;</em></span>
          <span>reason</span>
          <span><em>&bull;</em></span>
          <span>someone</span>
          <span><em>&bull;</em></span>
          <span>believes</span>
          <span><em>&bull;</em></span>
          <span>in</span>
          <span><em>&bull;</em></span>
          <span>kindness,</span>
          <span><em>&bull;</em></span>
          <span>hope</span>
          <span><em>&bull;</em></span>
          <span>and</span>
          <span><em>&bull;</em></span>
          <span>service.</span>
          <span><em>&bull;</em></span>
        </div>
      </div>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What I Do</span>
            <h2 className="display">
              Inspire others not by what you say, but by{' '}
              <span className="serif-italic">how you live.</span>
            </h2>
          </div>

          <div className="cards-row">
            {homeServices.map((service) => (
              <ServiceCard key={service.num} {...service} to="/work" />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Featured Work</span>
            <h2 className="display">
              A few things I've <span className="serif-italic">built.</span>
            </h2>
          </div>

          <div className="work-grid">
            {homeFeatured.map((work) => (
              <WorkCard
                key={work.title}
                item={{ ...work, type: 'image' }}
                href="/work"
                delay={work.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
