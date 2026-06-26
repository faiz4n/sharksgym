'use client';
import { useState, useEffect, useCallback } from 'react';

const images = [
  '/caraousel/2026-03-13.jpg',
  '/caraousel/2026-03-13 (1).jpg',
  '/caraousel/2026-03-13 (2).jpg',
  '/caraousel/2026-03-13 (3).jpg',
  '/caraousel/2026-06-02.jpg',
  '/caraousel/2026-06-04.jpg',
  '/caraousel/2026-06-04 (1).jpg',
];

export default function AboutCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, goTo]);

  // Auto-advance every 3.5s
  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="sg-carousel">
      <div className="sg-carousel-track">
        {images.map((src, i) => (
          <div
            key={src}
            className={`sg-carousel-slide${i === current ? ' active' : ''}`}
            aria-hidden={i !== current}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Sharks Gym photo ${i + 1}`} draggable={false} />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button className="sg-carousel-btn sg-carousel-prev" onClick={prev} aria-label="Previous image">
        ‹
      </button>
      <button className="sg-carousel-btn sg-carousel-next" onClick={next} aria-label="Next image">
        ›
      </button>

      {/* Dot indicators */}
      <div className="sg-carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`sg-carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>


    </div>
  );
}
