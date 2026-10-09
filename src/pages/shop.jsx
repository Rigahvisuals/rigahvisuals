import { prints, presets, whatsappOrderLink } from '../data/content'

function ShopCard({ item }) {
  return (
    <article className="shop-card">
      <div className="shop-card-media">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="shop-card-body">
        <div className="shop-card-top">
          <h3>{item.title}</h3>
          <span className="shop-card-price">{item.price}</span>
        </div>
        <p className="shop-card-detail">{item.sizes || item.format}</p>
        <p>{item.description}</p>
        <a
          href={whatsappOrderLink(item.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Order via WhatsApp
        </a>
      </div>
    </article>
  )
}

export default function Shop() {
  return (
    <>
      <header className="hero" style={{ minHeight: '44vh', paddingTop: 100 }}>
        <div className="wrap-full">
          <p className="hero-eyebrow">Shop</p>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>Prints &amp; presets.</h1>
          <p className="hero-sub">
            Portrait prints from personal and client work, and the editing presets used across
            recent projects. Message on WhatsApp to order  payment by M-Pesa or bank transfer,
            details shared once you reach out.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Portrait prints</h2>
            <p>Printed on demand, on premium matte paper.</p>
          </div>
          <div className="shop-grid reveal-stagger">
            {prints.map((item) => (
              <ShopCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderBottom: 'none' }}>
        <div className="wrap-full">
          <div className="section-head reveal">
            <h2>Preset packs</h2>
            <p>Lightroom presets built from real project grades.</p>
          </div>
          <div className="shop-grid reveal-stagger">
            {presets.map((item) => (
              <ShopCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}