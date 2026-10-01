import ContactForm from '../components/ContactForm'
import { studio, contactChecklist } from '../data/content'

export default function Contact() {
  return (
    <>
      <header className="hero" style={{ minHeight: '40vh', paddingTop: 100 }}>
        <div className="wrap-full">
          <p className="hero-eyebrow">Contact</p>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>Let's talk about the work.</h1>
        </div>
      </header>

      <section>
        <div className="wrap-full contact-block reveal">
          <div>
            <h2 style={{ marginBottom: 24 }}>Send a message</h2>
            <ContactForm />
          </div>
          <div className="info-card">
            <h3>Find the studio</h3>
            <p>{studio.location}. Typical reply time is 1–2 business days.</p>
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
                <a href={`https://${studio.website}`} target="_blank" rel="noopener noreferrer">
                  Website<span>{studio.website}</span>
                </a>
              </li>
              <li>
                <a href={studio.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram<span>{studio.instagram}</span>
                </a>
              </li>
              <li>
                <a href={studio.tiktokUrl} target="_blank" rel="noopener noreferrer">
                  TikTok<span>{studio.tiktok}</span>
                </a>
              </li>
              <li>
                <a href={studio.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  YouTube<span>{studio.youtube}</span>
                </a>
              </li>
              <li>
                <a href={studio.pinterestUrl} target="_blank" rel="noopener noreferrer">
                  Pinterest<span>{studio.pinterest}</span>
                </a>
              </li>
              <li>
                <a href={studio.facebookUrl} target="_blank" rel="noopener noreferrer">
                  Facebook<span>{studio.facebook}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: 'none' }}>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Before you write in</h2>
            <p>A quick note on what helps get things moving faster.</p>
          </div>
          <ul className="skills-list">
            {contactChecklist.map((c) => (
              <li key={c.item}>
                {c.item} <span>{c.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}