import { Link } from 'react-router-dom'

export default function ServiceCard({ num, title, text, color, delay = '', to = '/contact' }) {
  return (
    <article className={`card ${color} reveal ${delay}`}>
      <span className="card-num">{num}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link className="card-link" to={to} aria-label={title}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </Link>
    </article>
  )
}
