import { useCountUp } from '../../hooks/useCountUp';
import type { Stat } from '../../data/stats';
import { stats as defaultStats } from '../../data/stats';
import styles from './StatsBar.module.css';

interface Props {
  stats?: Stat[];
}

function StatItem({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div className={styles.stat} ref={ref}>
      <div className={styles.value}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function StatsBar({ stats = defaultStats }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}
