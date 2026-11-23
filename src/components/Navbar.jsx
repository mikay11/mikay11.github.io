import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const serviceLinks = [
  { to: '/services/uiux-design', label: 'UI/UX Design' },
  { to: '/services/branding-identity', label: 'Branding & Identity' },
  { to: '/services/frontend-development', label: 'Frontend Development' },
]

const projectLinks = [
  { to: '/projects/mobile-apps', label: 'Mobile Apps' },
  { to: '/projects/websites', label: 'Websites' },
  { to: '/projects/design-systems', label: 'Design Systems' },
]

function positionMobileDropdown(button, menu) {
  if (!window.matchMedia('(max-width: 860px)').matches) return
  const header = button.closest('.nav')
  if (!header) return
  const margin = 12
  const headerRect = header.getBoundingClientRect()
  const buttonRect = button.getBoundingClientRect()
  const menuRect = menu.getBoundingClientRect()
  const left = buttonRect.left - headerRect.left + (buttonRect.width - menuRect.width) / 2
  const min = margin - headerRect.left
  const max = window.innerWidth - margin - menuRect.width - headerRect.left
  menu.style.left = Math.min(Math.max(left, min), max) + 'px'
  menu.style.right = 'auto'
}

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const onServices = location.pathname.startsWith('/services')
  const onProjects = location.pathname.startsWith('/projects')

  function toggleDropdown(name, event) {
    event.stopPropagation()
    const button = event.currentTarget
    const menu = button.nextElementSibling
    const next = openDropdown === name ? null : name
    setOpenDropdown(next)
    if (next && menu) {
      requestAnimationFrame(() => positionMobileDropdown(button, menu))
    }
  }

  function closeMenu() {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="logo" to="/" onClick={closeMenu}>
          WELCOME GIRLIES!<span>.</span>
        </Link>

        <nav className={`menu ${menuOpen ? 'open' : ''}`} id="menu">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/work" onClick={closeMenu}>
            Work
          </NavLink>

          <li className="dropdown">
            <button
              type="button"
              className={`dd-btn ${onServices ? 'on' : ''} ${openDropdown === 'services' ? 'open' : ''}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'services'}
              onClick={(event) => toggleDropdown('services', event)}
            >
              Services{' '}
              <span className="dd-arrow" aria-hidden="true">
                {openDropdown === 'services' ? '\u25B2' : '\u25BC'}
              </span>
            </button>
            <ul className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="dropdown">
            <button
              type="button"
              className={`dd-btn ${onProjects ? 'on' : ''} ${openDropdown === 'projects' ? 'open' : ''}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'projects'}
              onClick={(event) => toggleDropdown('projects', event)}
            >
              Projects{' '}
              <span className="dd-arrow" aria-hidden="true">
                {openDropdown === 'projects' ? '\u25B2' : '\u25BC'}
              </span>
            </button>
            <ul className={`dropdown-menu ${openDropdown === 'projects' ? 'show' : ''}`}>
              {projectLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-pill" to="/contact" onClick={closeMenu}>
            Let's Talk <span className="arrow">&rarr;</span>
          </Link>
          <button
            type="button"
            className={`burger ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
