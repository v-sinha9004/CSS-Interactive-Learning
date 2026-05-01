import './ControlsPanel.css'

const FLEX_DIRECTIONS = [
  { value: 'row', label: 'row' },
  { value: 'column', label: 'column' },
]

const FLEX_WRAP = [
  { value: 'nowrap', label: 'nowrap' },
  { value: 'wrap', label: 'wrap' },
  { value: 'wrap-reverse', label: 'wrap-reverse' },
]

const JUSTIFY_CONTENT = [
  { value: 'flex-start', label: 'flex-start' },
  { value: 'flex-end', label: 'flex-end' },
  { value: 'center', label: 'center' },
  { value: 'space-between', label: 'space-between' },
  { value: 'space-around', label: 'space-around' },
  { value: 'space-evenly', label: 'space-evenly' },
]

const ALIGN_ITEMS = [
  { value: 'stretch', label: 'stretch' },
  { value: 'flex-start', label: 'flex-start' },
  { value: 'flex-end', label: 'flex-end' },
  { value: 'center', label: 'center' },
  { value: 'baseline', label: 'baseline' },
]

const ALIGN_CONTENT = [
  { value: 'stretch', label: 'stretch' },
  { value: 'flex-start', label: 'flex-start' },
  { value: 'flex-end', label: 'flex-end' },
  { value: 'center', label: 'center' },
  { value: 'space-between', label: 'space-between' },
  { value: 'space-around', label: 'space-around' },
  { value: 'space-evenly', label: 'space-evenly' },
]

/** @param {{ flex: object, setFlex: React.Dispatch<React.SetStateAction<object>> }} props */
export default function ControlsPanel({ flex, setFlex }) {
  function update(key, rawValue) {
    const value = (() => {
      if (key === 'gap') return Math.min(20, Math.max(0, Number(rawValue) || 0))
      if (key === 'itemCount')
        return Math.min(20, Math.max(1, Math.floor(Number(rawValue) || 1)))
      return rawValue
    })()
    setFlex((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="controls-panel">
      <h2 className="controls-panel__heading">Controls</h2>

      <label className="controls-panel__field">
        <span className="controls-panel__label">flex-direction</span>
        <select
          className="controls-panel__select"
          value={flex.flexDirection}
          onChange={(e) => update('flexDirection', e.target.value)}
        >
          {FLEX_DIRECTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel__field">
        <span className="controls-panel__label">flex-wrap</span>
        <select
          className="controls-panel__select"
          value={flex.flexWrap}
          onChange={(e) => update('flexWrap', e.target.value)}
        >
          {FLEX_WRAP.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel__field">
        <span className="controls-panel__label">justify-content</span>
        <select
          className="controls-panel__select"
          value={flex.justifyContent}
          onChange={(e) => update('justifyContent', e.target.value)}
        >
          {JUSTIFY_CONTENT.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel__field">
        <span className="controls-panel__label">align-items</span>
        <select
          className="controls-panel__select"
          value={flex.alignItems}
          onChange={(e) => update('alignItems', e.target.value)}
        >
          {ALIGN_ITEMS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel__field">
        <span className="controls-panel__label">align-content</span>
        <select
          className="controls-panel__select"
          value={flex.alignContent}
          onChange={(e) => update('alignContent', e.target.value)}
        >
          {ALIGN_CONTENT.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel__field">
        <span className="controls-panel__label">gap (px)</span>
        <input
          type="number"
          className="controls-panel__input"
          min={0}
          max={20}
          step={1}
          value={flex.gap}
          onChange={(e) => update('gap', e.target.value)}
        />
      </label>

      <label className="controls-panel__field">
        <span className="controls-panel__label">items</span>
        <input
          type="number"
          className="controls-panel__input"
          min={1}
          max={20}
          step={1}
          value={flex.itemCount}
          onChange={(e) => update('itemCount', e.target.value)}
        />
      </label>
    </div>
  )
}
