import { useState } from 'react';
import type { PricingPlan } from '../../data/pricing';
import styles from './PricingCards.module.css';

interface Props {
  plans: PricingPlan[];
  heading?: string;
  subtitle?: string;
}

function CheckIcon() {
  return (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingCards({
  plans,
  heading = 'Simple, transparent pricing',
  subtitle = 'No hidden fees. No surprises. Pick a plan that works for you.',
}: Props) {
  const [annual, setAnnual] = useState(true);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${!annual ? styles.active : ''}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleBtn} ${annual ? styles.active : ''}`}
              onClick={() => setAnnual(true)}
            >
              Annual
              <span className={styles.saveBadge}>Save 20%</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`${styles.card} ${plan.popular ? styles.cardPopular : ''}`}
              >
                {plan.popular && (
                  <span className={styles.popularBadge}>Most Popular</span>
                )}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.price}>
                  <span className={styles.currency}>{plan.currency}</span>
                  <span className={styles.amount}>{price}</span>
                  <span className={styles.period}>/month</span>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaLink}
                  className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : ''}`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
