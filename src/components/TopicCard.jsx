import { Link } from 'react-router-dom'
import './TopicCard.css'

/**
 * @param {{ title: string, enabled?: boolean, to?: string }} props
 */
export default function TopicCard({ title, enabled = false, to }) {
  const className = `topic-card ${enabled ? 'topic-card--enabled' : 'topic-card--disabled'}`

  if (enabled && to) {
    return (
      <Link to={to} className={className}>
        <span className="topic-card__title">{title}</span>
      </Link>
    )
  }

  return (
    <div className={className} aria-disabled="true">
      <span className="topic-card__title">{title}</span>
      <span className="topic-card__badge">Coming Soon</span>
    </div>
  )
}
