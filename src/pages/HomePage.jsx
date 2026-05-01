import TopicCard from '../components/TopicCard.jsx'
import './HomePage.css'

const TOPICS = [
  { id: 'flexbox', title: 'Flexbox', path: '/flexbox', enabled: true },
  { id: 'grid', title: 'Grid', path: '/grid', enabled: false },
  { id: 'positioning', title: 'Positioning', path: '/positioning', enabled: false },
  { id: 'box-model', title: 'Box Model', path: '/box-model', enabled: false },
  { id: 'display', title: 'Display', path: '/display', enabled: false },
]

export default function HomePage() {
  return (
    <main className="home-page">
      <header className="home-page__header">
        <h1 className="home-page__title">CSS Learning</h1>
        <p className="home-page__subtitle">
          Pick a topic to explore — more sections coming soon.
        </p>
      </header>

      <div className="home-page__grid">
        {TOPICS.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            enabled={topic.enabled}
            to={topic.enabled ? topic.path : undefined}
          />
        ))}
      </div>
    </main>
  )
}
