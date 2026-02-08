import { useMemo } from 'react';
import type { Testimonial } from '../../data/testimonials';
import styles from './TestimonialCarousel.module.css';

interface Props {
  testimonials: Testimonial[];
  speed?: number;
  heading?: string;
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className={styles.card}>
      {testimonial.rating && (
        <div className={styles.stars}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      )}
      <p className={styles.quote}>"{testimonial.quote}"</p>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {initials}
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{testimonial.author}</span>
          <span className={styles.authorRole}>
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel({
  testimonials,
  speed = 30,
  heading = 'Loved by teams everywhere',
}: Props) {
  // Duplicate for infinite scroll
  const doubled = useMemo(() => [...testimonials, ...testimonials], [testimonials]);
  const duration = `${testimonials.length * speed}s`;

  return (
    <section className={styles.wrapper}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.track} style={{ '--duration': duration } as React.CSSProperties}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
