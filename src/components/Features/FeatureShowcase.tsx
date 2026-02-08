import { useState } from 'react';
import { BarChart3, Users, Zap, Globe } from 'lucide-react';
import styles from './FeatureShowcase.module.css';

interface Tab {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const tabs: Tab[] = [
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'BarChart3',
    title: 'Real-time Analytics Dashboard',
    description: 'Track everything that matters with beautiful, real-time dashboards and custom metrics.',
    features: [
      'Live visitor tracking',
      'Custom event tracking',
      'Conversion funnels',
      'Cohort analysis',
      'A/B testing insights',
    ],
  },
  {
    id: 'team',
    label: 'Team',
    icon: 'Users',
    title: 'Seamless Team Collaboration',
    description: 'Built for teams of all sizes with powerful collaboration features.',
    features: [
      'Unlimited team members',
      'Role-based permissions',
      'Activity timeline',
      'Comments & mentions',
      'Shared workspaces',
    ],
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: 'Zap',
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed with cutting-edge technology and global CDN.',
    features: [
      'Sub-second page loads',
      'Edge caching',
      'Image optimization',
      'Lazy loading',
      '99.99% uptime SLA',
    ],
  },
  {
    id: 'global',
    label: 'Global',
    icon: 'Globe',
    title: 'Global Scale & Reach',
    description: 'Deploy worldwide with our global infrastructure and multi-region support.',
    features: [
      '50+ global regions',
      'Auto-scaling',
      'DDoS protection',
      'Multi-CDN',
      'Geo-routing',
    ],
  },
];

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  BarChart3, Users, Zap, Globe,
};

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const Icon = iconMap[currentTab.icon] || BarChart3;

  return (
    <div className={styles.showcase}>
      <div className={styles.tabs}>
        {tabs.map((tab) => {
          const TabIcon = iconMap[tab.icon];
          return (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {TabIcon && <TabIcon size={18} />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.iconLarge}>
            <Icon size={40} />
          </div>
          <h3 className={styles.title}>{currentTab.title}</h3>
          <p className={styles.description}>{currentTab.description}</p>
          
          <ul className={styles.features}>
            {currentTab.features.map((feature, index) => (
              <li key={index} className={styles.feature}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.checkIcon}>
                  <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.1" />
                  <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.preview}>
            <div className={styles.previewGradient}></div>
            <div className={styles.previewContent}>
              <div className={styles.previewIcon}>
                <Icon size={64} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
