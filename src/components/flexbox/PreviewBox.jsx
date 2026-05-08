import './PreviewBox.css'

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

/** @param {{ flex: { flexDirection: string, flexWrap: string, justifyContent: string, alignItems: string, alignContent: string, gap: number, itemCount: number, previewWidth?: string, previewHeight?: string }, setFlex: React.Dispatch<React.SetStateAction<object>> }} props */
export default function PreviewBox({ flex, setFlex }) {
  const itemCount = Math.min(20, Math.max(1, Math.floor(flex.itemCount || 1)))

  function update(key, rawValue) {
    setFlex((prev) => ({ ...prev, [key]: rawValue }))
  }

  const previewWidthPresetValue = PREVIEW_WIDTH_PRESETS.some(
    (p) => p.value === flex.previewWidth,
  )
    ? flex.previewWidth
    : '__custom__'

  const previewHeightPresetValue = PREVIEW_HEIGHT_PRESETS.some(
    (p) => p.value === flex.previewHeight,
  )
    ? flex.previewHeight
    : '__custom__'

  const containerStyle = {
    display: 'flex',
    flexDirection: flex.flexDirection,
    flexWrap: flex.flexWrap,
    justifyContent: flex.justifyContent,
    alignItems: flex.alignItems,
    alignContent: flex.alignContent,
    gap: `${flex.gap}px`,
    width: flex.previewWidth ?? '100%',
    maxWidth: '100%',
    height: flex.previewHeight ?? 'auto',
  }

  return (
    <div className="preview-box">
      <div className="preview-box__toolbar">
        <label className="preview-box__tool">
          <span className="preview-box__tool-label">W</span>
          <select
            className="preview-box__tool-select"
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
            className="preview-box__tool-input"
            value={flex.previewWidth}
            onChange={(e) => update('previewWidth', e.target.value)}
            spellCheck={false}
            aria-label="Preview width value"
          />
        </label>

        <label className="preview-box__tool">
          <span className="preview-box__tool-label">H</span>
          <select
            className="preview-box__tool-select"
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
            className="preview-box__tool-input"
            value={flex.previewHeight}
            onChange={(e) => update('previewHeight', e.target.value)}
            spellCheck={false}
            aria-label="Preview height value"
          />
        </label>
      </div>
      <div className="preview-box__frame">
        <div className="preview-box__container" style={containerStyle}>
          {Array.from({ length: itemCount }, (_, i) => (
            <div key={i} className="preview-box__item">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
