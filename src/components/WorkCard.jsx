import { Link } from 'react-router-dom'

/**
 * Renders one thumbnail card.
 * - onClick: if provided, the thumbnail becomes a button that fires this
 *   (used to open the video/image lightbox) instead of navigating.
 * - external: renders a plain <a target="_blank"> link.
 * - default: renders an internal React Router <Link>.
 */
export default function WorkCard({ title, meta, image, href, external, showPlay, onClick }) {
  const content = (
    <>
      <img className="ph-img" src={image} alt={title} loading="lazy" />
      {showPlay && (
        <div className="play">
          <div className="play-icon">▶</div>
        </div>
      )}
    </>
  )

  return (
    <article className="reel-card">
      {onClick ? (
        <button type="button" className="reel-thumb reel-thumb-button" onClick={onClick}>
          {content}
        </button>
      ) : external ? (
        <a className="reel-thumb" href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link className="reel-thumb" to={href}>
          {content}
        </Link>
      )}
      <div className="reel-meta">
        <h3>{title}</h3>
        {meta && <span>{meta}</span>}
      </div>
    </article>
  )
}
