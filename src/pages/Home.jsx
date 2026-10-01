import { Link } from 'react-router-dom'
import WorkCard from '../components/WorkCard'
import { studio, featuredWork, categories, collaborators } from '../data/content'
import Marquee from '../components/Marquee'

export default function Home() {
  // duplicated once so the marquee can loop seamlessly at -50%
  const marqueeItems = [...collaborators, ...collaborators]

  return (
    <>
      <header className="hero-full">
        <img className="hero-full-bg" src="/images/hero-real.jpg" alt="" />
        <div className="hero-full-inner">
          <h1 className="hero-full-name">{studio.name.toUpperCase()}</h1>
          <p className="hero-full-role">{studio.role.toUpperCase()}</p>
          <a href="#work" className="scroll-cta">
            <span className="arrow">↓</span>
            View Work
          </a>
        </div>
      </header>

<Marquee />

      <section id="work">
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Featured Work</h2>
            <p>{studio.intro}</p>
          </div>
          <div className="work-grid reveal-stagger">
            {featuredWork.map((item) => (
              <WorkCard
                key={item.id}
                title={item.title}
                meta={item.meta}
                image={item.image}
                href={item.href}
                showPlay={item.type === 'film'}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap-full split reveal">
          <div className="ph-block">
            <img src="/images/about-visual.jpg" alt="Rigahvisuals at work" loading="lazy" />
          </div>
          <div className="copy">
            <h2>Behind the work</h2>
            <p>{studio.founderBio}</p>
            <p>{studio.location}</p>
            <Link to="/about" className="btn btn-ghost">More about the studio</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>What we do</h2>
            <p>Five core service categories, from love stories to launch films.</p>
          </div>
          <div className="categories-grid reveal-stagger">
            {categories.map((c) => (
              <div className="stat" key={c.id}>
                <b style={{ fontSize: 20 }}>{c.label}</b>
                <span>{c.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap-full contact-block reveal">
          <div>
            <h2>Have a project in mind?</h2>
            <p className="hero-sub" style={{ marginTop: 0 }}>
              Tell us about it, We read every message and reply within a couple of days.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
              Get in touch
            </Link>
          </div>
          <div className="info-card">
            <h3>Direct inquiries</h3>
            <p>For bookings, collaborations, and press.</p>
            <ul className="social-list">
              <li>
                <a href={`mailto:${studio.email}`}>
                  Email<span>{studio.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${studio.phone}`}>
                  Phone<span>{studio.phone}</span>
                </a>
              </li>
              <li>
                <a href={studio.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp<span>{studio.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={studio.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram<span>{studio.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
