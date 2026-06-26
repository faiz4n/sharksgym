const items = [
  'Fitness Centre',
  'Physical Training',
  'Weight Loss',
  'Weightlifting',
  'Online Classes',
  'Women Owned',
  'LGBTQ+ Friendly',
  'Google Pay',
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export default function Marquee() {
  return (
    <div className="sg-marquee-wrapper">
      <div className="sg-marquee-track">
        {allItems.map((item, i) => (
          <span key={i} className="sg-marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
