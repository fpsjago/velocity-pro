import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import styles from './ParticlesBackground.module.css';

interface ParticlesBackgroundProps {
  variant?: 'default' | 'gradient' | 'minimal';
}

export default function ParticlesBackground({ variant = 'default' }: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: variant === 'gradient' ? ['#667eea', '#764ba2', '#f093fb'] : '#667eea',
      },
      links: {
        color: '#667eea',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: variant === 'minimal' ? 0.5 : 1,
        direction: 'none' as const,
        random: false,
        straight: false,
        outModes: {
          default: 'bounce' as const,
        },
      },
      number: {
        density: {
          enable: true,
        },
        value: variant === 'minimal' ? 40 : 80,
      },
      opacity: {
        value: variant === 'gradient' ? 0.6 : 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: variant === 'gradient' ? 4 : 3 },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <div className={styles.particlesContainer}>
      <Particles options={particlesConfig} className={styles.particles} />
    </div>
  );
}
