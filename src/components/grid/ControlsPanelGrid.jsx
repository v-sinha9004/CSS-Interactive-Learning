import './ControlsPanelGrid.css'
import InfoTip from '../ui/InfoTip.jsx'

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

const GRID_TEMPLATE_ROWS_PRESETS = [
  { value: 'auto', label: 'Single auto (auto)' },
  { value: 'auto auto', label: '2 auto (auto auto)' },
  { value: 'auto 1fr auto', label: 'Header / body / footer (auto 1fr auto)' },
  { value: 'repeat(3, auto)', label: '3 auto (repeat(3, auto))' },
  { value: 'repeat(6, 80px)', label: '6 fixed rows (repeat(6, 80px))' },
  { value: '120px repeat(3, auto) 1fr', label: 'Mixed (120px repeat(3, auto) 1fr)' },
]

const GRID_AUTO_TRACK_PRESETS = [
  { value: 'auto', label: 'auto' },
  { value: '1fr', label: '1fr' },
  { value: 'min-content', label: 'min-content' },
  { value: 'max-content', label: 'max-content' },
  { value: 'minmax(120px, auto)', label: 'minmax(120px, auto)' },
  { value: 'minmax(120px, 1fr)', label: 'minmax(120px, 1fr)' },
  { value: 'minmax(min-content, 1fr)', label: 'minmax(min-content, 1fr)' },
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

  const gridTemplateRowsPresetValue = GRID_TEMPLATE_ROWS_PRESETS.some(
    (p) => p.value === grid.gridTemplateRows,
  )
    ? grid.gridTemplateRows
    : '__custom__'

  const gridAutoRowsPresetValue = GRID_AUTO_TRACK_PRESETS.some(
    (p) => p.value === grid.gridAutoRows,
  )
    ? grid.gridAutoRows
    : '__custom__'

  const gridAutoColumnsPresetValue = GRID_AUTO_TRACK_PRESETS.some(
    (p) => p.value === grid.gridAutoColumns,
  )
    ? grid.gridAutoColumns
    : '__custom__'

  return (
    <div className="controls-panel-grid">
      <h2 className="controls-panel-grid__heading">Controls</h2>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">
          grid-template-columns
          <InfoTip text="Defines the grid’s column tracks (e.g. 1fr 2fr, 200px, repeat(...), minmax(...)). This controls how wide each column is." />
        </span>
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
        <span className="controls-panel-grid__label">
          grid-template-rows
          <InfoTip text="Defines the grid’s row tracks (e.g. auto, 80px, 1fr, repeat(...)). This controls how tall each explicit row is." />
        </span>
        <select
          className="controls-panel-grid__select"
          value={gridTemplateRowsPresetValue}
          onChange={(e) => {
            const next = e.target.value
            if (next !== '__custom__') update('gridTemplateRows', next)
          }}
        >
          <option value="__custom__">Custom…</option>
          {GRID_TEMPLATE_ROWS_PRESETS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="controls-panel-grid__input"
          value={grid.gridTemplateRows}
          onChange={(e) => update('gridTemplateRows', e.target.value)}
          spellCheck={false}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">
          grid-auto-flow
          <InfoTip text="Controls how auto-placed items fill the grid: by rows or columns. 'dense' can back-fill gaps (may reorder visually)." />
        </span>
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
        <span className="controls-panel-grid__label">
          grid-auto-rows
          <InfoTip text="Sets the size of implicit rows (rows created automatically when content overflows the explicit grid). Useful when items create extra rows." />
        </span>
        <select
          className="controls-panel-grid__select"
          value={gridAutoRowsPresetValue}
          onChange={(e) => {
            const next = e.target.value
            if (next !== '__custom__') update('gridAutoRows', next)
          }}
        >
          <option value="__custom__">Custom…</option>
          {GRID_AUTO_TRACK_PRESETS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="controls-panel-grid__input"
          value={grid.gridAutoRows}
          onChange={(e) => update('gridAutoRows', e.target.value)}
          spellCheck={false}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">
          grid-auto-columns
          <InfoTip text="Sets the size of implicit columns (columns created automatically when needed). Often used with grid-auto-flow: column." />
        </span>
        <select
          className="controls-panel-grid__select"
          value={gridAutoColumnsPresetValue}
          onChange={(e) => {
            const next = e.target.value
            if (next !== '__custom__') update('gridAutoColumns', next)
          }}
        >
          <option value="__custom__">Custom…</option>
          {GRID_AUTO_TRACK_PRESETS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="controls-panel-grid__input"
          value={grid.gridAutoColumns}
          onChange={(e) => update('gridAutoColumns', e.target.value)}
          spellCheck={false}
        />
      </label>

      <label className="controls-panel-grid__field">
        <span className="controls-panel-grid__label">
          row-gap (px)
          <InfoTip text="Adds spacing between grid rows (the gutters horizontally between rows). This is not inside the items; it’s between tracks." />
        </span>
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
        <span className="controls-panel-grid__label">
          column-gap (px)
          <InfoTip text="Adds spacing between grid columns (the gutters vertically between columns)." />
        </span>
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
        <span className="controls-panel-grid__label">
          justify-items
          <InfoTip text="Aligns each item inside its grid cell along the inline axis (usually left↔right). stretch makes items fill the cell width." />
        </span>
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
        <span className="controls-panel-grid__label">
          align-items
          <InfoTip text="Aligns each item inside its grid cell along the block axis (usually top↔bottom). stretch makes items fill the cell height." />
        </span>
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
        <span className="controls-panel-grid__label">
          justify-content
          <InfoTip text="Aligns the whole grid within the container along the inline axis when the grid is smaller than the container (extra space)." />
        </span>
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
        <span className="controls-panel-grid__label">
          align-content
          <InfoTip text="Aligns the whole grid within the container along the block axis when there’s extra vertical space. Affects spacing between rows when the grid doesn’t fill the container." />
        </span>
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
