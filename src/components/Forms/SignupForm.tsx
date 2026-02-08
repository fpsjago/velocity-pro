import { useState, useMemo } from 'react';
import styles from './SignupForm.module.css';
import f from './forms.module.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirm: string;
  terms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  terms?: string;
}

function getPasswordStrength(pw: string): { score: number; label: string; color: string } {
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  if (score <= 1) return { score: 20, label: 'Weak', color: '#ef4444' };
  if (score === 2) return { score: 40, label: 'Fair', color: '#f59e0b' };
  if (score === 3) return { score: 60, label: 'Good', color: '#eab308' };
  if (score === 4) return { score: 80, label: 'Strong', color: '#22c55e' };
  return { score: 100, label: 'Very strong', color: '#10b981' };
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email';
  if (!data.password) errors.password = 'Password is required';
  else if (data.password.length < 8) errors.password = 'Must be at least 8 characters';
  if (data.password !== data.confirm) errors.confirm = 'Passwords do not match';
  if (!data.terms) errors.terms = 'You must accept the terms';
  return errors;
}

export default function SignupForm() {
  const [data, setData] = useState<FormData>({ name: '', email: '', password: '', confirm: '', terms: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const strength = useMemo(() => getPasswordStrength(data.password), [data.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.illustration}>
          <h2 className={styles.illustrationTitle}>Welcome aboard! 🚀</h2>
          <p className={styles.illustrationText}>Your account has been created. Check your email to verify and get started.</p>
        </div>
        <div className={styles.formSide}>
          <div className={f.successMsg}>
            <svg className={f.successIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3 className={f.successTitle}>Account created!</h3>
            <p className={f.successText}>Check your email to verify your account.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.illustration}>
        <h2 className={styles.illustrationTitle}>Start building today</h2>
        <p className={styles.illustrationText}>Join thousands of teams shipping faster with Velocity Pro. Free 14-day trial, no credit card required.</p>
      </div>

      <div className={styles.formSide}>
        <div className={styles.card}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Velocity</span>
          </div>
          <h1 className={styles.heading}>Create your account</h1>
          <p className={styles.subtitle}>Start your 14-day free trial</p>

          <div className={f.socialBtns}>
            <button type="button" className={f.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button type="button" className={f.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </button>
          </div>

          <div className={f.divider}>or continue with email</div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={f.formGroup}>
              <label className={f.label} htmlFor="signup-name">Full name</label>
              <input id="signup-name" name="name" type="text" className={`${f.input} ${errors.name ? f.inputError : ''}`} value={data.name} onChange={handleChange} placeholder="John Doe" />
              {errors.name && <span className={f.error}>{errors.name}</span>}
            </div>

            <div className={f.formGroup}>
              <label className={f.label} htmlFor="signup-email">Email</label>
              <input id="signup-email" name="email" type="email" className={`${f.input} ${errors.email ? f.inputError : ''}`} value={data.email} onChange={handleChange} placeholder="you@company.com" />
              {errors.email && <span className={f.error}>{errors.email}</span>}
            </div>

            <div className={f.formGroup}>
              <label className={f.label} htmlFor="signup-password">Password</label>
              <input id="signup-password" name="password" type="password" className={`${f.input} ${errors.password ? f.inputError : ''}`} value={data.password} onChange={handleChange} placeholder="••••••••" />
              {data.password && (
                <>
                  <div className={f.strengthBar}>
                    <div className={f.strengthFill} style={{ width: `${strength.score}%`, background: strength.color }} />
                  </div>
                  <span className={f.strengthLabel} style={{ color: strength.color }}>{strength.label}</span>
                </>
              )}
              {errors.password && <span className={f.error}>{errors.password}</span>}
            </div>

            <div className={f.formGroup}>
              <label className={f.label} htmlFor="signup-confirm">Confirm password</label>
              <input id="signup-confirm" name="confirm" type="password" className={`${f.input} ${errors.confirm ? f.inputError : ''}`} value={data.confirm} onChange={handleChange} placeholder="••••••••" />
              {errors.confirm && <span className={f.error}>{errors.confirm}</span>}
            </div>

            <div className={f.checkbox}>
              <input id="signup-terms" name="terms" type="checkbox" checked={data.terms} onChange={handleChange} />
              <label htmlFor="signup-terms">I agree to the <a href="#" className={f.link}>Terms of Service</a> and <a href="#" className={f.link}>Privacy Policy</a></label>
            </div>
            {errors.terms && <span className={f.error}>{errors.terms}</span>}

            <button type="submit" className={f.btn} disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className={styles.footer}>
            Already have an account? <a href="/login" className={f.link}>Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
