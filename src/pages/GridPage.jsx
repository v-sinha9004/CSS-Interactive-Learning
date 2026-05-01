import { useState } from 'react'
import { Link } from 'react-router-dom'
import PresetsBarGrid from '../components/grid/PresetsBarGrid.jsx'
import ControlsPanelGrid from '../components/grid/ControlsPanelGrid.jsx'
import PreviewBoxGrid from '../components/grid/PreviewBoxGrid.jsx'
import CodePanelGrid from '../components/grid/CodePanelGrid.jsx'
import './GridPage.css'

const initialGrid = {
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto auto',
  gap: 10,
  justifyItems: 'stretch',
  alignItems: 'stretch',
}

export default function GridPage() {
  const [grid, setGrid] = useState(initialGrid)

  return (
    <div className="grid-page">
      <header className="grid-page__top">
        <Link to="/" className="grid-page__back">
          ← Home
        </Link>
        <h1 className="grid-page__title">Grid Visualizer</h1>
      </header>

      <div className="grid-page__shell">
        <aside className="grid-page__presets">
          <PresetsBarGrid setGrid={setGrid} />
        </aside>
        <aside className="grid-page__controls">
          <ControlsPanelGrid grid={grid} setGrid={setGrid} />
        </aside>
        <section className="grid-page__preview">
          <PreviewBoxGrid grid={grid} />
        </section>
        <aside className="grid-page__code">
          <CodePanelGrid grid={grid} />
        </aside>
      </div>
    </div>
  )
}
