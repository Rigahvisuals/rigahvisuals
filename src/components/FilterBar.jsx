import { useState } from 'react'

/**
 * Filter chip row that collapses into a toggle button below 680px.
 * `categories` is an array of strings; `active` / `onChange` control selection.
 */
export default function FilterBar({ categories, active, onChange }) {
  const [open, setOpen] = useState(false)

  const label = active === 'all' ? 'All' : active.charAt(0).toUpperCase() + active.slice(1)

  const handleSelect = (cat) => {
    onChange(cat)
    setOpen(false)
  }

  return (
    <>
      <button
        className="filters-toggle"
        aria-expanded={open}
        aria-controls="filters-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="filters-toggle-label">Filter: {label}</span>
        <span className="filters-toggle-icon">▾</span>
      </button>

      <div className={`filters ${open ? 'open' : ''}`} id="filters-menu">
        <button
          className={`filter-chip ${active === 'all' ? 'active' : ''}`}
          onClick={() => handleSelect('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${active === cat ? 'active' : ''}`}
            onClick={() => handleSelect(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </>
  )
}
