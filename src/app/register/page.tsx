import Link from 'next/link';

export default function Register() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
          Create your account
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
          Start managing your business effectively today.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Business Name</label>
            <input 
              type="text" 
              placeholder="e.g. Lapter Technologies"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(0,0,0,0.2)',
                color: '#fff',
                outline: 'none'
              }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(0,0,0,0.2)',
                color: '#fff',
                outline: 'none'
              }} 
            />
          </div>
          
          <button type="button" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Sign Up (Coming Soon)
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
