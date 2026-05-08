import { useState } from 'react'
import { Link } from 'react-router-dom'
import PresetsBar from '../components/flexbox/PresetsBar.jsx'
import ControlsPanel from '../components/flexbox/ControlsPanel.jsx'
import PreviewBox from '../components/flexbox/PreviewBox.jsx'
import CodePanel from '../components/flexbox/CodePanel.jsx'
import './FlexboxPage.css'

const initialFlex = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  previewWidth: '100%',
  previewHeight: 'auto',
  gap: 10,
  itemCount: 5,
}

export default function FlexboxPage() {
  const [flex, setFlex] = useState(initialFlex)

  return (
    <div className="flexbox-page">
      <header className="flexbox-page__top">
        <Link to="/" className="flexbox-page__back">
          ← Home
        </Link>
        <h1 className="flexbox-page__title">Flexbox Visualizer</h1>
      </header>

      <div className="flexbox-page__shell">
        <aside className="flexbox-page__presets">
          <PresetsBar setFlex={setFlex} />
        </aside>
        <aside className="flexbox-page__controls">
          <ControlsPanel flex={flex} setFlex={setFlex} />
        </aside>
        <section className="flexbox-page__preview">
          <PreviewBox flex={flex} setFlex={setFlex} />
        </section>
        <aside className="flexbox-page__code">
          <CodePanel flex={flex} />
        </aside>
      </div>
    </div>
  )
}
