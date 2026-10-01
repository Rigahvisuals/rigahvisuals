import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Photography from './pages/Photography'
import Films from './pages/Films'
import About from './pages/About'
import Contact from './pages/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'
import Shop from './pages/Shop'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  // Subtle fade-in on every route change
  useEffect(() => {
    setVisible(false)
    const t = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(t)
  }, [pathname])

  // Re-scan for .reveal elements whenever the route changes
  useScrollReveal(pathname)

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main className={`page-transition ${visible ? 'page-visible' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/films" element={<Films />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
