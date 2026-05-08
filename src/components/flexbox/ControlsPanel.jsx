import './ControlsPanel.css'
import InfoTip from '../ui/InfoTip.jsx'

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
        <span className="controls-panel__label">
          flex-direction
          <InfoTip text="Sets the main axis direction: row = left→right, column = top→bottom. This changes how items are laid out and how justify/align behave." />
        </span>
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
        <span className="controls-panel__label">
          flex-wrap
          <InfoTip text="Controls whether items stay on one line (nowrap) or can wrap onto multiple lines (wrap). Use wrap to see multi-line behavior and align-content." />
        </span>
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
        <span className="controls-panel__label">
          justify-content
          <InfoTip text="Aligns items along the main axis (row: horizontal, column: vertical). It affects how extra space is distributed between/around items." />
        </span>
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
        <span className="controls-panel__label">
          align-items
          <InfoTip text="Aligns items along the cross axis (row: vertical, column: horizontal) within each line. stretch makes items grow to fill the cross size." />
        </span>
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
        <span className="controls-panel__label">
          align-content
          <InfoTip text="Aligns the flex lines within the container (only matters when wrapping creates multiple lines). Controls spacing between lines." />
        </span>
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
        <span className="controls-panel__label">
          gap (px)
          <InfoTip text="Adds spacing between items (and between lines when wrapping). Unlike margin, it’s managed by the container." />
        </span>
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
        <span className="controls-panel__label">
          items
          <InfoTip text="How many flex items to render in the preview. Increase to better test wrapping and alignment." />
        </span>
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
