export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  currency: string;
  popular?: boolean;
  features: string[];
  cta: string;
  ctaLink: string;
}

export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    starter: string | boolean;
    pro: string | boolean;
    enterprise: string | boolean;
  }[];
}

export const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for side projects and MVPs.',
    monthlyPrice: 19,
    annualPrice: 15,
    currency: '$',
    features: [
      'Up to 1,000 users',
      '5 GB storage',
      'Basic analytics',
      'Email support',
      'API access',
      '1 team member',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams who need more power.',
    monthlyPrice: 49,
    annualPrice: 39,
    currency: '$',
    popular: true,
    features: [
      'Up to 25,000 users',
      '50 GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Up to 10 team members',
      'Custom integrations',
      'SSO / SAML',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations that need scale and control.',
    monthlyPrice: 149,
    annualPrice: 119,
    currency: '$',
    features: [
      'Unlimited users',
      '500 GB storage',
      'Enterprise analytics',
      'Dedicated support',
      'API access',
      'Unlimited team members',
      'Custom integrations',
      'SSO / SAML',
      'SLA guarantee',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
  },
];

export const comparisonFeatures: ComparisonFeature[] = [
  {
    category: 'Core Features',
    features: [
      { name: 'Users', starter: '1,000', pro: '25,000', enterprise: 'Unlimited' },
      { name: 'Storage', starter: '5 GB', pro: '50 GB', enterprise: '500 GB' },
      { name: 'API Access', starter: true, pro: true, enterprise: true },
      { name: 'Webhooks', starter: false, pro: true, enterprise: true },
      { name: 'Custom domain', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Analytics',
    features: [
      { name: 'Basic dashboard', starter: true, pro: true, enterprise: true },
      { name: 'Advanced reports', starter: false, pro: true, enterprise: true },
      { name: 'Custom events', starter: false, pro: true, enterprise: true },
      { name: 'Data export', starter: false, pro: true, enterprise: true },
      { name: 'Real-time analytics', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Security & Compliance',
    features: [
      { name: 'SSL encryption', starter: true, pro: true, enterprise: true },
      { name: 'Two-factor auth', starter: true, pro: true, enterprise: true },
      { name: 'SSO / SAML', starter: false, pro: true, enterprise: true },
      { name: 'Audit logs', starter: false, pro: false, enterprise: true },
      { name: 'SOC 2 compliance', starter: false, pro: false, enterprise: true },
      { name: 'Custom BAA', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', starter: true, pro: true, enterprise: true },
      { name: 'Priority support', starter: false, pro: true, enterprise: true },
      { name: 'Dedicated manager', starter: false, pro: false, enterprise: true },
      { name: 'SLA guarantee', starter: false, pro: false, enterprise: true },
      { name: 'Custom training', starter: false, pro: false, enterprise: true },
    ],
  },
];
