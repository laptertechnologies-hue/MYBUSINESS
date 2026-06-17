import Link from 'next/link';

export default function HowItWorks() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>How it Works</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Learn how our platform streamlines your daily operations from inventory to billing.
      </p>
      <Link href="/" className="btn-primary">&larr; Back to Home</Link>
    </main>
  );
}
