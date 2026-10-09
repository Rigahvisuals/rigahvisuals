import { useState, useMemo } from 'react'
import Lightbox from '../components/Lightbox'
import BeforeAfter from '../components/BeforeAfter'
import { photography, categories, edits } from '../data/content'
import Marquee from '../components/Marquee'

const PAGE_SIZE = 12

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState(null) // null = showing album covers
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [openImage, setOpenImage] = useState(null)

  // One album tile per category that actually has at least one photo —
  // cover image is simply that category's first photo.
  const albums = useMemo(() => {
    return categories
      .map((cat) => {
        const photos = photography.filter((p) => p.category === cat.id)
        return photos.length ? { ...cat, count: photos.length, cover: photos[0].image } : null
      })
      .filter(Boolean)
  }, [])

  const categoryPhotos = useMemo(
    () => (selectedCategory ? photography.filter((p) => p.category === selectedCategory) : []),
    [selectedCategory]
  )

  const visiblePhotos = categoryPhotos.slice(0, visibleCount)
  const activeAlbum = albums.find((a) => a.id === selectedCategory)
  const remaining = categoryPhotos.length - visibleCount

  const openAlbum = (id) => {
    setSelectedCategory(id)
    setVisibleCount(PAGE_SIZE)
  }

  const backToAlbums = () => setSelectedCategory(null)

  return (
    <>
      <header className="hero" style={{ minHeight: '56vh', paddingTop: 100 }}>
        <div className="wrap-full">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>Stills that hold their frame.</h1>
          <p className="hero-sub">
            Weddings, corporate, events, real-estate and automotive work based real projects from the field.
          </p>
        </div>
      </header>
      <Marquee />
      <section>
        <div className="wrap-full">
          {!selectedCategory ? (
            <>
              {/* Note: no "reveal"/"reveal-stagger" classes on this view —
                  those only animate content present when the page first
                  loads. Since this view can also reappear after clicking
                  "All albums", using scroll-fade classes here caused it to
                  get stuck invisible (the animation trigger only scans
                  once per page load, not on every click). This content
                  shows immediately instead, which is the right call for
                  anything that appears in response to a click anyway. */}
              <div className="section-head">
                <h2>Albums</h2>
                <p>Choose a category to see the full set.</p>
              </div>
              <div className="album-grid">
                {albums.map((album) => (
                  <button
                    type="button"
                    className="album-card"
                    key={album.id}
                    onClick={() => openAlbum(album.id)}
                  >
                    <div className="album-cover">
                      <img src={album.cover} alt={album.label} loading="lazy" />
                      <div className="album-overlay">
                        <h3>{album.label}</h3>
                        <span>{album.count} photo{album.count !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button type="button" className="album-back" onClick={backToAlbums}>
                ← All albums
              </button>
              <div className="section-head">
                <h2>{activeAlbum?.label}</h2>
                <p>
                  {categoryPhotos.length} photo{categoryPhotos.length !== 1 ? 's' : ''} in this
                  album.
                </p>
              </div>

              <div className="masonry-gallery">
                {visiblePhotos.map((item) => (
                  <div className="masonry-item" key={item.id} onClick={() => setOpenImage(item)}>
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="masonry-caption">
                      <h3>{item.title}</h3>
                      <span>{item.meta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {remaining > 0 && (
                <div className="load-more-row">
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                  >
                    Load more ({remaining} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Before/after only shows on the main album-overview screen, not
          while you're inside an individual album looking at its photos. */}
      {!selectedCategory && (
        <section>
          <div className="wrap-full">
            {/* No reveal/reveal-stagger here either — this section
                unmounts and remounts every time you navigate back from an
                album, which would hit the exact same stuck-invisible issue
                described above. Shows immediately instead. */}
            <div className="section-head">
              <h2>Edits: before &amp; after</h2>
              <p>Drag the slider to compare the raw capture against the final grade.</p>
            </div>
            <div className="edits-grid">
              {edits.map((e) => (
                <BeforeAfter key={e.id} before={e.before} after={e.after} caption={e.caption} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Lightbox
        open={!!openImage}
        onClose={() => setOpenImage(null)}
        title={openImage?.title}
        image={openImage?.image}
      />
    </>
  )
}