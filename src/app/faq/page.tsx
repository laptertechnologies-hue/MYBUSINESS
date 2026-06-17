import Link from 'next/link';
import Image from 'next/image';

export default function FAQ() {
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
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#" className="nav-link" style={{ color: '#fff', fontWeight: 600 }}>Sign In</Link>
          <Link href="/register" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      <section className="container" style={{ padding: '6rem 2rem', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          Find quick answers about setup, billing, and system features.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Do I need internet to use the POS?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes, My Business is a cloud-based system. This ensures that your data is securely backed up in real-time, allowing you to access analytics from anywhere in the world and preventing data loss if a device breaks.</p>
          </div>

          <div className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>How do Mobile Money collections work?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We integrate directly with MTN MoMo and Airtel Money APIs. When checking out a customer, you can send a payment prompt directly to their phone. The system automatically marks the invoice as paid once the transaction is successful.</p>
          </div>

          <div className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Can I manage multiple branches?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Absolutely. Our Enterprise plan is designed for multi-branch sync. You can view aggregated reports at the HQ level, or drill down into specific branch performance, stock transfers, and localized expenses.</p>
          </div>

          <div className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Is my business data secure?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We use bank-level 256-bit encryption for all data transmissions. Each tenant's database is securely isolated, and we perform automated daily backups to ensure you never lose a single transaction record.</p>
          </div>

          <div className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Do you provide training for my staff?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer free onboarding sessions for all Professional and Enterprise tier customers. We also have a comprehensive library of video tutorials and a local support team based in Kampala ready to assist via WhatsApp.</p>
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
