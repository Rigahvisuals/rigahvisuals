import { useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import { films, deliverables, testimonials } from '../data/content'
import Marquee from '../components/Marquee'

export default function Films() {
  const [activeIndex, setActiveIndex] = useState(null)

  const openAt = (i) => setActiveIndex(i)
  const close = () => setActiveIndex(null)
  const prev = () => setActiveIndex((i) => (i - 1 + films.length) % films.length)
  const next = () => setActiveIndex((i) => (i + 1) % films.length)

  return (
    <>
      <header className="hero" style={{ minHeight: '50vh', paddingTop: 100 }}>
        <div className="wrap">
          <p className="hero-eyebrow">Films</p>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>Motion with a reason to move.</h1>
          <p className="hero-sub">
            Real projects. Click any film below to watch right here.
          </p>
        </div>
      </header>

      <Marquee />

      {/* One full block per film: tag, title, big video — mirrors the
          "LUT // 01" reveal pattern from the reference site. Clicking
          opens the video inline in a modal instead of leaving the site. */}
      {films.map((film, i) => (
        <section key={film.id} className="film-block reveal">
          <div className="wrap">
            <p className="film-tag">FILM // {String(i + 1).padStart(2, '0')}</p>
            <h2>{film.title}</h2>

            <button type="button" className="film-media" onClick={() => openAt(i)}>
              <img src={film.image} alt={film.title} loading="lazy" />
              <div className="play">
                <div className="play-icon">▶</div>
              </div>
            </button>

            <div className="film-meta-row">
              <span>{film.meta}</span>
              <span>{film.videoFile || film.url ? 'Click to play' : 'Video coming soon'}</span>
            </div>
            {film.description && <p className="film-description">{film.description}</p>}
          </div>
        </section>
      ))}

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What every film includes</h2>
            <p>The baseline on every project, regardless of size.</p>
          </div>
          <div className="capability-grid reveal-stagger">
            {deliverables.map((d) => (
              <div className="capability" key={d.label}>
                <span className="capability-icon">✓</span>
                <h3>{d.label}</h3>
                <p>{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What clients say</h2>
            <p>Feedback from our clients.</p>
          </div>
          <div className="testimonial-grid reveal-stagger">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-quote">{t.quote}</p>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderBottom: 'none' }}>
        <div className="wrap contact-block">
          <div>
            <h2>Have a film in mind?</h2>
            <p className="hero-sub" style={{ marginTop: 0 }}>
              Brand film, documentary, or music video. Tell me about the project.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        open={activeIndex !== null}
        items={films}
        index={activeIndex ?? 0}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}