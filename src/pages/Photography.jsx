import { useState, useMemo } from 'react'
import FilterBar from '../components/FilterBar'
import Lightbox from '../components/Lightbox'
import BeforeAfter from '../components/BeforeAfter'
import { photography, photoCategories, edits } from '../data/content'
import Marquee from '../components/Marquee'

export default function Photography() {
  const [active, setActive] = useState('all')
  const [openImage, setOpenImage] = useState(null)

  const visible = useMemo(
    () => (active === 'all' ? photography : photography.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <header className="hero" style={{ minHeight: '56vh', paddingTop: 100 }}>
        <div className="wrap-full">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>Stills that hold their frame.</h1>
          <p className="hero-sub">
            Weddings, corporate, events, real-estate and automotive work. Real projects from the field.
          </p>
        </div>
      </header>

      <Marquee />

      <section>
        <div className="wrap-full">
          <FilterBar categories={photoCategories} active={active} onChange={setActive} />

          {/* Masonry grid with titles always visible underneath, not
              hidden behind a hover state. */}
          <div className="masonry-gallery reveal-stagger">
            {visible.map((item) => (
              <div className="masonry-item" key={item.id} onClick={() => setOpenImage(item)}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="masonry-caption">
                  <h3>{item.title}</h3>
                  <span>{item.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Edits: before &amp; after</h2>
            <p>Drag the slider to compare the raw capture against the final grade.</p>
          </div>
          <div className="edits-grid reveal-stagger">
            {edits.map((e) => (
              <BeforeAfter key={e.id} before={e.before} after={e.after} caption={e.caption} />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={!!openImage}
        onClose={() => setOpenImage(null)}
        title={openImage?.title}
        image={openImage?.image}
      />
    </>
  )
}
