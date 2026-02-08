import type { Testimonial } from '../../data/testimonials';
import styles from './TestimonialGrid.module.css';

interface Props {
  testimonials: Testimonial[];
  heading?: string;
  subtitle?: string;
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function TestimonialGrid({
  testimonials,
  heading = 'What our customers say',
  subtitle = 'Don\'t just take our word for it. Here\'s what teams are saying about Velocity Pro.',
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.grid}>
          {testimonials.map((t) => {
            const initials = t.author.split(' ').map(n => n[0]).join('');
            return (
              <div key={t.id} className={styles.card}>
                {t.rating && (
                  <div className={styles.stars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                )}
                <p className={styles.quote}>"{t.quote}"</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{initials}</div>
                  <div>
                    <div className={styles.authorName}>{t.author}</div>
                    <div className={styles.authorRole}>{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
