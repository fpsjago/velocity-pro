import { useEffect, useRef, useState } from 'react';
import { Zap, Lock, Users, TrendingUp, Sparkles, Globe } from 'lucide-react';
import styles from './FeatureBento.module.css';

interface BentoItem {
  title: string;
  description: string;
  icon: string;
  size: 'small' | 'medium' | 'large';
  gradient?: string;
}

const bentoItems: BentoItem[] = [
  {
    title: 'Lightning Performance',
    description: 'Optimized for speed with Astro static site generation. Load times under 1 second.',
    icon: 'Zap',
    size: 'large',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance ready.',
    icon: 'Lock',
    size: 'medium',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Team Collaboration',
    description: 'Built for teams of all sizes.',
    icon: 'Users',
    size: 'small',
  },
  {
    title: 'Global CDN',
    description: 'Blazing fast worldwide delivery.',
    icon: 'Globe',
    size: 'small',
  },
  {
    title: 'Advanced Analytics',
    description: 'Real-time insights with beautiful dashboards and custom metrics.',
    icon: 'TrendingUp',
    size: 'medium',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'AI-Powered',
    description: 'Smart automation to save you time.',
    icon: 'Sparkles',
    size: 'small',
  },
];

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Zap, Lock, Users, TrendingUp, Sparkles, Globe,
};

export default function FeatureBento() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={styles.bento}>
      {bentoItems.map((item, index) => {
        const Icon = iconMap[item.icon] || Zap;
        
        return (
          <div
            key={item.title}
            className={`${styles.card} ${styles[item.size]} ${isVisible ? styles.visible : ''}`}
            style={{ 
              '--index': index,
              '--gradient': item.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            } as React.CSSProperties}
          >
            <div className={styles.content}>
              <div className={styles.iconWrapper}>
                <Icon size={item.size === 'large' ? 32 : 24} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.gradientOverlay}></div>
          </div>
        );
      })}
    </div>
  );
}
