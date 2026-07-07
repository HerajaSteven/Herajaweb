import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Zap, Bell, Database, Cloud, Settings, Layers, RefreshCw, Monitor } from 'lucide-react';

const capabilities = [
  { title: 'Notification Engine', description: 'Multi-channel alerts, notifications, and communication workflows.', icon: <Bell className="w-6 h-6 text-brand-primary" /> },
  { title: 'Data Layer', description: 'Unified data management, storage, and governance across the platform.', icon: <Database className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Cloud Platform', description: 'Scalable cloud-native deployment with auto-scaling and high availability.', icon: <Cloud className="w-6 h-6 text-infra-api" /> },
  { title: 'Configuration', description: 'Organization-specific configuration and customization management.', icon: <Settings className="w-6 h-6 text-infra-identity" /> },
  { title: 'Service Mesh', description: 'Inter-service communication, load balancing, and fault tolerance.', icon: <Layers className="w-6 h-6 text-infra-ai" /> },
  { title: 'Synchronization', description: 'Real-time data sync across regions, devices, and external systems.', icon: <RefreshCw className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Monitoring', description: 'System health monitoring, performance metrics, and alerting.', icon: <Monitor className="w-6 h-6 text-brand-primary" /> },
  { title: 'Integration Bus', description: 'Enterprise service bus for reliable system-to-system communication.', icon: <Zap className="w-6 h-6 text-infra-identity" /> },
];

const benefits = [
  'Reliable notification delivery',
  'Unified data governance',
  'Scalable cloud deployment',
  'Organization flexibility',
  'Fault-tolerant architecture',
  'Real-time synchronization',
  'Proactive monitoring',
  'Robust integration patterns',
];

const faq = [
  { question: 'What are Infrastructure Services?', answer: 'Infrastructure Services are the shared platform capabilities that power all Heraja modules — notifications, data management, cloud deployment, monitoring, and system integration.' },
  { question: 'How reliable is the platform?', answer: 'Heraja infrastructure targets 99.9% uptime with redundancy, auto-scaling, and disaster recovery capabilities across multiple regions.' },
];

export default function InfrastructureServices() {
  return (
    <PlatformTemplate
      overline="Infrastructure Services"
      title="Shared Services Powering Every Connected Organization"
      description="The foundational services that keep Heraja infrastructure running — notifications, data management, cloud deployment, monitoring, and system integration."
      heroCta={{ label: 'Explore APIs', href: '/platform/apis' }}
      problemTitle="Platform Services Are Often Overlooked"
      problemDescription="Without reliable notifications, data management, monitoring, and integration, even the best application features fail. Infrastructure services are the foundation everything else builds on."
      whyTitle="Reliable Services Enable Reliable Operations"
      whyDescription="Notifications, data storage, monitoring, and system integration rarely get noticed when they work — only when they don't. These are the shared services that keep every other capability running without organizations having to build or maintain them separately."
      whyPoints={['99.9% uptime target', 'Multi-region deployment', 'Auto-scaling', 'Disaster recovery']}
      capabilities={capabilities}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'APIs', href: '/platform/apis', description: 'Integration layer' },
        { title: 'Security', href: '/platform/security', description: 'Security framework' },
        { title: 'Architecture', href: '/platform/architecture', description: 'Full stack' },
        { title: 'HAOS', href: '/platform/haos', description: 'Operating system' },
      ]}
    />
  );
}
