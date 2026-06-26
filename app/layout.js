import './globals.css';

export const metadata = {
  title: "Sharks Gym — New Delhi's Premier Gym",
  description:
    "Sharks Gym on Panchkuian Road, New Delhi. State-of-the-art biomechanics equipment, expert personal trainers, and a clean focused environment built for real results.",
};

// This is the correct Next.js App Router way to set viewport meta
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
