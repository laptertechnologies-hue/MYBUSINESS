import Link from 'next/link';

export default function Solutions() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Solutions</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Explore our tailored modules for Retail, Clinics, Restaurants, and Enterprise branches.
      </p>
      <Link href="/" className="btn-primary">&larr; Back to Home</Link>
    </main>
  );
}
