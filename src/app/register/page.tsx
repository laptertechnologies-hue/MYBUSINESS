import Link from 'next/link';

export default function Register() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 700 }}>
          Create your account
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
          Join thousands of Ugandan businesses managing their operations efficiently.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Business Name</label>
            <input 
              type="text" 
              placeholder="e.g. Lapter Technologies"
              className="glass-input"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="glass-input"
            />
          </div>
          
          <button type="button" className="btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
            Get Started For Free
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
