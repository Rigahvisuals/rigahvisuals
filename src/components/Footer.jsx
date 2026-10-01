import { useState } from 'react'
import { Link } from 'react-router-dom'
import { studio } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

const [subscribeStatus, setSubscribeStatus] = useState('idle') // idle | submitting | success | error

const handleSubscribe = async (e) => {
  e.preventDefault()
  setSubscribeStatus('submitting')
  try {
    const res = await fetch('https://formspree.io/f/xyezzyyd', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.target),
    })
    if (res.ok) {
      setSubscribeStatus('success')
      e.target.reset()
    } else {
      setSubscribeStatus('error')
    }
  } catch {
    setSubscribeStatus('error')
  }
}

  return (
    <footer className="footer-expanded">
      <div className="wrap-full">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand">{studio.name}</Link>
            <p>{studio.location}</p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${studio.email}`}>{studio.email}</a></li>
              <li><a href={`tel:${studio.phone}`}>{studio.phone}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li><a href={studio.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={studio.tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href={studio.pinterestUrl} target="_blank" rel="noopener noreferrer">Pinterest</a></li>
              <li><a href={studio.youtubeUrl} target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href={studio.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Be the first to know about new work and releases.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input type="email" name="email" placeholder="Your email" required aria-label="Email address" />
              <button type="submit">Sign up</button>
            </form>
            {subscribeStatus === 'success' && <p className="newsletter-note">Thanks. you're on the list.</p>}
{subscribeStatus === 'error' && <p className="newsletter-note">Something went wrong ,try again.</p>}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} {studio.name}. All rights reserved.</p>
          <nav>
            <Link to="/photography">Portfolio</Link>
            <Link to="/films">Films</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
