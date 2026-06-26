import { Dumbbell, Activity, Weight, Flame } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Dumbbell,
    name: 'Fitness Centre',
    desc: 'Full access to our biomechanics equipment floor, designed to maximise safe, effective training for all levels.',
  },
  {
    num: '02',
    icon: Activity,
    name: 'Physical Fitness Programs',
    desc: 'Structured, trainer-guided programs tailored to your goals — from endurance to muscle gain.',
  },
  {
    num: '03',
    icon: Weight,
    name: 'Weightlifting Area',
    desc: 'Dedicated free weights and power racks for serious lifters. Plates, barbells, and a space to push heavy.',
  },
  {
    num: '04',
    icon: Flame,
    name: 'Weight Loss Training',
    desc: 'Targeted cardio + resistance programs built around science-backed fat loss — with trainer accountability.',
  },
];

const delayClass = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

export default function Services() {
  return (
    <section className="sg-services-section" id="services">
      <div className="sg-section-label reveal">What We Offer</div>
      <h2 className="sg-section-heading reveal">Our Services</h2>
      <div className="sg-services-grid">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.num} className={`sg-service-card reveal ${delayClass[i]}`}>
              <span className="sg-service-icon">
                <Icon size={36} strokeWidth={1.5} color="var(--red)" />
              </span>
              <div className="sg-service-num">{s.num}</div>
              <div className="sg-service-name">{s.name}</div>
              <p className="sg-service-desc">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
