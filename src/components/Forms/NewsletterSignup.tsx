import { useState } from 'react';
import styles from './NewsletterSignup.module.css';
import f from './forms.module.css';

interface Props {
  heading?: string;
  subtitle?: string;
  inline?: boolean;
}

export default function NewsletterSignup({
  heading = 'Stay in the loop',
  subtitle = 'Get product updates, tips, and news delivered to your inbox.',
  inline = false,
}: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  if (inline) {
    return (
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        {success ? (
          <p className={styles.success}>✓ You're subscribed!</p>
        ) : (
          <>
            <input
              type="email"
              className={`${f.input} ${error ? f.inputError : ''}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
            />
            <button type="submit" className={f.btn} disabled={loading}>
              {loading ? '...' : 'Subscribe'}
            </button>
          </>
        )}
      </form>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {success ? (
          <p className={styles.success}>✓ You're subscribed! Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.wrapper}>
              <input
                type="email"
                className={`${f.input} ${error ? f.inputError : ''}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
              />
              <button type="submit" className={f.btn} disabled={loading}>
                {loading ? '...' : 'Subscribe'}
              </button>
            </div>
          </form>
        )}
        {error && <p className={f.error} style={{ marginTop: '0.5rem' }}>{error}</p>}
      </div>
    </section>
  );
}
