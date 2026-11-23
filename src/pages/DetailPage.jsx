import { Link, Navigate, useParams } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import WorkCard from '../components/WorkCard'
import { servicePages, projectPages } from '../data/pages'

export default function DetailPage({ group }) {
  const { slug } = useParams()
  const pages = group === 'services' ? servicePages : projectPages
  const page = pages[slug]

  if (!page) return <Navigate to="/" replace />

  return (
    <>
      <section className="page-hero" style={{ padding: '64px 0 90px' }}>
        <div className="container">
          <span className="eyebrow reveal">{page.eyebrow}</span>
          <h1 className="display reveal reveal-delay-1">
            {page.title}
            <span className="serif-italic">{page.accent}</span>
          </h1>
          <p className="lead reveal reveal-delay-2" style={{ marginTop: 18 }}>
            {page.lead}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{page.included.eyebrow}</span>
            <h2 className="display">
              {page.included.title}
              <span className="serif-italic">{page.included.accent}</span>
            </h2>
          </div>
          <div className="cards-row">
            {page.included.cards.map((card) => (
              <ServiceCard key={card.num} {...card} to="/contact" />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{page.featured.eyebrow}</span>
            <h2 className="display">
              {page.featured.title}
              <span className="serif-italic">{page.featured.accent}</span>
            </h2>
          </div>
          <div className="work-grid">
            {page.featured.items.map((item) => (
              <WorkCard key={item.title} item={item} href={item.href} delay={item.delay} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{page.process.eyebrow}</span>
            <h2 className="display">
              {page.process.title}
              <span className="serif-italic">{page.process.accent}</span>
            </h2>
          </div>
          <div className="timeline">
            {page.process.steps.map((step) => (
              <div className="tl-item reveal" key={step.year}>
                <span className="tl-year">{step.year}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>
              {page.cta.title}
              <span className="serif-italic">{page.cta.accent}</span>
            </h2>
            <Link className="btn btn-ghost" to="/contact">
              Let's Talk <span className="arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
