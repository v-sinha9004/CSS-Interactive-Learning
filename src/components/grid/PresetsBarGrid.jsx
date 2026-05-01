import './PresetsBarGrid.css'

const PRESETS = [
  {
    id: 'two-cols',
    label: '2 Columns',
    patch: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(4, auto)',
      gap: 10,
    },
  },
  {
    id: 'three-cols',
    label: '3 Columns',
    patch: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: 'repeat(3, auto)',
      gap: 10,
    },
  },
  {
    id: 'centered',
    label: 'Centered Grid',
    patch: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(4, auto)',
      justifyItems: 'center',
      alignItems: 'center',
      gap: 10,
    },
  },
]

/** @param {{ setGrid: React.Dispatch<React.SetStateAction<object>> }} props */
export default function PresetsBarGrid({ setGrid }) {
  function applyPreset(patch) {
    setGrid((prev) => ({ ...prev, ...patch }))
  }

  return (
    <div className="presets-bar-grid">
      <span className="presets-bar-grid__label">Presets</span>
      <div className="presets-bar-grid__buttons">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            className="presets-bar-grid__btn"
            onClick={() => applyPreset(p.patch)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
