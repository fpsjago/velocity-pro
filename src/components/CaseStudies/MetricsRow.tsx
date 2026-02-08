import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './MetricsRow.module.css';

interface Metric {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function MetricItem({ metric, inView }: { metric: Metric; inView: boolean }) {
  const numericValue = parseInt(metric.value.replace(/[^0-9]/g, ''), 10) || 0;
  const count = useCountUp(numericValue, 2000, inView);
  const prefix = metric.prefix || metric.value.match(/^[^0-9]*/)?.[0] || '';
  const suffix = metric.suffix || metric.value.match(/[^0-9]*$/)?.[0] || '';

  return (
    <div className={styles.metric}>
      <div className={styles.value}>
        {prefix}{count}{suffix}
      </div>
      <div className={styles.label}>{metric.label}</div>
    </div>
  );
}

export default function MetricsRow({ metrics }: { metrics: Metric[] }) {
  const [ref, inView] = useInView();

  return (
    <div className={styles.row} ref={ref as React.RefObject<HTMLDivElement>}>
      {metrics.map((m, i) => (
        <MetricItem key={i} metric={m} inView={inView} />
      ))}
    </div>
  );
}
