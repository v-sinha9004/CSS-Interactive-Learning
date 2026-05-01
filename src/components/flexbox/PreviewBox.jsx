import './PreviewBox.css'

/** @param {{ flex: { flexDirection: string, flexWrap: string, justifyContent: string, alignItems: string, alignContent: string, gap: number, itemCount: number } }} props */
export default function PreviewBox({ flex }) {
  const itemCount = Math.min(20, Math.max(1, Math.floor(flex.itemCount || 1)))

  const containerStyle = {
    display: 'flex',
    flexDirection: flex.flexDirection,
    flexWrap: flex.flexWrap,
    justifyContent: flex.justifyContent,
    alignItems: flex.alignItems,
    alignContent: flex.alignContent,
    gap: `${flex.gap}px`,
    height: '400px',
  }

  return (
    <div className="preview-box">
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
