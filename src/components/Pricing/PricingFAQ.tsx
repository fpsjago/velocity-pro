import { useState } from 'react';
import type { FaqItem } from '../../data/faq';
import styles from './PricingFAQ.module.css';

interface Props {
  items: FaqItem[];
  heading?: string;
  showCta?: boolean;
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function PricingFAQ({
  items,
  heading = 'Frequently asked questions',
  showCta = true,
}: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div>
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={styles.item}>
                <button
                  className={styles.trigger}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <PlusIcon open={isOpen} />
                </button>
                <div className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {showCta && (
          <div className={styles.cta}>
            <p className={styles.ctaText}>Still have questions?</p>
            <a href="/contact" className={styles.ctaBtn}>
              Contact us
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
