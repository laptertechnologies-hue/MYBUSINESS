'use client';

import { useState } from 'react';
import Link from 'next/link';
import { registerBusiness } from '@/actions/register';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await registerBusiness(formData);

      if (result.error) {
        setMessage({ type: 'error', text: result.error });
      } else if (result.success) {
        setMessage({ type: 'success', text: `Success! Your tenant is ready at: ${result.subdomain}` });
      }
    } catch (err) {
      setMessage({ type: 'error', text: `Action Crash: ${String(err)}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 700 }}>
          Create your account
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
          Join thousands of Ugandan businesses managing their operations efficiently.
        </p>

        {message && (
          <div style={{
            padding: '1rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            backgroundColor: message.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
            border: `1px solid ${message.type === 'error' ? 'rgba(239, 68, 68, 0.5)' : 'rgba(16, 185, 129, 0.5)'}`,
            color: message.type === 'error' ? '#ef4444' : '#10b981',
            textAlign: 'center',
            fontWeight: 600
          }}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Business Name</label>
            <input 
              name="businessName"
              type="text" 
              required
              placeholder="e.g. Lapter Technologies"
              className="glass-input"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Email Address</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="you@example.com"
              className="glass-input"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Password</label>
            <input 
              name="password"
              type="password" 
              required
              placeholder="••••••••"
              className="glass-input"
              minLength={6}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ marginTop: '1rem', width: '100%', padding: '1rem', fontSize: '1.1rem', opacity: loading ? 0.7 : 1 }}
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Get Started For Free'}
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
