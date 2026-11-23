import { useEffect, useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!submitted) return
    const timer = setTimeout(() => setSubmitted(false), 5000)
    return () => clearTimeout(timer)
  }, [submitted])

  function handleSubmit(event) {
    event.preventDefault()
    event.target.reset()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-contact">
        <div className="container">
          <span className="eyebrow reveal">Contact</span>
          <h1 className="display reveal reveal-delay-1">
            Let's create something <span className="serif-italic">bold.</span>
          </h1>
          <p className="lead reveal reveal-delay-2" style={{ marginTop: 18 }}>
            Got a project, a role, or just a good idea? My inbox is always open — I reply to every message
            within 24 hours.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <div className="contact-info">
            <a className="info-line reveal" href="mailto:michaeladenise11@gmail.com">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span>
                <b>Email</b>michaeladenise11@gmail.com
              </span>
            </a>

            <a className="info-line reveal" href="tel:+094522238406">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <span>
                <b>Phone</b>+09 452 223 8406
              </span>
            </a>

            <div className="info-line reveal">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>
                <b>Location</b>Purok 1 TCES, Poblacion Tubod Lanao del Norte
              </span>
            </div>

            <a
              className="info-line reveal"
              href="https://www.instagram.com/mky_ong?igsh=MTBuaHhya3lhazZmeQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </span>
              <span>
                <b>Instagram</b>@mky_ong
              </span>
            </a>

            <a
              className="info-line reveal"
              href="https://www.facebook.com/share/1JMuejtQc5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </span>
              <span>
                <b>Facebook</b>Michaela Denise Ong
              </span>
            </a>
          </div>

          <form className="contact-form reveal" id="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="name@gmail.com" required />
            </div>
            <div className="field">
              <label htmlFor="budget">Project Type</label>
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder="Product design / Website / Branding / Other"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-pill" style={{ alignSelf: 'flex-start' }}>
              Send Message <span className="arrow">&rarr;</span>
            </button>
            <div className={`form-success ${submitted ? 'show' : ''}`} id="form-success">
              Thanks! Your message has been sent — I'll get back to you within 24 hours.
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
