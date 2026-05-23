const values = [
  {
    title: 'Trust First',
    text: 'Every service partner is background-checked, reviewed, and quality-monitored to ensure peace of mind for every booking.',
    icon: '🛡️',
  },
  {
    title: 'Fast & Flexible',
    text: 'Book in minutes, reschedule with ease, and get matched to nearby professionals based on real-time availability.',
    icon: '⚡',
  },
  {
    title: 'Transparent Pricing',
    text: 'No hidden fees. Upfront estimates, clear scopes, and secure payments make every project predictable.',
    icon: '💳',
  },
];

const stats = [
  { number: '25K+', label: 'Jobs Completed' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '350+', label: 'Verified Professionals' },
  { number: '42', label: 'Cities Covered' },
];

const team = [
  {
    name: 'Mia Rodriguez',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Ethan Walker',
    role: 'Head of Operations',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Ava Thompson',
    role: 'Product Design Lead',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=80',
  },
];

function App() {
  return (
    <div className="about-page">
      <header className="topbar container">
        <a href="#" className="brand">HomeXPros</a>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#" className="active">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="btn btn-primary">Book Now</button>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">ABOUT US</p>
            <h1>We’re Building the Most Trusted Home Service Experience</h1>
            <p>
              HomeXPros helps homeowners connect with verified local professionals for repairs,
              maintenance, and upgrades—quickly, safely, and confidently.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-light">Learn More</button>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Home service professional"
            />
          </div>
        </div>
      </section>

      <section className="container stats" aria-label="Company statistics">
        {stats.map((item) => (
          <article key={item.label}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="container section values">
        <div className="section-head">
          <p className="eyebrow">OUR VALUES</p>
          <h2>What We Stand For</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section story">
        <div className="story-media">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaboration"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">OUR STORY</p>
          <h2>From One Neighborhood to Dozens of Cities</h2>
          <p>
            We started HomeXPros with a simple mission: make reliable home services easy to find.
            What began as a small local network has grown into a trusted platform used by
            thousands of families.
          </p>
          <p>
            Today, we continue to invest in quality checks, faster booking technology, and better
            customer support—so every home project feels simple from start to finish.
          </p>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <p className="eyebrow">LEADERSHIP</p>
          <h2>Meet the Team</h2>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container cta">
        <h2>Ready to book your next home service?</h2>
        <p>Join thousands of homeowners who trust HomeXPros for quality, speed, and reliability.</p>
        <button className="btn btn-light">Book a Service</button>
      </section>
    </div>
  );
}

export default App;
