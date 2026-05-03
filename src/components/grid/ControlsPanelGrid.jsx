import './ControlsPanelGrid.css'

const GRID_TEMPLATE_COLUMNS_PRESETS = [
  { value: '1fr 1fr', label: '2 equal (1fr 1fr)' },
  { value: 'repeat(3, 1fr)', label: '3 equal (repeat(3, 1fr))' },
  { value: 'repeat(4, 1fr)', label: '4 equal (repeat(4, 1fr))' },
  { value: '240px 1fr', label: 'Sidebar + content (240px 1fr)' },
  { value: 'minmax(240px, 1fr) 2fr', label: 'Minmax + 2fr (minmax(240px, 1fr) 2fr)' },
  {
    value: 'repeat(auto-fit, minmax(220px, 1fr))',
    label: 'Responsive cards (auto-fit, minmax(220px, 1fr))',
  },
  {
    value: 'repeat(auto-fill, minmax(220px, 1fr))',
    label: 'Responsive cards (auto-fill, minmax(220px, 1fr))',
  },
  { value: 'max-content 1fr', label: 'Max-content + 1fr (max-content 1fr)' },
]

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

const GRID_AUTO_FLOW = [
  { value: 'row', label: 'row' },
  { value: 'column', label: 'column' },
  { value: 'dense', label: 'dense' },
  { value: 'row dense', label: 'row dense' },
  { value: 'column dense', label: 'column dense' },
]

const ALIGN_CONTENT = [
  { value: 'start', label: 'start' },
  { value: 'end', label: 'end' },
  { value: 'center', label: 'center' },
  { value: 'stretch', label: 'stretch' },
  { value: 'space-between', label: 'space-between' },
  { value: 'space-around', label: 'space-around' },
  { value: 'space-evenly', label: 'space-evenly' },
]

/** @param {{ grid: object, setGrid: React.Dispatch<React.SetStateAction<object>> }} props */
export default function ControlsPanelGrid({ grid, setGrid }) {
  function update(key, rawValue) {
    const value =
      key === 'rowGap' || key === 'columnGap'
        ? Math.max(0, Math.floor(Number(rawValue) || 0))
        : rawValue
    setGrid((prev) => ({ ...prev, [key]: value }))
  }

  const gridTemplateColumnsPresetValue = GRID_TEMPLATE_COLUMNS_PRESETS.some(
    (p) => p.value === grid.gridTemplateColumns,
  )
    ? grid.gridTemplateColumns
    : '__custom__'

  return (
    <div className="controls-panel-grid">
      <h2 className="controls-panel-grid__heading">Controls</h2>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">grid-template-columns</span>
        <select
          className="controls-panel-grid__select"
          value={gridTemplateColumnsPresetValue}
          onChange={(e) => {
            const next = e.target.value
            if (next !== '__custom__') update('gridTemplateColumns', next)
          }}
        >
          <option value="__custom__">Custom…</option>
          {GRID_TEMPLATE_COLUMNS_PRESETS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
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
        <span className="controls-panel-grid__label">grid-auto-flow</span>
        <select
          className="controls-panel-grid__select"
          value={grid.gridAutoFlow}
          onChange={(e) => update('gridAutoFlow', e.target.value)}
        >
          {GRID_AUTO_FLOW.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">grid-auto-rows</span>
        <input
          type="text"
          className="controls-panel-grid__input"
          value={grid.gridAutoRows}
          onChange={(e) => update('gridAutoRows', e.target.value)}
          spellCheck={false}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">grid-auto-columns</span>
        <input
          type="text"
          className="controls-panel-grid__input"
          value={grid.gridAutoColumns}
          onChange={(e) => update('gridAutoColumns', e.target.value)}
          spellCheck={false}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">row-gap (px)</span>
        <input
          type="number"
          className="controls-panel-grid__input"
          min={0}
          step={1}
          value={grid.rowGap}
          onChange={(e) => update('rowGap', e.target.value)}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">column-gap (px)</span>
        <input
          type="number"
          className="controls-panel-grid__input"
          min={0}
          step={1}
          value={grid.columnGap}
          onChange={(e) => update('columnGap', e.target.value)}
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

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">justify-content</span>
        <select
          className="controls-panel-grid__select"
          value={grid.justifyContent}
          onChange={(e) => update('justifyContent', e.target.value)}
        >
          {ALIGN_CONTENT.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">align-content</span>
        <select
          className="controls-panel-grid__select"
          value={grid.alignContent}
          onChange={(e) => update('alignContent', e.target.value)}
        >
          {ALIGN_CONTENT.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
