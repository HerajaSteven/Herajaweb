import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Shield, Lock, Eye, FileCheck, Server, Key, Fingerprint, AlertTriangle } from 'lucide-react';

const capabilities = [
  { title: 'Data Encryption', description: 'End-to-end encryption for data at rest and in transit across all infrastructure.', icon: <Lock className="w-6 h-6 text-brand-primary" /> },
  { title: 'Access Control', description: 'Role-based access with fine-grained permissions and multi-factor authentication.', icon: <Key className="w-6 h-6 text-infra-identity" /> },
  { title: 'Audit Logging', description: 'Comprehensive audit trails for all system access, changes, and operations.', icon: <Eye className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Compliance Framework', description: 'Built-in compliance for GDPR, POPIA, and industry-specific regulations.', icon: <FileCheck className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Threat Detection', description: 'Automated threat monitoring and anomaly detection across the platform.', icon: <AlertTriangle className="w-6 h-6 text-brand-tertiary" /> },
  { title: 'Infrastructure Security', description: 'Network security, DDoS protection, and secure cloud deployment patterns.', icon: <Server className="w-6 h-6 text-infra-api" /> },
  { title: 'Identity Verification', description: 'Multi-factor identity verification for all platform participants.', icon: <Fingerprint className="w-6 h-6 text-infra-ai" /> },
  { title: 'Security Governance', description: 'Security policies, procedures, and governance frameworks for enterprise clients.', icon: <Shield className="w-6 h-6 text-brand-primary" /> },
];

const workflow = [
  { step: 'Security Assessment', description: 'Evaluate organizational security requirements and compliance obligations.' },
  { step: 'Policy Configuration', description: 'Configure security policies, access controls, and compliance settings.' },
  { step: 'Deployment', description: 'Deploy with security controls, encryption, and monitoring in place.' },
  { step: 'Monitoring', description: 'Continuous security monitoring with automated threat detection.' },
  { step: 'Audit & Review', description: 'Regular security audits, access reviews, and compliance assessments.' },
];

const benefits = [
  'Enterprise-grade encryption',
  'Multi-factor authentication',
  'Comprehensive audit trails',
  'Regulatory compliance',
  'Threat monitoring',
  'Access governance',
  'Data residency options',
  'Security reporting',
];

const faq = [
  { question: 'What security standards does Heraja follow?', answer: 'Heraja follows industry best practices including SOC 2, ISO 27001, GDPR, and POPIA compliance frameworks.' },
  { question: 'Is data encrypted?', answer: 'Yes. All data is encrypted at rest and in transit using industry-standard encryption algorithms.' },
  { question: 'Where is data stored?', answer: 'Data is stored in regional cloud deployments with options for data residency compliance.' },
];

export default function Security() {
  return (
    <PlatformTemplate
      overline="Security & Compliance"
      title="Enterprise Security Framework"
      description="Comprehensive security infrastructure providing encryption, access control, audit logging, threat detection, and compliance management for agricultural organizations."
      heroCta={{ label: 'Explore Identity', href: '/platform/identity' }}
      problemTitle="Agricultural Data Needs Enterprise Protection"
      problemDescription="Agricultural organizations handle sensitive operational, financial, and personal data. Without enterprise-grade security, this data is vulnerable to breaches, misuse, and compliance violations."
      whyTitle="Security Is Infrastructure"
      whyDescription="Security is not an add-on — it is foundational to everything Heraja builds. Every module includes enterprise-grade security, compliance, and governance capabilities."
      whyPoints={['Encryption everywhere', 'Compliance built-in', 'Continuous monitoring', 'Audit everything']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Identity & Access', href: '/platform/identity', description: 'Identity management' },
        { title: 'APIs', href: '/platform/apis', description: 'API security' },
        { title: 'Infrastructure Services', href: '/platform/infrastructure-services', description: 'Platform services' },
        { title: 'Architecture', href: '/platform/architecture', description: 'Full stack' },
      ]}
    />
  );
}
