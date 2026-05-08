import './PreviewBoxGrid.css'

const CELL_COUNT = 8

const PREVIEW_WIDTH_PRESETS = [
  { value: '100%', label: 'Fill' },
  { value: '320px', label: '320' },
  { value: '375px', label: '375' },
  { value: '414px', label: '414' },
  { value: '480px', label: '480' },
  { value: '768px', label: '768' },
  { value: '1024px', label: '1024' },
]

const PREVIEW_HEIGHT_PRESETS = [
  { value: 'auto', label: 'Auto' },
  { value: '240px', label: '240' },
  { value: '320px', label: '320' },
  { value: '400px', label: '400' },
  { value: '560px', label: '560' },
  { value: '720px', label: '720' },
]

/** @param {{ grid: object, setGrid: React.Dispatch<React.SetStateAction<object>> }} props */
export default function PreviewBoxGrid({ grid, setGrid }) {
  function update(key, rawValue) {
    setGrid((prev) => ({ ...prev, [key]: rawValue }))
  }

  const previewWidthPresetValue = PREVIEW_WIDTH_PRESETS.some(
    (p) => p.value === grid.previewWidth,
  )
    ? grid.previewWidth
    : '__custom__'

  const previewHeightPresetValue = PREVIEW_HEIGHT_PRESETS.some(
    (p) => p.value === grid.previewHeight,
  )
    ? grid.previewHeight
    : '__custom__'

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: grid.gridTemplateColumns,
    gridTemplateRows: grid.gridTemplateRows,
    gridAutoFlow: grid.gridAutoFlow,
    gridAutoRows: grid.gridAutoRows,
    gridAutoColumns: grid.gridAutoColumns,
    rowGap: `${grid.rowGap}px`,
    columnGap: `${grid.columnGap}px`,
    justifyItems: grid.justifyItems,
    alignItems: grid.alignItems,
    justifyContent: grid.justifyContent,
    alignContent: grid.alignContent,
    width: grid.previewWidth ?? '100%',
    maxWidth: '100%',
    height: grid.previewHeight ?? 'auto',
  }

  return (
    <div className="preview-box-grid">
      <div className="preview-box-grid__toolbar">
        <label className="preview-box-grid__tool">
          <span className="preview-box-grid__tool-label">W</span>
          <select
            className="preview-box-grid__tool-select"
            value={previewWidthPresetValue}
            onChange={(e) => {
              const next = e.target.value
              if (next !== '__custom__') update('previewWidth', next)
            }}
            aria-label="Preview width"
          >
            <option value="__custom__">Custom</option>
            {PREVIEW_WIDTH_PRESETS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <input
            className="preview-box-grid__tool-input"
            value={grid.previewWidth}
            onChange={(e) => update('previewWidth', e.target.value)}
            spellCheck={false}
            aria-label="Preview width value"
          />
        </label>

        <label className="preview-box-grid__tool">
          <span className="preview-box-grid__tool-label">H</span>
          <select
            className="preview-box-grid__tool-select"
            value={previewHeightPresetValue}
            onChange={(e) => {
              const next = e.target.value
              if (next !== '__custom__') update('previewHeight', next)
            }}
            aria-label="Preview height"
          >
            <option value="__custom__">Custom</option>
            {PREVIEW_HEIGHT_PRESETS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <input
            className="preview-box-grid__tool-input"
            value={grid.previewHeight}
            onChange={(e) => update('previewHeight', e.target.value)}
            spellCheck={false}
            aria-label="Preview height value"
          />
        </label>
      </div>
      <div className="preview-box-grid__frame">
        <div
          className="preview-box-grid__container preview-box-grid__container--lines"
          style={containerStyle}
        >
          {Array.from({ length: CELL_COUNT }, (_, i) => (
            <div key={i} className="preview-box-grid__item">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
