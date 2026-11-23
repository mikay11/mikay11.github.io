import { Link } from 'react-router-dom'
import PhotoSlider from '../components/PhotoSlider'
import { sliderImages, stats, skills, timeline, facts } from '../data/about'

function StatValue({ value }) {
  if (value.endsWith('+')) {
    return (
      <b>
        {value.slice(0, -1)}
        <span>+</span>
      </b>
    )
  }
  return <b>{value}</b>
}

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-grid">
          <div className="about-photo reveal">
            <PhotoSlider images={sliderImages} />
          </div>

          <div className="about-copy">
            <span className="eyebrow reveal">About Me</span>
            <h1 className="display reveal reveal-delay-1">
              The person behind the <span className="serif-italic">pixels.</span>
            </h1>
            <p className="reveal reveal-delay-2">
              Hi, I'm MIKAY — a 3rd year BS Computer Science student at Tangub City Global College (TCGC),
              with 3 years of experience as a Student Council Officer and Board Member (Treasurer). While
              grounded in programming and technical problem-solving, I bring a well-rounded perspective
              shaped by a genuine passion for the arts and creative expression.
            </p>
            <p className="reveal reveal-delay-2">
              <em>"YOLO — You Only Live Once."</em> A reminder to make the most of every opportunity,
              embrace new experiences, and pursue growth both personally and professionally without
              hesitation.
            </p>
            <p className="reveal reveal-delay-2">
              <em>"I can do all things through Christ who strengthens me." — Philippians 4:13</em>
            </p>
            <Link className="btn btn-pill reveal reveal-delay-3" to="/work">
              See My Work <span className="arrow">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="stats-row reveal">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <StatValue value={stat.value} />
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Skills &amp; Tools</span>
            <h2 className="display">
              What I'm <span className="serif-italic">good at.</span>
            </h2>
          </div>
          <div className="pills reveal">
            {skills.map((skill) => (
              <span className="pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Experience</span>
            <h2 className="display">
              My <span className="serif-italic">journey.</span>
            </h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div className="tl-item reveal" key={`${item.year}-${item.title}`}>
                <span className="tl-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Off The Clock</span>
            <h2 className="display">
              Fun <span className="serif-italic">facts.</span>
            </h2>
          </div>
          <div className="facts-row">
            {facts.map((fact) => (
              <div className={`fact ${fact.color} reveal ${fact.delay}`} key={fact.big}>
                <span className="big">{fact.big}</span>
                <p>{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
