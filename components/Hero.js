export default function Hero() {
  return (
    <section className="sg-hero">
      <div className="sg-hero-bg" />
      <div className="sg-hero-overlay" />
      <div className="sg-hero-red-line" />

      <div className="sg-hero-content">
        <div className="sg-hero-eyebrow">New Delhi&apos;s Premier Gym</div>
        <h1 className="sg-hero-heading">
          PUSH<br />
          YOUR<br />
          <em>LIMITS</em>
        </h1>
        <p className="sg-hero-sub">
          State-of-the-art biomechanics equipment. Expert personal trainers.
          A clean, focused environment built for real results.
        </p>
        <div className="sg-hero-actions">
          <a href="#plans" className="sg-btn-primary" style={{ textDecoration: 'none' }}>Start Training ›</a>
          <a href="#services" className="sg-btn-outline" style={{ textDecoration: 'none' }}>Explore Services</a>
        </div>
      </div>

      {/* On desktop: absolutely positioned. On mobile: in-flow via CSS override */}
      <div className="sg-hero-stats">
        <div className="sg-stat">
          <div className="sg-stat-num">17<span>+</span></div>
          <div className="sg-stat-label">Hours Open</div>
        </div>
        <div className="sg-stat">
          <div className="sg-stat-num">6<span>AM</span></div>
          <div className="sg-stat-label">Opens Daily</div>
        </div>
        <div className="sg-stat">
          <div className="sg-stat-num">100<span>%</span></div>
          <div className="sg-stat-label">Dedicated</div>
        </div>
      </div>

      <div className="sg-hero-scroll">
        <div className="sg-scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
