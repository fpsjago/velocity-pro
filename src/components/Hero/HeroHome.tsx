import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import ParticlesBackground from '../Particles/ParticlesBackground';
import styles from './HeroHome.module.css';

const BASE_URL = import.meta.env.BASE_URL;

interface HeroHomeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function HeroHome({
  title = 'Ship your SaaS',
  subtitle = '10x faster',
  description = 'The premium Astro template with modern animations, particle effects, and gradient backgrounds. Built for founders who ship fast.',
  ctaPrimary = 'Get Started Free',
  ctaSecondary = 'View Features',
}: HeroHomeProps) {
  return (
    <section className={styles.hero}>
      <ParticlesBackground variant="gradient" />
      
      <div className={styles.gradientOverlay}></div>
      
      <div className={styles.content}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Now in Beta</span>
        </div>
        
        <h1 className={styles.title}>
          {title}
          <br />
          <span className={styles.gradientText}>{subtitle}</span>
        </h1>
        
        <p className={styles.description}>
          {description}
        </p>
        
        <div className={styles.ctas}>
          <a href={`${BASE_URL}/signup/`} className={styles.ctaPrimary}>
            {ctaPrimary}
            <ArrowRight size={18} />
          </a>
          <a href={`${BASE_URL}/features/`} className={styles.ctaSecondary}>
            <Zap size={18} />
            {ctaSecondary}
          </a>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>48</div>
            <div className={styles.statLabel}>Components</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Pages</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Themes</div>
          </div>
        </div>
      </div>
      
      <div className={styles.floatingOrbs}>
        <div className={styles.orb} style={{ '--delay': '0s' } as React.CSSProperties}></div>
        <div className={styles.orb} style={{ '--delay': '2s' } as React.CSSProperties}></div>
        <div className={styles.orb} style={{ '--delay': '4s' } as React.CSSProperties}></div>
      </div>
    </section>
  );
}
