import './PreviewBoxGrid.css'

const CELL_COUNT = 8

/** @param {{ grid: object }} props */
export default function PreviewBoxGrid({ grid }) {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: grid.gridTemplateColumns,
    gridTemplateRows: grid.gridTemplateRows,
    gap: `${grid.gap}px`,
    justifyItems: grid.justifyItems,
    alignItems: grid.alignItems,
  }

  return (
    <div className="preview-box-grid">
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
