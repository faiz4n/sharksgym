import AboutCarousel from './AboutCarousel';

export default function About() {
  return (
    <section className="sg-section" id="about">
      <div className="sg-about-grid">
        <div className="sg-about-text reveal">
          <div className="sg-section-label">About Sharks Gym</div>
          <h2 className="sg-section-heading">
            Train Hard.<br />Live Strong.
          </h2>
          <p>
            Tucked along Panchkuian Road near RamaKrishna Ashram Marg metro, Sharks Gym
            is one of Central Delhi&apos;s most dedicated training spaces — equipped with
            best-in-class biomechanics machines and a team that actually cares about your
            progress.
          </p>
          <p>
            Whether you&apos;re losing weight, building strength, or just starting out — we
            create a focused, hygienic environment where everyone can thrive.
          </p>
          <a
            href="https://maps.google.com/maps?cid=14341203552578795686"
            target="_blank"
            rel="noopener noreferrer"
            className="sg-btn-primary"
            style={{ marginTop: '12px', display: 'inline-flex', textDecoration: 'none' }}
          >
            Get Directions ›
          </a>
        </div>

        <div className="sg-about-image reveal reveal-delay-2">
          <AboutCarousel />
        </div>
      </div>
    </section>
  );
}
