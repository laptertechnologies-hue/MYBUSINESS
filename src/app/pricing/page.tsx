import Link from 'next/link';
import Image from 'next/image';

export default function Pricing() {
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
          <Link href="/pricing" className="nav-link" style={{ color: '#fff' }}>Pricing</Link>
          <Link href="/testimonials" className="nav-link">Testimonials</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#" className="nav-link" style={{ color: '#fff', fontWeight: 600 }}>Sign In</Link>
          <Link href="/register" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      <section className="container" style={{ padding: '6rem 2rem 4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </h1>
        <p className="section-subtitle">
          Choose the package that fits your business size. No hidden fees. Start with a 21-day free trial on any plan.
        </p>
      </section>

      <section className="container" style={{ padding: '0 2rem 8rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
          
          {/* Starter */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>Starter</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Perfect for single-owner retail shops and small kiosks.</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '2rem' }}>
              UGX 25,000<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Single Branch Location</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Unlimited User Accounts</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Basic Sales & Expense Tracking</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Simple Inventory Management</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Mobile Money Collections</span>
              </li>
            </ul>
            
            <Link href="/register" className="btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Start Free Trial</Link>
          </div>

          {/* Professional */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '2px solid var(--accent-purple)', transform: 'scale(1.05)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-purple)', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700 }}>
              MOST POPULAR
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>Professional</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Ideal for growing businesses with staff and multiple operations.</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-purple)', marginBottom: '2rem' }}>
              UGX 50,000<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span style={{ fontWeight: 600 }}>Everything in Starter, plus:</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Employee Payroll & Permissions</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Industry Modules (Clinic/Restaurant)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Advanced Profit Reporting</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Automated SMS Receipts</span>
              </li>
            </ul>
            
            <Link href="/register" className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Start Free Trial</Link>
          </div>

          {/* Enterprise */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>Enterprise</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>For multi-branch businesses requiring advanced tools.</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b', marginBottom: '2rem' }}>
              UGX 100,000<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span style={{ fontWeight: 600 }}>Everything in Professional, plus:</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Multi-Branch Central Syncing</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Custom Domain Name Mapping</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Open API Access (URA EFRIS)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Priority 24/7 Phone Support</span>
              </li>
            </ul>
            
            <Link href="/register" className="btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Contact Sales</Link>
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
