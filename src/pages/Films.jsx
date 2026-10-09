import { useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import { films, reels, deliverables, testimonials } from '../data/content'
import Marquee from '../components/Marquee'

export default function Films() {
  const [active, setActive] = useState(null)

  // Newest first
  const sortedReels = [...reels].sort((a, b) => new Date(b.date) - new Date(a.date))
  // Doubled so the auto-scroll strip can loop seamlessly at -50%
  const reelStrip = [...sortedReels, ...sortedReels]

  const [activeReelIndex, setActiveReelIndex] = useState(null)
  const openReelAt = (i) => setActiveReelIndex(i)
  const closeReel = () => setActiveReelIndex(null)
  const prevReel = () =>
    setActiveReelIndex((i) => (i - 1 + sortedReels.length) % sortedReels.length)
  const nextReel = () => setActiveReelIndex((i) => (i + 1) % sortedReels.length)

  return (
    <>
      <header className="hero" style={{ minHeight: '50vh', paddingTop: 100 }}>
        <div className="wrap">
          <p className="hero-eyebrow">Films</p>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>Motion with a reason to move.</h1>
          <p className="hero-sub">
            Real projects — click any film below to watch right here.
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

            {film.openExternally && film.url ? (
              <a className="film-media" href={film.url} target="_blank" rel="noopener noreferrer">
                <img src={film.image} alt={film.title} loading="lazy" />
                <div className="play">
                  <div className="play-icon">▶</div>
                </div>
              </a>
            ) : (
              <button type="button" className="film-media" onClick={() => setActive(film)}>
                <img src={film.image} alt={film.title} loading="lazy" />
                <div className="play">
                  <div className="play-icon">▶</div>
                </div>
              </button>
            )}

            <div className="film-meta-row">
              <span>{film.meta}</span>
              <span>
                {film.videoFile || film.url
                  ? film.openExternally
                    ? 'Opens on YouTube/Vimeo ↗'
                    : 'Click to play'
                  : 'Video coming soon'}
              </span>
            </div>
            {film.description && <p className="film-description">{film.description}</p>}
          </div>
        </section>
      ))}

      {sortedReels.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head reveal">
              <h2>Reels</h2>
              <p> click to watch.</p>
            </div>
          </div>
          <div className="reels-viewport">
            <div className="reels-track">
              {reelStrip.map((reel, i) => (
                <button
                  type="button"
                  className="reel-tile"
                  key={`${reel.id}-${i}`}
                  onClick={() => openReelAt(i % sortedReels.length)}
                >
                  <img src={reel.image} alt={reel.title} loading="lazy" />
                  <p className="reel-tile-title">{reel.title}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What every film includes</h2>
            <p>The baseline on every project, regardless of size.</p>
          </div>
          <div className="capability-grid reveal-stagger">
            {deliverables.map((d) => (
              <div className="capability" key={d.label}>
                <span className="capability-icon">◆</span>
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
            <p>Add real feedback from real clients here before publishing.</p>
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
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
        videoFile={active?.videoFile}
        videoUrl={active?.url}
      />

      <Lightbox
        open={activeReelIndex !== null}
        items={sortedReels}
        index={activeReelIndex ?? 0}
        onClose={closeReel}
        onPrev={prevReel}
        onNext={nextReel}
      />
    </>
  )
}