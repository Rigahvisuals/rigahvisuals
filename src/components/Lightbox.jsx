import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function toEmbedUrl(url) {
  if (!url) return null
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
      let id = u.searchParams.get('v')
      if (!id && u.hostname.includes('youtu.be')) id = u.pathname.slice(1)
      if (!id) return null
      // youtube-nocookie.com skips YouTube's tracking/analytics bundle,
      // which is what most ad blockers target — far less likely to be blocked.
      return `https://www.youtube-nocookie.com/embed/${id}`
    }
    if (u.hostname.includes('vimeo.com')) {
      const id = u.pathname.split('/').filter(Boolean)[0]
      if (!id) return null
      return `https://player.vimeo.com/video/${id}`
    }
  } catch {
    return null
  }
  return null
}

/**
 * Cinematic full-screen lightbox. Supports two calling styles:
 *
 * 1. Carousel mode (Films, Reels) — pass a list with prev/next nav:
 *    <Lightbox open items={films} index={i} onClose={..} onPrev={..} onNext={..} />
 *
 * 2. Single-item mode (Photography images, or any one-off) — pass the
 *    item directly, no list needed:
 *    <Lightbox open title="..." image="..." onClose={..} />
 *    <Lightbox open title="..." videoFile="..." onClose={..} />
 *    <Lightbox open title="..." videoUrl="..." onClose={..} />
 */
export default function Lightbox({
  open,
  onClose,
  onPrev,
  onNext,
  items,
  index = 0,
  // legacy single-item props:
  title,
  image,
  videoFile,
  videoUrl,
}) {
  const frameRef = useRef(null)

  const usingList = Array.isArray(items) && items.length > 0
  const list = usingList ? items : [{ title, image, videoFile, url: videoUrl }]
  const activeIndex = usingList ? index : 0
  const item = list[activeIndex]

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, onPrev, onNext])

  if (!open || !item) return null

  const embedUrl = item.videoFile ? null : toEmbedUrl(item.url)
  const showNav = usingList && list.length > 1 && onPrev && onNext

  const handleExpand = () => {
    const el = frameRef.current
    if (!el) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      el.requestFullscreen?.()
    }
  }

  return createPortal(
    <div className="cine-overlay" onClick={onClose}>
      <button className="cine-expand" onClick={(e) => { e.stopPropagation(); handleExpand() }} aria-label="Fullscreen">
        ⤢
      </button>
      <button className="cine-close" onClick={onClose} aria-label="Close">✕</button>

      {showNav && (
        <button className="cine-nav cine-prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous">
          ‹
        </button>
      )}

      <div className="cine-stage" onClick={(e) => e.stopPropagation()}>
        <div className="cine-frame" ref={frameRef}>
          {item.videoFile && (
            <video className="cine-video" src={item.videoFile} controls autoPlay playsInline />
          )}

          {!item.videoFile && embedUrl && (
            <iframe
              className="cine-video"
              src={embedUrl}
              title={item.title || 'Video'}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}

          {!item.videoFile && !embedUrl && item.url && (
            <div className="cine-fallback">
              <p>This video can't be embedded directly.</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Watch on the original site
              </a>
            </div>
          )}

          {!item.videoFile && !item.url && item.image && (
            <img className="cine-video" src={item.image} alt={item.title || ''} style={{ objectFit: 'contain' }} />
          )}

          {!item.videoFile && !item.url && !item.image && (
            <div className="cine-fallback">
              <p>The video for this project isn't hosted online yet.</p>
            </div>
          )}
        </div>

        {item.title && (
          <div className="cine-caption">
            <p className="cine-title">{item.title}</p>
            {item.meta && <p className="cine-meta">{item.meta}</p>}
          </div>
        )}
      </div>

      {showNav && (
        <button className="cine-nav cine-next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next">
          ›
        </button>
      )}
    </div>,
    document.body
  )
}