import {
  ShowerHead,
  MonitorPlay,
  ParkingSquare,
  Baby,
  Heart,
  CreditCard,
  TreePine,
  UserRound,
  Sparkles,
} from 'lucide-react';

const amenities = [
  { icon: ShowerHead,    name: 'Clean Restrooms',       delay: 'reveal-delay-1' },
  { icon: MonitorPlay,   name: 'Online Classes',         delay: 'reveal-delay-1' },
  { icon: ParkingSquare, name: 'Free Street Parking',    delay: 'reveal-delay-2' },
  { icon: Baby,          name: 'Child Care Available',   delay: 'reveal-delay-2' },
  { icon: Heart,         name: 'LGBTQ+ Friendly',        delay: 'reveal-delay-3' },
  { icon: CreditCard,    name: 'Google Pay Accepted',    delay: 'reveal-delay-3' },
  { icon: TreePine,      name: 'Outdoor Services',       delay: 'reveal-delay-4' },
  { icon: UserRound,     name: 'Women-Owned Business',   delay: 'reveal-delay-4' },
  { icon: Sparkles,      name: 'Hygienic Environment',   delay: 'reveal-delay-4' },
];

export default function Amenities() {
  return (
    <section className="sg-amenities-section">
      <div className="sg-section-label reveal">More Perks</div>
      <h2 className="sg-section-heading reveal">Amenities</h2>
      <div className="sg-amenities-grid">
        {amenities.map((a) => {
          const Icon = a.icon;
          return (
            <div key={a.name} className={`sg-amenity reveal ${a.delay}`}>
              <span className="sg-amenity-icon">
                <Icon size={22} strokeWidth={1.5} color="var(--red)" />
              </span>
              <span className="sg-amenity-name">{a.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
