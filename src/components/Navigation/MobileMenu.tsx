import { useEffect } from 'react';
import { X } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import ThemeToggle from '../Layout/ThemeToggle';
import styles from './MobileMenu.module.css';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <div
      className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <nav
        className={`${styles.menu} ${open ? styles.menuOpen : ''}`}
        onClick={(e) => e.stopPropagation()}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.header}>
          <a href="/" className={styles.logo} onClick={onClose}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
              <path d="M10 22L16 10L22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Velocity</span>
          </a>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu" type="button">
            <X size={22} />
          </button>
        </div>

        <ul className={styles.links}>
          {mainNav.map((item, i) => (
            <li key={item.label} className={styles.linkItem} style={{ animationDelay: `${i * 50}ms` }}>
              <a href={item.href} className={styles.link} onClick={onClose}>
                {item.label}
              </a>
              {item.children && (
                <ul className={styles.subLinks}>
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a href={child.href} className={styles.subLink} onClick={onClose}>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <ThemeToggle />
          <a href="/login" className={styles.loginBtn} onClick={onClose}>Log in</a>
          <a href="/signup" className={styles.ctaBtn} onClick={onClose}>Get Started</a>
        </div>
      </nav>
    </div>
  );
}
