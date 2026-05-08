import './InfoTip.css'

/**
 * @param {{ text: string }} props
 */
export default function InfoTip({ text }) {
  return (
    <span
      className="info-tip"
      tabIndex={0}
      role="img"
      aria-label={text}
      data-tip={text}
    >
      i
    </span>
  )
}

