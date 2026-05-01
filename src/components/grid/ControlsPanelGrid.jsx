import './ControlsPanelGrid.css'

const JUSTIFY_ITEMS = [
  { value: 'start', label: 'start' },
  { value: 'center', label: 'center' },
  { value: 'end', label: 'end' },
  { value: 'stretch', label: 'stretch' },
]

const ALIGN_ITEMS = [
  { value: 'start', label: 'start' },
  { value: 'center', label: 'center' },
  { value: 'end', label: 'end' },
  { value: 'stretch', label: 'stretch' },
]

/** @param {{ grid: object, setGrid: React.Dispatch<React.SetStateAction<object>> }} props */
export default function ControlsPanelGrid({ grid, setGrid }) {
  function update(key, rawValue) {
    const value =
      key === 'gap'
        ? Math.max(0, Math.floor(Number(rawValue) || 0))
        : rawValue
    setGrid((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="controls-panel-grid">
      <h2 className="controls-panel-grid__heading">Controls</h2>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">grid-template-columns</span>
        <input
          type="text"
          className="controls-panel-grid__input"
          value={grid.gridTemplateColumns}
          onChange={(e) => update('gridTemplateColumns', e.target.value)}
          spellCheck={false}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">grid-template-rows</span>
        <input
          type="text"
          className="controls-panel-grid__input"
          value={grid.gridTemplateRows}
          onChange={(e) => update('gridTemplateRows', e.target.value)}
          spellCheck={false}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">gap (px)</span>
        <input
          type="number"
          className="controls-panel-grid__input"
          min={0}
          step={1}
          value={grid.gap}
          onChange={(e) => update('gap', e.target.value)}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">justify-items</span>
        <select
          className="controls-panel-grid__select"
          value={grid.justifyItems}
          onChange={(e) => update('justifyItems', e.target.value)}
        >
          {JUSTIFY_ITEMS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">align-items</span>
        <select
          className="controls-panel-grid__select"
          value={grid.alignItems}
          onChange={(e) => update('alignItems', e.target.value)}
        >
          {ALIGN_ITEMS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
