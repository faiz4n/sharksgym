'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';

const reviews = [
  {
    name: 'Parth Sharma',
    date: '21 May 2026',
    text: 'Great equipments with very supportive trainers highly recommended.',
    stars: 5,
  },
  {
    name: 'Meenu Ehsaas',
    date: '19 May 2026',
    text: 'The facility is exceptionally well-maintained, impeccably neat and hygienic, and offers a warm and welcoming atmosphere. The trainers are courteous, highly knowledgeable, and demonstrate outstanding professionalism in their approach.',
    stars: 5,
  },
  {
    name: 'Sandeep Kumar',
    date: '19 May 2026',
    text: 'Place is clean and hygienic. Machines are well-maintained. Trainers are helpful and available on the floor whenever needed. The overall vibe is also good.',
    stars: 5,
  },
];

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.56 1 24 1 14.82 1 7.02 6.7 3.88 14.7l7.12 5.53C12.74 14.08 17.96 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.71c-.55 2.99-2.2 5.52-4.67 7.22l7.19 5.59C43.34 37.6 46.5 31.5 46.5 24.5z"/>
      <path fill="#FBBC05" d="M11 28.23A14.56 14.56 0 0 1 9.5 24c0-1.48.26-2.9.71-4.23L3.09 14.2A23.44 23.44 0 0 0 .5 24c0 3.77.9 7.34 2.49 10.49l8.01-6.26z"/>
      <path fill="#34A853" d="M24 47c5.56 0 10.23-1.84 13.63-4.99l-7.19-5.59c-1.84 1.24-4.2 1.97-6.44 1.97-6.04 0-11.26-4.58-13-10.73l-8.01 6.26C7.02 41.3 14.82 47 24 47z"/>
    </svg>
  );
}

function Stars({ count }) {
  return (
    <div className="sg-review-stars">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="var(--red)" color="var(--red)" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="sg-reviews-section">
      <div className="sg-section-label reveal">Happy Members</div>
      <h2 className="sg-section-heading reveal">What People Say</h2>

      {/* Desktop: all 3 visible */}
      <div className="sg-reviews-grid reveal">
        {reviews.map((r, i) => (
          <div key={i} className="sg-review-card">
            <div className="sg-review-header">
              <span className="sg-review-avatar">
                <UserCircle size={40} strokeWidth={1.2} color="var(--gray)" />
              </span>
              <div>
                <div className="sg-review-name">{r.name}</div>
                <div className="sg-review-date">{r.date}</div>
              </div>
            </div>
            <p className="sg-review-text">{r.text}</p>
            <div className="sg-review-footer">
              <Stars count={r.stars} />
              <GoogleIcon />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: single-card carousel */}
      <div className="sg-reviews-mobile reveal">
        <button className="sg-reviews-arrow sg-reviews-arrow-prev" onClick={prev} aria-label="Previous review">
          <ChevronLeft size={20} />
        </button>
        <div className="sg-review-card">
          <div className="sg-review-header">
            <span className="sg-review-avatar">
              <UserCircle size={40} strokeWidth={1.2} color="var(--gray)" />
            </span>
            <div>
              <div className="sg-review-name">{reviews[current].name}</div>
              <div className="sg-review-date">{reviews[current].date}</div>
            </div>
          </div>
          <p className="sg-review-text">{reviews[current].text}</p>
          <div className="sg-review-footer">
            <Stars count={reviews[current].stars} />
            <GoogleIcon />
          </div>
        </div>
        <button className="sg-reviews-arrow sg-reviews-arrow-next" onClick={next} aria-label="Next review">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* CTA */}
      <div className="sg-reviews-cta reveal">
        <a
          href="https://maps.google.com/maps?cid=14341203552578795686"
          target="_blank"
          rel="noopener noreferrer"
          className="sg-reviews-leave-btn"
        >
          <Star size={15} fill="currentColor" color="currentColor" />
          Leave a review
        </a>
      </div>
    </section>
  );
}
