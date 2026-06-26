import { Phone, MessageCircle, MapPin } from 'lucide-react';

const hours = [
  { day: 'Monday',    time: '06:00 AM – 11:00 PM', closed: false },
  { day: 'Tuesday',   time: '06:00 AM – 11:00 PM', closed: false },
  { day: 'Wednesday', time: '06:00 AM – 11:00 PM', closed: false },
  { day: 'Thursday',  time: '06:00 AM – 11:00 PM', closed: false },
  { day: 'Friday',    time: '06:00 AM – 11:00 PM', closed: false },
  { day: 'Saturday',  time: '06:00 AM – 11:00 PM', closed: false },
  { day: 'Sunday',    time: 'Closed',               closed: true  },
];

const contacts = [
  {
    href: 'tel:09971374174',
    icon: Phone,
    label: 'Call Us',
    value: '099713 74174',
    external: false,
  },
  {
    href: 'https://wa.me/+919971374174',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    external: true,
  },
  {
    href: 'https://maps.google.com/maps?cid=14341203552578795686',
    icon: MapPin,
    label: 'Find Us',
    value: '29, Panchkuian Road, Paharganj',
    external: true,
  },
];

export default function HoursContact() {
  return (
    <section className="sg-hours-section" id="hours">
      <div className="sg-section-label reveal">Plan Your Visit</div>
      <h2 className="sg-section-heading reveal">Hours &amp; Contact</h2>
      <div className="sg-hours-grid">
        <table className="sg-hours-table reveal">
          <tbody>
            {hours.map((h) => (
              <tr key={h.day} className={h.closed ? 'closed' : ''}>
                <td>{h.day}</td>
                <td>{h.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sg-hours-cta reveal reveal-delay-2" id="contact">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                className="sg-hours-contact-item"
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="sg-contact-icon">
                  <Icon size={20} strokeWidth={1.5} color="var(--red)" />
                </span>
                <div>
                  <div className="sg-contact-label">{c.label}</div>
                  <div className="sg-contact-value">{c.value}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
