import { Link } from 'react-router-dom'
import { studio, whyChooseUs, deliverables, process, team } from '../data/content'
import Marquee from '../components/Marquee'

export default function About() {
  return (
    <>
      <header className="hero" style={{ minHeight: '50vh', paddingTop: 100 }}>
        <div className="wrap-full">
          <p className="hero-eyebrow">About</p>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>The studio behind the camera.</h1>
        </div>
      </header>

      <Marquee />

      <section>
        <div className="wrap-full split reveal">
          <div className="ph-block">
            <img src="/images/about-grid.jpg" alt={`${studio.name} portfolio grid`} loading="lazy" />
          </div>
          <div className="copy">
            <h2>{studio.name}</h2>
            <p>{studio.intro}</p>
            <p>{studio.aboutStudio}</p>
            <p>{studio.location}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap-full split">
          <div className="copy">
            <h2>Vision</h2>
            <p>{studio.vision}</p>
          </div>
          <div className="copy">
            <h2>Mission</h2>
            <p>{studio.mission}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>The team</h2>
            <p>The people behind the camera.</p>
          </div>
          <div className="team-grid reveal-stagger">
            {team.map((member) => (
              <div className="team-card" key={member.id}>
                <img src={member.image} alt={member.placeholder ? '' : member.name} loading="lazy" />
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.bio}</p>
                {member.placeholder && <span className="team-placeholder-tag">Placeholder — edit in content.js</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Why choose {studio.name}</h2>
          </div>
          <ul className="skills-list">
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Deliverables</h2>
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
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Our process</h2>
          </div>
          <ul className="skills-list">
            {process.map((p) => (
              <li key={p.step}>
                {p.step} <span>{p.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap-full contact-block">
          <div>
            <h2>Let's work together</h2>
            <p className="hero-sub" style={{ marginTop: 0, fontStyle: 'italic' }}>
              "{studio.closingQuote}"
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}