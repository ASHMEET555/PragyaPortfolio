export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section parallax-bg" id="hero">
      <div className="hero-overlay" />
      <div className="hero-branch" aria-hidden="true" />
      <div className="hero-content reveal">
        <h1>Pragya Singh</h1>
        <h2>Talent Acquisition</h2>
        <p className="hero-tagline">Building Positive Work Culture &amp; Empowering People</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('about')}>
            View Portfolio
          </button>
          <button className="btn btn-soft" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
