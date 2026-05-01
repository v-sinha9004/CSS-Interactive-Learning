import './CodePanel.css'

function buildCss(flex) {
  const lines = [
    'display: flex;',
    `flex-direction: ${flex.flexDirection};`,
    `flex-wrap: ${flex.flexWrap};`,
    `justify-content: ${flex.justifyContent};`,
    `align-items: ${flex.alignItems};`,
    `align-content: ${flex.alignContent};`,
    `gap: ${flex.gap}px;`,
  ]
  return lines.join('\n')
}

/** @param {{ flex: object }} props */
export default function CodePanel({ flex }) {
  const css = buildCss(flex)

  return (
    <div className="code-panel">
      <h2 className="code-panel__heading">CSS</h2>
      <pre className="code-panel__pre">{css}</pre>
    </div>
  )
}
