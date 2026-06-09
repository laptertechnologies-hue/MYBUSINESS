import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>
            Welcome to <span className="gradient-text">Uganda SME SaaS</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            The all-in-one business management system tailored for Ugandan small businesses. 
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

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Everything you need to <span className="gradient-text">grow your business</span>
            </h2>
          </div>

          {/* Feature 1: The Dashboard */}
          <div className="grid-2-col" style={{ marginBottom: '6rem' }}>
            <div>
              <Image 
                src="/dashboard_mockup.png" 
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

          {/* Feature 2: Growth & Integration */}
          <div className="grid-2-col">
            <div style={{ order: 2 }}>
              <Image 
                src="/business_growth.png" 
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
                <li>Industry-specific modules (Retail, Clinics, Restaurants)</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
