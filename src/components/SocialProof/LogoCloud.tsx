import styles from './LogoCloud.module.css';

interface Logo {
  name: string;
  src?: string;
}

interface Props {
  logos: Logo[];
  heading?: string;
  animated?: boolean;
}

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className={styles.logo}>
      <div className={styles.logoIcon} />
      <span className={styles.logoName}>{logo.name}</span>
    </div>
  );
}

export default function LogoCloud({
  logos,
  heading = 'Trusted by innovative teams',
  animated = true,
}: Props) {
  const doubled = [...logos, ...logos];

  return (
    <section className={styles.section}>
      {heading && <p className={styles.heading}>{heading}</p>}
      {animated ? (
        <div className={styles.track}>
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      ) : (
        <div className={styles.staticGrid}>
          {logos.map((logo) => (
            <LogoItem key={logo.name} logo={logo} />
          ))}
        </div>
      )}
    </section>
  );
}
