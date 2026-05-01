import './PresetsBar.css'

const PRESETS = [
  {
    id: 'center',
    label: 'Center',
    patch: { justifyContent: 'center', alignItems: 'center' },
  },
  {
    id: 'space-between',
    label: 'Space Between',
    patch: { justifyContent: 'space-between', alignItems: 'center' },
  },
  {
    id: 'column',
    label: 'Column Layout',
    patch: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
  },
]

/** @param {{ flex: object, setFlex: React.Dispatch<React.SetStateAction<object>> }} props */
export default function PresetsBar({ setFlex }) {
  function applyPreset(patch) {
    setFlex((prev) => ({ ...prev, ...patch }))
  }

  return (
    <div className="presets-bar">
      <span className="presets-bar__label">Presets</span>
      <div className="presets-bar__buttons">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            className="presets-bar__btn"
            onClick={() => applyPreset(p.patch)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
