import './CodePanelGrid.css'

function buildCss(grid) {
  const lines = [
    'display: grid;',
    `grid-template-columns: ${grid.gridTemplateColumns};`,
    `grid-template-rows: ${grid.gridTemplateRows};`,
    `grid-auto-flow: ${grid.gridAutoFlow};`,
    `grid-auto-rows: ${grid.gridAutoRows};`,
    `grid-auto-columns: ${grid.gridAutoColumns};`,
    `row-gap: ${grid.rowGap}px;`,
    `column-gap: ${grid.columnGap}px;`,
    `justify-items: ${grid.justifyItems};`,
    `align-items: ${grid.alignItems};`,
    `justify-content: ${grid.justifyContent};`,
    `align-content: ${grid.alignContent};`,
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
