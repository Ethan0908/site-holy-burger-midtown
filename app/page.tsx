import business from '../data/business.json';

const address = '906 3rd Ave, New York, NY 10022';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;

const highlights = [
  { label: 'Google rating', value: '4.8' },
  { label: 'Google reviews', value: '1,433' },
  { label: 'Midtown address', value: '906 3rd Ave' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Holy Burger Midtown home">
            <span className="brand-mark">HB</span>
            <span>
              <strong>{business.name}</strong>
              <small>Midtown Manhattan</small>
            </span>
          </a>
          <div className="nav-actions">
            <a href={phoneHref}>Call</a>
            <a href={business.website}>Order online</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Fast food on 3rd Ave</p>
            <h1 id="hero-title">A Midtown burger stop built for a quick, satisfying bite.</h1>
            <p className="lede">
              Holy Burger Midtown serves Manhattan from 906 3rd Ave, with online ordering
              and a phone line for the fastest next step.
            </p>
            <div className="cta-row" aria-label="Contact actions">
              <a className="button primary" href={business.website}>
                Order online
              </a>
              <a className="button secondary" href={mapUrl}>
                Get directions
              </a>
            </div>
            <p className="quick-contact">
              Prefer to call? <a href={phoneHref}>{business.phone}</a>
            </p>
          </div>

          <div className="counter-card" aria-label="Holy Burger Midtown quick facts">
            <div className="ticket">
              <span className="ticket-kicker">Midtown counter</span>
              <strong>906 3rd Ave</strong>
              <span>New York, NY 10022</span>
            </div>
            <div className="burger-plate" aria-hidden="true">
              <span className="bun top" />
              <span className="lettuce" />
              <span className="cheese" />
              <span className="patty" />
              <span className="bun bottom" />
            </div>
            <div className="status-strip">
              <span>Fast food</span>
              <span>Manhattan</span>
              <span>Call ahead</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Business highlights">
        {highlights.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="visit-section" aria-labelledby="visit-title">
        <div>
          <p className="eyebrow">Plan the stop</p>
          <h2 id="visit-title">Easy to find, easy to act on.</h2>
        </div>
        <div className="visit-grid">
          <article>
            <span className="step-number">01</span>
            <h3>Order before you go</h3>
            <p>
              Use the official site when you want the most direct online ordering path.
            </p>
            <a href={business.website}>Open holycow.nyc</a>
          </article>
          <article>
            <span className="step-number">02</span>
            <h3>Head to Midtown</h3>
            <p>
              Find Holy Burger Midtown at 906 3rd Ave in Manhattan, near the center of the
              workday lunch rush.
            </p>
            <a href={mapUrl}>Map the route</a>
          </article>
          <article>
            <span className="step-number">03</span>
            <h3>Call the counter</h3>
            <p>
              For a quick question before visiting, call the restaurant directly.
            </p>
            <a href={phoneHref}>{business.phone}</a>
          </article>
        </div>
      </section>

      <section className="split-section" aria-labelledby="why-title">
        <div className="split-copy">
          <p className="eyebrow">Why this page is simple</p>
          <h2 id="why-title">Most visitors need three things: food, location, and a clear next step.</h2>
        </div>
        <div className="detail-panel">
          <p>
            Holy Burger Midtown is listed as a fast food restaurant in Manhattan with a
            4.8 Google rating from 1,433 reviews. This page keeps the path short: order,
            call, or get directions.
          </p>
          <div className="mini-list" aria-label="Available business details">
            <span>Fast food restaurant</span>
            <span>Manhattan service area</span>
            <span>Official website available</span>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <p className="eyebrow">Holy Burger Midtown</p>
        <h2 id="final-title">Ready for a burger on 3rd Ave?</h2>
        <div className="cta-row centered">
          <a className="button primary" href={business.website}>
            Order online
          </a>
          <a className="button secondary light" href={phoneHref}>
            Call {business.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
