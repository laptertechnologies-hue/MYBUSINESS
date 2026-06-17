import Link from 'next/link';
import Image from 'next/image';

export default function Testimonials() {
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
          <Link href="/testimonials" className="nav-link" style={{ color: '#fff' }}>Testimonials</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#" className="nav-link" style={{ color: '#fff', fontWeight: 600 }}>Sign In</Link>
          <Link href="/register" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      <section className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          Trusted by <span className="gradient-text">Ugandan Businesses</span>
        </h1>
        <p className="section-subtitle">
          See how our platform is helping companies across East Africa scale their operations and increase revenue.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem', textAlign: 'left' }}>
          
          {/* Testimonial 1 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#f59e0b', marginBottom: '1rem', display: 'flex', gap: '0.25rem' }}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', fontStyle: 'italic', flex: 1 }}>
              "Before My Business, tracking inventory across our three branches was a nightmare. Now, everything is synced in real-time, and we can process MTN MoMo payments directly through the POS."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--accent-color)' }}>KR</div>
              <div>
                <h4 style={{ fontWeight: 700, color: '#fff' }}>Kampala Retail Hub</h4>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Supermarket Chain</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#f59e0b', marginBottom: '1rem', display: 'flex', gap: '0.25rem' }}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', fontStyle: 'italic', flex: 1 }}>
              "The Clinic Billing module completely changed how we handle patient records. We generate professional invoices instantly, and our end-of-day reconciliation takes 5 minutes instead of 2 hours."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#10b981' }}>EC</div>
              <div>
                <h4 style={{ fontWeight: 700, color: '#fff' }}>Entebbe Clinics Ltd</h4>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Healthcare Provider</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#f59e0b', marginBottom: '1rem', display: 'flex', gap: '0.25rem' }}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', fontStyle: 'italic', flex: 1 }}>
              "Managing split bills and Kitchen Order Tickets was chaotic during rush hour. With this system, the waiters send orders straight to the kitchen screen. Our revenue has grown by 20% due to less leakage."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#f59e0b' }}>PD</div>
              <div>
                <h4 style={{ fontWeight: 700, color: '#fff' }}>Pearl Dining</h4>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Restaurant & Bar</div>
              </div>
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
