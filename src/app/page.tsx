import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ borderRadius: '8px' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>My Business</span>
        </div>
        <div className="desktop-nav">
          <Link href="/" className="nav-link" style={{ color: '#fff' }}>Home</Link>
          <Link href="/solutions" className="nav-link">Solutions</Link>
          <Link href="/how-it-works" className="nav-link">How it Works</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/testimonials" className="nav-link">Testimonials</Link>
          <Link href="/faq" className="nav-link">FAQ</Link>
          <Link href="#contact" className="nav-link">Contact Us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#" className="nav-link" style={{ color: '#fff', fontWeight: 600 }}>Sign In</Link>
          <Link href="/register" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center', padding: '6rem 2rem', minHeight: '80vh' }}>
        <div>
          <div className="badge-outline">21-days free trial - No credit card required</div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            Complete Business Management Platform in Uganda
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7', maxWidth: '500px' }}>
            Manage sales, inventory, vouchers, payments, and customers - all from one powerful dashboard built for African SMEs.
          </p>
          <Link href="/register" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Get Started &rarr;
          </Link>
        </div>
        <div className="mockup-wrapper">
          <Image 
            src="/dashboard_dark_main.png" 
            alt="Dashboard Mockup" 
            width={800} 
            height={500} 
            className="mockup-image"
          />
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container" style={{ padding: '6rem 2rem' }}>
        <h2 className="section-title">Tailored SaaS for Every Sector</h2>
        <p className="section-subtitle">
          Automated billing setups, professional inventory deployments, and remote management built specifically for East Africa.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {/* Solution 1 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 700 }}>Retail & POS System</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
              Run point of sale billing, barcode scanning, dynamic stock levels, and automated receipt printing for supermarkets in Uganda.
            </p>
            <Link href="/solutions" style={{ color: 'var(--accent-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View solution &rarr;
            </Link>
          </div>
          
          {/* Solution 2 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 700 }}>Clinic Billing</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
              Manage patient records, automated service billing, appointment packages, and secure mobile money payments.
            </p>
            <Link href="/solutions" style={{ color: 'var(--accent-purple)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View solution &rarr;
            </Link>
          </div>

          {/* Solution 3 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#a855f7', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 700 }}>Restaurant Management</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
              Control split bills, kitchen order tickets (KOT), recipe ingredient tracking, and daily shift revenue visibility.
            </p>
            <Link href="/solutions" style={{ color: '#a855f7', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View solution &rarr;
            </Link>
          </div>

          {/* Solution 4 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#10b981', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 700 }}>Enterprise Branches</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
              Support multi-branch sync, corporate data aggregation, global access policies, and central billing operations for large companies.
            </p>
            <Link href="/solutions" style={{ color: '#10b981', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View solution &rarr;
            </Link>
          </div>

          {/* Solution 5 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#f59e0b', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 700 }}>Custom Integrations</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
              Pair your business processes with local APIs including URA EFRIS, MTN MoMo, and Airtel Money operator onboarding.
            </p>
            <Link href="/solutions" style={{ color: '#f59e0b', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View solution &rarr;
            </Link>
          </div>

          {/* Solution 6 */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#ec4899', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 700 }}>Platform Insights</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
              Review comprehensive reports, staff audit logs, profit margins, and daily reconciliation workflows before you make decisions.
            </p>
            <Link href="/solutions" style={{ color: '#ec4899', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View solution &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Stop Juggling Systems */}
      <section className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
          Stop Juggling Systems.<br />
          <span className="gradient-text">Start Scaling Your Business with My Business.</span>
        </h2>
        <p className="section-subtitle">
          We replace your complex, multi-system setup with a powerful all-in-one Management System. Automated, high-performance, and built specifically for SME scalability in Africa.
        </p>

        {/* Dashboard Images Collage */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
          <div className="mockup-wrapper">
            <Image src="/dashboard_dark_inventory.png" alt="Inventory Dashboard" width={600} height={400} className="mockup-image" />
          </div>
          <div className="mockup-wrapper">
            <Image src="/dashboard_dark_pos.png" alt="POS Dashboard" width={600} height={400} className="mockup-image" />
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/register" className="btn-primary" style={{ padding: '1rem 3rem' }}>Get Started Free</Link>
          <Link href="#contact" className="btn-secondary" style={{ padding: '1rem 3rem' }}>Book a Demo &rarr;</Link>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem', color: '#10b981', fontWeight: 600, flexWrap: 'wrap' }}>
          <span>&#10003; Free account activation</span>
          <span>&#10003; No credit card required</span>
          <span>&#10003; Local Ugandan support</span>
          <span>&#10003; 2-minute setup</span>
        </div>
      </section>

      {/* Get in Touch */}
      <section id="contact" className="container" style={{ padding: '6rem 2rem' }}>
        <h2 className="section-title">Get in <span style={{ color: 'var(--accent-color)' }}>Touch</span></h2>
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
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            
            {/* Column 1: Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ borderRadius: '6px' }} />
                <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>My Business</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                Leading SaaS management platform in East Africa. Powering hundreds of retail and service businesses with enterprise-grade tools.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {/* Social placeholders */}
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>F</div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>T</div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>IN</div>
              </div>
            </div>

            {/* Column 2: Platform */}
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>Platform</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '2.5' }}>
                <li><Link href="/features" className="nav-link">Inventory Manager</Link></li>
                <li><Link href="/features" className="nav-link">Sales Tracking</Link></li>
                <li><Link href="/features" className="nav-link">User Audit Logs</Link></li>
                <li><Link href="/features" className="nav-link">Device Health</Link></li>
                <li><Link href="/features" className="nav-link">Revenue Reports</Link></li>
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>Solutions</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '2.5' }}>
                <li><Link href="/solutions" className="nav-link">Retail POS</Link></li>
                <li><Link href="/solutions" className="nav-link">Clinic Billing</Link></li>
                <li><Link href="/solutions" className="nav-link">Restaurant Sync</Link></li>
                <li><Link href="/solutions" className="nav-link">Enterprise HQ</Link></li>
                <li><Link href="/solutions" className="nav-link">MoMo Integration</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '2.5' }}>
                <li><Link href="#" className="nav-link">Documentation</Link></li>
                <li><Link href="#" className="nav-link">API Reference</Link></li>
                <li><Link href="#" className="nav-link">Video Tutorials</Link></li>
                <li><Link href="#" className="nav-link">Knowledge Base</Link></li>
                <li><Link href="#" className="nav-link">System Status</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '2.5' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Banda, Kampala, Uganda
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  support@mybusiness.co.ug
                </li>
                <li style={{ color: '#ef4444', fontWeight: 600 }}>+256 786 028401</li>
                <li style={{ color: '#ef4444', fontWeight: 600 }}>+256 765 458906</li>
                <li style={{ color: '#ef4444', fontWeight: 600 }}>+256 763 721005</li>
                <li style={{ color: '#10b981', fontWeight: 600 }}>+256 701 792387</li>
              </ul>
            </div>

          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <div>&copy; {new Date().getFullYear()} My Business SaaS. Crafted by Lapter Technologies.</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link href="#" className="nav-link">Privacy Policy</Link>
              <Link href="#" className="nav-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px', background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)', zIndex: 100, cursor: 'pointer' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      </div>
    </main>
  );
}
