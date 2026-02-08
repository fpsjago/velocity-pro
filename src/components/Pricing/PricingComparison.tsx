import type { ComparisonFeature } from '../../data/pricing';
import styles from './PricingComparison.module.css';

interface Props {
  features: ComparisonFeature[];
  heading?: string;
}

function CheckIcon() {
  return (
    <svg className={styles.check} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className={styles.cross} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? <CheckIcon /> : <CrossIcon />;
  }
  return <>{value}</>;
}

export default function PricingComparison({
  features,
  heading = 'Compare plans in detail',
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Starter</th>
              <th className={styles.popularHeader}>Pro</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((category) => (
              <>
                <tr key={category.category} className={styles.categoryRow}>
                  <td colSpan={4}>{category.category}</td>
                </tr>
                {category.features.map((feature) => (
                  <tr key={feature.name} className={styles.featureRow}>
                    <td>{feature.name}</td>
                    <td><CellValue value={feature.starter} /></td>
                    <td><CellValue value={feature.pro} /></td>
                    <td><CellValue value={feature.enterprise} /></td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
