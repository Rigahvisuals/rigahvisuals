import { useState } from 'react'

// This form posts to Formspree (https://formspree.io) — a free service that
// forwards form submissions straight to your email with zero backend code.
// To activate it:
//   1. Sign up at formspree.io (free tier is plenty for a portfolio site)
//   2. Create a form, copy the endpoint it gives you
//   3. Replace FORM_ENDPOINT below with your real endpoint
// Until you do that, submissions will fail gracefully with an error message
// instead of silently pretending to work.
const FORM_ENDPOINT = 'https://formspree.io/f/xyezzyyd'

const initialState = { name: '', email: '', projectType: 'photography', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: null }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'That email address looks incomplete.'
    }
    if (!values.message.trim()) next.message = 'Tell me a little about the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setValues(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-success">
        <h3>Message sent.</h3>
        <p>Thanks for reaching out. We'll get back to you within a couple of days.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={update('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={update('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="projectType">Project type</label>
        <select id="projectType" name="projectType" value={values.projectType} onChange={update('projectType')}>
          <option value="photography">Photography</option>
          <option value="film">Film</option>
          <option value="both">Both</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="form-note form-note-error">
          {FORM_ENDPOINT.includes('YOUR_FORM_ID')
            ? 'This form isn\'t connected yet — set FORM_ENDPOINT in src/components/ContactForm.jsx to your Formspree endpoint.'
            : 'Something went wrong sending that — please try again, or email directly instead.'}
        </p>
      )}
    </form>
  )
}
