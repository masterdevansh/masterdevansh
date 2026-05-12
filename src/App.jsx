const services = [
  {
    title: 'Electrician',
    text: 'Repairs, installations, and wiring upgrades.',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Plumber',
    text: 'Leak repairs, drain cleaning, and pipe work.',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cleaner',
    text: 'Standard cleaning, deep clean, and move-out.',
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Carpenter',
    text: 'Furniture assembly, repairs, and custom builds.',
    image:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'HVAC specialist',
    text: 'Heating, cooling, and air quality systems.',
    image:
      'https://images.unsplash.com/photo-1631545806626-0f5b6ca7d317?auto=format&fit=crop&w=900&q=80',
  },
];

const testimonials = [
  '“The electrician arrived exactly on time and fixed our wiring issue in under an hour.”',
  '“Booking a cleaner was so easy. My apartment has never looked this good.”',
  '“I was worried about finding a plumber on a weekend, but they connected me instantly.”',
];

function App() {
  return (
    <div className="page">
      <header className="topbar container">
        <div className="brand">🏠 HomeXPros</div>
        <nav>
          <a href="#">Home</a><a href="#">How It Works</a><a href="#">About Us</a><a href="#">My Bookings</a>
        </nav>
        <div className="actions"><button className="ghost">Log In</button><button className="primary">Book a Service</button></div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>All Your Home Services,<br />One Trusted Platform</h1>
            <p>Connect with verified experts for all your home service needs. Fast, reliable, and transparent.</p>
            <div className="cta-row"><button className="primary">Book a Service</button><button className="white">Become a Pro</button></div>
            <div className="badges"><span>✅ Background Checked</span><span>✅ Insured Work</span></div>
          </div>
          <img className="hero-person" src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80" alt="service pro" />
        </div>
      </section>

      <main className="container">
        <section className="block">
          <h2>Popular Services</h2>
          <p>Book verified professionals for a wide range of home services.</p>
          <div className="grid-services">
            {services.map((s) => (
              <article key={s.title} className="service-card">
                <img src={s.image} alt={s.title} />
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="steps">
          {['Book Online', 'Get Matched', 'Job Done', 'Pay Securely'].map((step, i) => (
            <div key={step}><span>{i + 1}</span><h4>{step}</h4></div>
          ))}
        </section>

        <section className="why block">
          <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80" alt="family" />
          <div>
            <h2>Why homeowners choose HomeXPro</h2>
            <ul>
              <li>🛡️ Verified Professionals</li>
              <li>🕒 Quick Booking</li>
              <li>💲 Transparent Pricing</li>
              <li>🎧 24/7 Support</li>
            </ul>
          </div>
        </section>

        <section className="feature-row">
          <article>🛡️<h4>Verified Professionals</h4></article>
          <article>🕒<h4>Fast Response</h4></article>
          <article>⭐<h4>Quality Guaranteed</h4></article>
        </section>

        <section className="block">
          <h2>Loved by thousands</h2>
          <div className="testimonials">
            {testimonials.map((t, i) => <article key={i}><div className="stars">★★★★★</div><p>{t}</p></article>)}
          </div>
        </section>

        <section className="cta">
          <h2>Ready to get started?</h2>
          <p>Join thousands of happy homeowners and book your first service today.</p>
          <button className="white">Book a Service</button>
        </section>
      </main>

      <footer className="footer">
        <div className="container cols">
          <div><div className="brand">🏠 HomeXPros</div><p>Your trusted platform for booking local service professionals.</p></div>
          <div><h4>Services</h4><p>Electrician<br/>Plumber<br/>Cleaner<br/>HVAC</p></div>
          <div><h4>Company</h4><p>About Us<br/>How it Works<br/>Terms</p></div>
          <div><h4>Contact Us</h4><p>✉️ support@homexpro.com<br/>📞 +1 800 123 4567<br/>📍 San Francisco, CA</p></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
