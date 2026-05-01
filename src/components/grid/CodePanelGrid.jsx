import './CodePanelGrid.css'

function buildCss(grid) {
  const lines = [
    'display: grid;',
    `grid-template-columns: ${grid.gridTemplateColumns};`,
    `grid-template-rows: ${grid.gridTemplateRows};`,
    `gap: ${grid.gap}px;`,
    `justify-items: ${grid.justifyItems};`,
    `align-items: ${grid.alignItems};`,
  ]
  return lines.join('\n')
}

/** @param {{ grid: object }} props */
export default function CodePanelGrid({ grid }) {
  const css = buildCss(grid)

  return (
    <div className="code-panel-grid">
      <h2 className="code-panel-grid__heading">CSS</h2>
      <pre className="code-panel-grid__pre">{css}</pre>
    </div>
  )
}
