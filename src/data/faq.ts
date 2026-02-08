export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'What is included in the free trial?',
    answer: 'The 14-day free trial includes full access to all features of your chosen plan. No credit card required to start. You can upgrade, downgrade, or cancel at any time during the trial.',
    category: 'pricing',
  },
  {
    id: '2',
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you will be charged the prorated difference. When downgrading, the remaining balance will be credited to your account.',
    category: 'pricing',
  },
  {
    id: '3',
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee on all plans. If you are not satisfied with Velocity Pro, contact our support team for a full refund — no questions asked.',
    category: 'pricing',
  },
  {
    id: '4',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans. All payments are processed securely through Stripe.',
    category: 'pricing',
  },
  {
    id: '5',
    question: 'Is there a discount for annual billing?',
    answer: 'Yes! When you choose annual billing, you save approximately 20% compared to monthly billing. The discount is applied automatically at checkout.',
    category: 'pricing',
  },
  {
    id: '6',
    question: 'How do I get started?',
    answer: 'Sign up for a free trial, choose your plan, and you will be up and running in minutes. Our onboarding wizard will guide you through the initial setup, and our docs cover everything else.',
    category: 'general',
  },
  {
    id: '7',
    question: 'Do you offer custom Enterprise plans?',
    answer: 'Absolutely. Our Enterprise plan is fully customizable — dedicated infrastructure, custom SLAs, priority support, and bespoke integrations. Contact our sales team to discuss your needs.',
    category: 'pricing',
  },
  {
    id: '8',
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support with 24-hour response times. Pro plans get priority support with 4-hour response. Enterprise customers receive a dedicated success manager and phone support.',
    category: 'general',
  },
  {
    id: '9',
    question: 'Is my data secure?',
    answer: 'Security is our top priority. All data is encrypted at rest and in transit. We are SOC 2 Type II certified, GDPR compliant, and undergo regular third-party security audits.',
    category: 'general',
  },
  {
    id: '10',
    question: 'Can I export my data?',
    answer: 'Yes, you own your data. Pro and Enterprise plans include full data export in CSV, JSON, or via our API. You can export everything at any time from your dashboard settings.',
    category: 'general',
  },
];

export const pricingFaqItems = faqItems.filter(item => item.category === 'pricing');
