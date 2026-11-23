import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <h3>
            Let's work <span>together.</span>
          </h3>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>&copy; {currentYear} Michaela Denise Ong. All rights reserved.</span>
          <span>Coffee or tea?</span>
        </div>
      </div>
    </footer>
  )
}
