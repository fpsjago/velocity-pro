import { useState } from 'react';
import styles from './ContactForm.module.css';
import f from './forms.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
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
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={f.successMsg}>
          <svg className={f.successIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h3 className={f.successTitle}>Message sent!</h3>
          <p className={f.successText}>We'll get back to you within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Get in touch</h2>
          <p>Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.</p>
          <div className={styles.contactItem}>
            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            hello@velocity.pro
          </div>
          <div className={styles.contactItem}>
            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            San Francisco, CA
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={f.formGroup}>
            <label className={f.label} htmlFor="name">Name</label>
            <input
              id="name" name="name" type="text"
              className={`${f.input} ${errors.name ? f.inputError : ''}`}
              value={data.name} onChange={handleChange}
              placeholder="Your name"
            />
            {errors.name && <span className={f.error}>{errors.name}</span>}
          </div>

          <div className={f.formGroup}>
            <label className={f.label} htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email"
              className={`${f.input} ${errors.email ? f.inputError : ''}`}
              value={data.email} onChange={handleChange}
              placeholder="you@company.com"
            />
            {errors.email && <span className={f.error}>{errors.email}</span>}
          </div>

          <div className={f.formGroup}>
            <label className={f.label} htmlFor="subject">Subject</label>
            <select
              id="subject" name="subject"
              className={`${f.select} ${errors.subject ? f.inputError : ''}`}
              value={data.subject} onChange={handleChange}
            >
              <option value="">Select a topic</option>
              <option value="sales">Sales inquiry</option>
              <option value="support">Technical support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
            {errors.subject && <span className={f.error}>{errors.subject}</span>}
          </div>

          <div className={f.formGroup}>
            <label className={f.label} htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              className={`${f.textarea} ${errors.message ? f.inputError : ''}`}
              value={data.message} onChange={handleChange}
              placeholder="How can we help?"
            />
            {errors.message && <span className={f.error}>{errors.message}</span>}
          </div>

          <button type="submit" className={f.btn} disabled={loading}>
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
