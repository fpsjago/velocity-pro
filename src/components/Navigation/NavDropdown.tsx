import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { NavLink } from '../../data/navigation';
import styles from './NavDropdown.module.css';

interface Props {
  label: string;
  items: NavLink[];
}

export default function NavDropdown({ label, items }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        type="button"
      >
        {label}
        <ChevronDown size={14} className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} />
      </button>

      {open && (
        <div className={styles.dropdown} role="menu">
          <div className={styles.grid}>
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.item}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <span className={styles.itemTitle}>{item.label}</span>
                {item.description && (
                  <span className={styles.itemDesc}>{item.description}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
