'use client';

import { useEffect, useRef } from 'react';

export default function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="plans" className="sg-section sg-pricing-section reveal" ref={sectionRef}>
      <h2 className="sg-section-heading" style={{ textAlign: 'center' }}>MEMBERSHIP PLANS</h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--gray)', fontSize: '18px' }}>Choose the plan that fits your goals.</p>

      <div className="sg-pricing-grid">
        {/* 1 Month Plan */}
        <div className="sg-pricing-card">
          <h3 className="sg-plan-name">1 Month</h3>
          <div className="sg-plan-price">₹1,499</div>
          <ul className="sg-plan-features">
            <li>✓ Gym</li>
            <li>✓ Cardio</li>
            <li>✓ Locker</li>
          </ul>
          <a href="https://wa.me/917989932135?text=I'm%20interested%20in%20the%201%20Month%20Membership%20Plan" className="sg-btn-outline" target="_blank" rel="noopener noreferrer">Join Now</a>
        </div>

        {/* 3 Months Plan (Highlighted) */}
        <div className="sg-pricing-card highlighted">
          <div className="sg-plan-badge">Most Popular</div>
          <h3 className="sg-plan-name">3 Months <span className="star">⭐</span></h3>
          <div className="sg-plan-price">₹3,999</div>
          <ul className="sg-plan-features">
            <li>✓ Gym</li>
            <li>✓ Cardio</li>
            <li>✓ Locker</li>
            <li>✓ 1 PT Session</li>
          </ul>
          <a href="https://wa.me/917989932135?text=I'm%20interested%20in%20the%203%20Months%20Membership%20Plan" className="sg-btn-primary" target="_blank" rel="noopener noreferrer">Start Today</a>
        </div>

        {/* 1 Year Plan */}
        <div className="sg-pricing-card">
          <h3 className="sg-plan-name">1 Year</h3>
          <div className="sg-plan-price">₹9,999</div>
          <div className="sg-plan-save">Save 40%</div>
          <ul className="sg-plan-features">
            <li>✓ Gym</li>
            <li>✓ Cardio</li>
            <li>✓ Locker</li>
            <li>✓ Diet Consultation</li>
          </ul>
          <a href="https://wa.me/917989932135?text=I'm%20interested%20in%20the%201%20Year%20Membership%20Plan" className="sg-btn-outline" target="_blank" rel="noopener noreferrer">Book This Plan</a>
        </div>
      </div>
    </section>
  );
}
