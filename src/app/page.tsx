import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 800 }}>
            Welcome to <span className="gradient-text">my business</span>
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            The all-in-one business management system tailored for Ugandan enterprises. 
            Manage your sales, inventory, employees, and Mobile Money collections from a single, powerful dashboard.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/register" className="btn-primary">
              Get Started Now
            </Link>
            <Link href="#features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section style={{ padding: '3rem 0', background: 'rgba(255, 255, 255, 0.4)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Trusted by Growing Businesses Across Uganda
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6 }}>
            {/* Placeholder Partner Logos/Names */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Kampala Retail Hub</h3>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Entebbe Clinics Ltd</h3>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Pearl Dining</h3>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Jinja Wholesalers</h3>
          </div>
        </div>
      </section>

      {/* Supported Businesses Section */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Built for <span className="gradient-text">Every Industry</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Our modular App Store allows you to turn on exactly the features your specific business needs.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Retail */}
            <div className="glass-panel" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>Retail & POS</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Barcode scanning, automated receipt printing, dynamic inventory stock levels, and low-stock alerts for your supermarket or boutique.</p>
            </div>
            {/* Healthcare */}
            <div className="glass-panel" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-purple)' }}>Healthcare & Clinics</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Secure patient visit logs, prescription tracking, appointment calendars, and automated billing for medical services.</p>
            </div>
            {/* Hospitality */}
            <div className="glass-panel" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍽️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-pink)' }}>Restaurants & Hospitality</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Visual table mapping, instant Kitchen Order Tickets (KOT), recipe ingredient tracking, and split-bill management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Everything you need to <span className="gradient-text">scale seamlessly</span>
            </h2>
          </div>

          <div className="grid-2-col" style={{ marginBottom: '6rem' }}>
            <div>
              <Image 
                src="/dashboard_light.png" 
                alt="Business Management Dashboard" 
                width={800} 
                height={600} 
                className="feature-image" 
              />
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>
                Powerful Dashboard Analytics
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Gain deep insights into your daily sales, inventory levels, and employee performance. 
                Our glassmorphism UI ensures that managing your business is not just efficient, but visually stunning.
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Real-time profit & loss tracking</li>
                <li>Customizable reporting modules</li>
                <li>Secure multi-tenant data isolation</li>
              </ul>
            </div>
          </div>

          <div className="grid-2-col">
            <div style={{ order: 2 }}>
              <Image 
                src="/business_growth_light.png" 
                alt="Business Growth in Africa" 
                width={800} 
                height={600} 
                className="feature-image" 
              />
            </div>
            <div style={{ order: 1 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-purple)' }}>
                Seamless Local Integrations
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Built specifically for the Ugandan market. We integrate directly with local payment solutions so you can collect payments instantly without high aggregator fees.
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Direct MTN MoMo & Airtel Money API support</li>
                <li>Automated tax calculation estimates (URA)</li>
                <li>Instant SMS receipts to customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
              Choose the package that fits your business size. No hidden fees.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Starter Package */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Starter</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '1.5rem' }}>UGX 25,000<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Perfect for single-owner retail shops and small kiosks.</p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem', marginBottom: '2rem', flex: 1 }}>
                <li>Unlimited User Accounts</li>
                <li>Basic Sales & Expense Tracking</li>
                <li>Simple Inventory Management</li>
                <li>Mobile Money Collections</li>
              </ul>
              <Link href="/register" className="btn-secondary" style={{ width: '100%' }}>Choose Starter</Link>
            </div>

            {/* Professional Package */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', transform: 'scale(1.05)', borderColor: 'var(--accent-purple)', boxShadow: '0 10px 40px rgba(168, 85, 247, 0.2)' }}>
              <div style={{ background: 'var(--accent-purple)', color: '#fff', textAlign: 'center', padding: '0.25rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>MOST POPULAR</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Professional</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>UGX 50,000<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Ideal for growing businesses with staff and multiple operations.</p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem', marginBottom: '2rem', flex: 1 }}>
                <li>Unlimited User Accounts</li>
                <li>Employee Payroll & Permissions</li>
                <li>Access to Industry Modules (Clinic/Restaurant)</li>
                <li>Advanced Profit Reporting</li>
              </ul>
              <Link href="/register" className="btn-primary" style={{ width: '100%' }}>Choose Professional</Link>
            </div>

            {/* Enterprise Package */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Enterprise</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-pink)', marginBottom: '1.5rem' }}>UGX 100,000<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>For multi-branch businesses requiring advanced tools.</p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem', marginBottom: '2rem', flex: 1 }}>
                <li>Unlimited User Accounts</li>
                <li>Multi-Branch Syncing</li>
                <li>Custom Domain Name mapping</li>
                <li>Priority 24/7 Support</li>
              </ul>
              <Link href="/register" className="btn-secondary" style={{ width: '100%' }}>Choose Enterprise</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: 'auto' }}>
        <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} My Business. All rights reserved in Uganda.</p>
      </footer>
    </main>
  );
}
