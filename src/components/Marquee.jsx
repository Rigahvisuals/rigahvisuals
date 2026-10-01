import { collaborators } from '../data/content'

export default function Marquee() {
  // duplicated once so the marquee can loop seamlessly at -50%
  const marqueeItems = [...collaborators, ...collaborators]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {marqueeItems.map((name, i) => (
          <span className="marquee-item" key={`${name}-${i}`}>{name}</span>
        ))}
      </div>
    </div>
  )
}