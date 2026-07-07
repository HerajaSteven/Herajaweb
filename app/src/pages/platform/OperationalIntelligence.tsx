import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Brain, TrendingUp, Activity, AlertTriangle, LineChart, Zap, BarChart3, Globe } from 'lucide-react';

const capabilities = [
  { title: 'Demand Forecasting', description: 'Predictive models for supply and demand patterns across regions and commodities.', icon: <TrendingUp className="w-6 h-6 text-infra-ai" /> },
  { title: 'Operational Monitoring', description: 'Real-time dashboards tracking operational health and performance metrics.', icon: <Activity className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Risk Detection', description: 'Automated alerts for anomalies, delays, and potential operational issues.', icon: <AlertTriangle className="w-6 h-6 text-brand-tertiary" /> },
  { title: 'Performance Analytics', description: 'Deep analytics on organizational and ecosystem-wide performance.', icon: <BarChart3 className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Market Intelligence', description: 'Market trends, pricing data, and competitive intelligence.', icon: <Globe className="w-6 h-6 text-infra-api" /> },
  { title: 'Predictive Insights', description: 'AI-powered recommendations for operational optimization.', icon: <Brain className="w-6 h-6 text-infra-ai" /> },
  { title: 'Custom Dashboards', description: 'Configurable dashboards for different roles and use cases.', icon: <LineChart className="w-6 h-6 text-brand-primary" /> },
  { title: 'Automated Reporting', description: 'Scheduled and on-demand reports with distribution workflows.', icon: <Zap className="w-6 h-6 text-infra-identity" /> },
];

const workflow = [
  { step: 'Data Collection', description: 'Operational data flows from across the infrastructure into the intelligence layer.' },
  { step: 'Processing', description: 'Data is cleaned, normalized, and prepared for analysis and model training.' },
  { step: 'Analysis', description: 'AI models and analytical engines process data to generate insights.' },
  { step: 'Visualization', description: 'Results presented through dashboards, alerts, and automated reports.' },
  { step: 'Action', description: 'Organizations use insights to optimize operations and inform decisions.' },
];

const benefits = [
  'Data-driven decision making',
  'Early risk detection',
  'Demand pattern awareness',
  'Operational optimization',
  'Market intelligence access',
  'Performance benchmarking',
  'Automated insight delivery',
];

const faq = [
  { question: 'What is Operational Intelligence?', answer: 'It\'s where raw activity — production logs, movement, transactions — becomes a forecast, a flagged risk, or a decision an operations lead can act on, powered by monitoring, analytics, and AI.' },
  { question: 'What data sources are used?', answer: 'Operational Intelligence draws from all infrastructure modules — HAOS workflows, marketplace transactions, traceability records, and external data feeds.' },
  { question: 'How are predictions generated?', answer: 'Predictions use a combination of statistical models and machine learning trained on historical operational data, market patterns, and seasonal factors.' },
];

export default function OperationalIntelligence() {
  return (
    <PlatformTemplate
      overline="Operational Intelligence"
      title="Transforming Operational Data into Better Decisions"
      description="Real-time monitoring, predictive analytics, and AI-powered insights that help agricultural organizations optimize operations, detect risks, and make data-driven decisions."
      heroCta={{ label: 'Explore AI Research', href: '/innovation/ai' }}
      problemTitle="Agricultural Decisions Are Made Without Sufficient Data"
      problemDescription="Most agricultural organizations operate with limited visibility into their operations, markets, and risks. Decisions are often reactive rather than proactive."
      whyTitle="Intelligence Enables Proactive Operations"
      whyDescription="Heraja Operational Intelligence collects data from across the infrastructure, applies advanced analytics and AI, and delivers actionable insights to decision-makers."
      whyPoints={['Real-time operational visibility', 'Predictive risk detection', 'Market intelligence', 'Performance analytics']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'AI & Research', href: '/innovation/ai', description: 'Artificial Intelligence' },
        { title: 'HAOS', href: '/platform/haos', description: 'Operating system' },
        { title: 'Marketplace', href: '/platform/marketplace', description: 'Trade data' },
        { title: 'Traceability', href: '/platform/traceability', description: 'Chain data' },
        { title: 'APIs', href: '/platform/apis', description: 'Data access' },
      ]}
    />
  );
}
