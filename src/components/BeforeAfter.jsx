import { useRef, useState, useCallback, useEffect } from 'react'

/**
 * Draggable before/after comparison. Drag the handle, or click/tap
 * anywhere on the image to move it there.
 */
export default function BeforeAfter({ before, after, beforeLabel = 'Before', afterLabel = 'After', caption }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50) // percent
  const [frameWidth, setFrameWidth] = useState(0) // px — keeps the clipped image from squashing
  const draggingRef = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => setFrameWidth(el.getBoundingClientRect().width)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el || clientX == null) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e) => {
    draggingRef.current = true
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX)
  }

  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX)
  }

  const stopDragging = () => {
    draggingRef.current = false
  }

  return (
    <div className="before-after">
      <div
        className="before-after-frame"
        ref={containerRef}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={stopDragging}
      >
        <img className="ba-img ba-after" src={after} alt={afterLabel} draggable={false} />

        <div className="ba-before-wrap" style={{ width: `${position}%` }}>
          <img
            className="ba-img ba-before"
            src={before}
            alt={beforeLabel}
            draggable={false}
            style={{ width: frameWidth ? `${frameWidth}px` : '100%' }}
          />
        </div>

        <div className="ba-divider" style={{ left: `${position}%` }}>
          <div className="ba-handle">
            <span>◂</span>
            <span>▸</span>
          </div>
        </div>

        <span className="ba-tag ba-tag-before">{beforeLabel}</span>
        <span className="ba-tag ba-tag-after">{afterLabel}</span>
      </div>
      {caption && <p className="ba-caption">{caption}</p>}
    </div>
  )
}
