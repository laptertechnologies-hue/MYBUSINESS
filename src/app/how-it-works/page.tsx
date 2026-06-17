import Link from 'next/link';
import Image from 'next/image';

export default function HowItWorks() {
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
          <Link href="/how-it-works" className="nav-link" style={{ color: '#fff' }}>How it Works</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/testimonials" className="nav-link">Testimonials</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#" className="nav-link" style={{ color: '#fff', fontWeight: 600 }}>Sign In</Link>
          <Link href="/register" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="badge-outline">Simple 4-Step Process</div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: '1.2' }}>
          How <span className="gradient-text">My Business</span> Works
        </h1>
        <p className="section-subtitle">
          We've made it incredibly easy to transition your business from manual books to a powerful, automated digital system. 
        </p>
      </section>

      {/* Steps */}
      <section className="container" style={{ padding: '2rem 2rem 8rem 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Step 1 */}
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(59, 130, 246, 0.2)', marginBottom: '-1rem' }}>01</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Create & Configure</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Sign up in under 2 minutes. Add your business details, location, and choose your preferred currency (UGX, KES, USD). Invite your staff and assign them specific roles like 'Cashier' or 'Manager' to ensure tight access control.
              </p>
            </div>
            <div className="mockup-wrapper">
              <Image src="/dashboard_dark_main.png" alt="Setup Dashboard" width={500} height={300} className="mockup-image" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ order: 2, '@media(min-width: 768px)': { order: 1 } } as any}>
              <div className="mockup-wrapper">
                <Image src="/dashboard_dark_inventory.png" alt="Inventory Dashboard" width={500} height={300} className="mockup-image" />
              </div>
            </div>
            <div style={{ order: 1, '@media(min-width: 768px)': { order: 2 } } as any}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(168, 85, 247, 0.2)', marginBottom: '-1rem' }}>02</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Import Inventory</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Bulk upload your existing products using a simple Excel sheet or add them manually. Set buying prices, selling prices, and re-order levels. The system will automatically warn you when stock is running low.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(16, 185, 129, 0.2)', marginBottom: '-1rem' }}>03</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Sell & Collect Payments</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Use our lightning-fast POS interface to process customer orders. Scan barcodes, add discounts, and collect payments instantly via Cash, Visa, or integrated Mobile Money (MTN/Airtel).
              </p>
            </div>
            <div className="mockup-wrapper">
              <Image src="/dashboard_dark_pos.png" alt="POS Dashboard" width={500} height={300} className="mockup-image" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(245, 158, 11, 0.2)', marginBottom: '-1rem' }}>04</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Monitor Analytics</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Log in from your phone or laptop anywhere in the world to see real-time sales, profit margins, and employee performance. Stop guessing and start making data-driven decisions.
              </p>
              <Link href="/register" className="btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Free Trial</Link>
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
