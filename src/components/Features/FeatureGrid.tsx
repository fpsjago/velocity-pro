import { Zap, Shield, Plug, BarChart3, Sparkles, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './FeatureGrid.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: 'Zap',
    title: 'Lightning Fast',
    description: 'Built on Astro 5 for optimal performance and speed.',
  },
  {
    icon: 'Shield',
    title: 'Secure by Default',
    description: 'Enterprise-grade security with best practices baked in.',
  },
  {
    icon: 'Plug',
    title: '100+ Integrations',
    description: 'Connect with all your favorite tools seamlessly.',
  },
  {
    icon: 'BarChart3',
    title: 'Real-time Analytics',
    description: 'Track everything that matters with powerful insights.',
  },
  {
    icon: 'Sparkles',
    title: 'Beautiful Design',
    description: 'Pixel-perfect UI with modern gradient animations.',
  },
  {
    icon: 'Rocket',
    title: 'Ship Faster',
    description: 'Pre-built components to accelerate your development.',
  },
];

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Zap,
  Shield,
  Plug,
  BarChart3,
  Sparkles,
  Rocket,
};

export default function FeatureGrid({ features = defaultFeatures }: FeatureGridProps) {
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
    <div ref={sectionRef} className={styles.grid}>
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon] || Zap;
        
        return (
          <div
            key={feature.title}
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{ '--index': index } as React.CSSProperties}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.iconGradient}></div>
              <Icon className={styles.icon} size={24} />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
