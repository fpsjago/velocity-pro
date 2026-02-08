import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import ThemeToggle from '../Layout/ThemeToggle';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.css';

const BASE_URL = import.meta.env.BASE_URL;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.inner} aria-label="Main navigation">
          <a href={BASE_URL} className={styles.logo} aria-label="Velocity Pro home">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
              <path d="M10 22L16 10L22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.logoText}>Velocity</span>
          </a>

          <ul className={styles.links}>
            {mainNav.map((item) => (
              <li key={item.label} className={styles.linkItem}>
                {item.children ? (
                  <NavDropdown label={item.label} items={item.children} />
                ) : (
                  <a href={item.href} className={styles.link}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ThemeToggle />
            <a href={`${BASE_URL}login/`} className={styles.loginLink}>Log in</a>
            <a href={`${BASE_URL}signup/`} className={styles.ctaButton}>Get Started</a>
            <button
              className={styles.menuButton}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
