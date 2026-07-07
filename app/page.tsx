import business from '../data/business.json';

const address = '906 3rd Ave, New York, NY 10022';
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const website = business.website;

const quickFacts = [
  { label: 'Neighborhood', value: 'Midtown Manhattan' },
  { label: 'Style', value: 'Fast food restaurant' },
  { label: 'Google rating', value: '4.8 from 1,433 reviews' },
];

const serviceNotes = [
  'Burgers and quick-service comfort food near 3rd Avenue.',
  'A straightforward stop for lunch, dinner, or a Midtown bite between plans.',
  'Easy next steps: call the restaurant or use the official site for current ordering details.',
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Holy Burger Midtown home">
            <span className="brand-mark">HB</span>
            <span>{business.name}</span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#visit">Visit</a>
            <a href="#details">Details</a>
            <a href={phoneHref}>Call</a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Fast food in Midtown Manhattan</p>
            <h1 id="hero-title">Holy Burger Midtown, right on 3rd Ave.</h1>
            <p className="hero-lede">
              A focused Midtown stop for burgers and quick-service food near East 54th Street,
              with direct phone contact and official ordering information available online.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={website}>
                Visit official site
              </a>
              <a className="button secondary" href={phoneHref}>
                Call {business.phone}
              </a>
            </div>
          </div>

          <div className="burger-panel" aria-label="Holy Burger Midtown quick facts">
            <div className="plate">
              <span className="bun top" />
              <span className="lettuce" />
              <span className="patty" />
              <span className="cheese" />
              <span className="bun bottom" />
            </div>
            <div className="rating-card">
              <span className="rating-number">4.8</span>
              <span>Google rating</span>
              <small>1,433 reviews noted in business data</small>
            </div>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="Business facts">
        {quickFacts.map((fact) => (
          <article key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </article>
        ))}
      </section>

      <section className="section split" id="details">
        <div>
          <p className="eyebrow">What to expect</p>
          <h2>Built for a quick Midtown meal.</h2>
        </div>
        <div className="note-list">
          {serviceNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>

      <section className="section visit" id="visit">
        <div className="visit-copy">
          <p className="eyebrow">Visit</p>
          <h2>Find Holy Burger Midtown in Manhattan.</h2>
          <address>{address}</address>
        </div>
        <div className="visit-actions">
          <a className="button primary" href={website}>
            Current menu and ordering
          </a>
          <a
            className="button secondary"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${business.name} ${address}`,
            )}`}
          >
            Open map
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>{business.name}</span>
        <a href={phoneHref}>{business.phone}</a>
        <a href={website}>holycow.nyc</a>
      </footer>

      <div className="mobile-cta" aria-label="Quick actions">
        <a href={website}>Order</a>
        <a href={phoneHref}>Call</a>
      </div>
    </main>
  );
}
