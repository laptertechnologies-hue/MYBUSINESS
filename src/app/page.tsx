export default function Home() {
  return (
    <main>
      <div className="glass-panel" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to <span className="gradient-text">Uganda SME SaaS</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The all-in-one business management system tailored for Ugandan small businesses. Manage your sales, inventory, and employees from a single dashboard.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-primary">Get Started</button>
          <button className="btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid var(--glass-border)' }}>Learn More</button>
        </div>
      </div>
    </main>
  );
}
