import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ borderRadius: '8px' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>My Business</span>
        </div>
        <div className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/how-it-works" className="nav-link">How it Works</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/testimonials" className="nav-link">Testimonials</Link>
          <Link href="/contact" className="nav-link" style={{ color: '#fff' }}>Contact Us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#" className="nav-link" style={{ color: '#fff', fontWeight: 600 }}>Sign In</Link>
          <Link href="/register" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Content from main page's contact section, standalone */}
      <section className="container" style={{ padding: '6rem 2rem' }}>
        <h1 className="section-title">Get in <span style={{ color: 'var(--accent-color)' }}>Touch</span></h1>
        <p className="section-subtitle" style={{ marginBottom: '4rem' }}>
          Have questions about My Business? Reach out to us directly through any of our channels.
        </p>

        {/* Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', marginBottom: '1rem', color: 'var(--accent-color)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', fontWeight: 700 }}>Phone</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>Call us directly</p>
            <div style={{ color: '#ef4444', fontWeight: 700 }}>+256 786 028401</div>
            <div style={{ color: '#ef4444', fontWeight: 700 }}>+256 765 458906</div>
          </div>

          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', marginBottom: '1rem', color: '#ef4444' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', fontWeight: 700 }}>Email</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>Send us an email</p>
            <div style={{ color: '#ef4444', fontWeight: 700 }}>support@mybusiness.co.ug</div>
          </div>

          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', marginBottom: '1rem', color: '#10b981' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', fontWeight: 700 }}>WhatsApp</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>Chat with us</p>
            <div style={{ color: '#ef4444', fontWeight: 700 }}>+256 701 792387</div>
          </div>

          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', marginBottom: '1rem', color: '#f59e0b' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', fontWeight: 700 }}>Location</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>Visit our office</p>
            <div style={{ color: '#ef4444', fontWeight: 700 }}>Banda, Kampala-Uganda</div>
          </div>
        </div>

        {/* Contact Form & Hours */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Send us a message</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Fill out the form below and we'll get back to you within 24 hours.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name *</label>
                  <input type="text" className="glass-input" placeholder="John Doe" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address *</label>
                  <input type="email" className="glass-input" placeholder="john@example.com" />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message *</label>
                <textarea className="glass-input" rows={5} placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
            </form>
          </div>
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Office Hours</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span>Monday - Friday</span>
              <span style={{ fontWeight: 600, color: '#fff' }}>9:00 AM - 6:00 PM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span>Saturday</span>
              <span style={{ fontWeight: 600, color: '#fff' }}>10:00 AM - 4:00 PM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Sunday</span>
              <span style={{ fontWeight: 600, color: '#fff' }}>Closed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#080c17', padding: '5rem 0 2rem 0', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <div>&copy; {new Date().getFullYear()} My Business SaaS. Crafted by Lapter Technologies.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
