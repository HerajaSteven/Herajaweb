import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Fingerprint, UserCheck, Shield, Key, Users, Building2, FileCheck, Lock } from 'lucide-react';

const capabilities = [
  { title: 'Digital Profiles', description: 'Comprehensive digital identity for individuals and organizations.', icon: <Fingerprint className="w-6 h-6 text-infra-identity" /> },
  { title: 'Identity Verification', description: 'Multi-factor identity verification with document validation.', icon: <UserCheck className="w-6 h-6 text-infra-marketplace" /> },
  { title: 'Role Management', description: 'Granular role-based access across organizational hierarchies.', icon: <Users className="w-6 h-6 text-infra-traceability" /> },
  { title: 'Organization Profiles', description: 'Verified organization profiles with operational history.', icon: <Building2 className="w-6 h-6 text-infra-ai" /> },
  { title: 'Access Control', description: 'Fine-grained permissions for data, features, and operations.', icon: <Key className="w-6 h-6 text-brand-primary" /> },
  { title: 'Compliance Engine', description: 'Automated compliance checks for regulatory requirements.', icon: <FileCheck className="w-6 h-6 text-infra-api" /> },
  { title: 'Security Framework', description: 'Enterprise security with audit logging and threat detection.', icon: <Shield className="w-6 h-6 text-brand-primary" /> },
  { title: 'Credential Management', description: 'Issuance and verification of digital credentials and certificates.', icon: <Lock className="w-6 h-6 text-infra-identity" /> },
];

const workflow = [
  { step: 'Registration', description: 'Individuals and organizations register with identity documentation.' },
  { step: 'Verification', description: 'Submitted documents validated through multi-factor verification.' },
  { step: 'Role Assignment', description: 'Appropriate roles and permissions assigned within organizational context.' },
  { step: 'Access', description: 'Verified identities access platform features and data per their permissions.' },
  { step: 'Ongoing Management', description: 'Continuous verification, access reviews, and credential updates.' },
];

const benefits = [
  'Verified stakeholder identities',
  'Granular access control',
  'Regulatory compliance',
  'Audit trail for access',
  'Reduced fraud risk',
  'Streamlined onboarding',
  'Credential portability',
];

const faq = [
  { question: 'What is Identity & Access?', answer: 'It\'s the digital profile, verification, and permissions system behind every stakeholder on the platform — so access to data and features is based on who someone actually is, not just a login.' },
  { question: 'How are identities verified?', answer: 'Through a combination of document verification, biometric checks, organizational validation, and ongoing monitoring.' },
  { question: 'Is this compliant with data protection regulations?', answer: 'Yes. The identity system is designed with privacy-by-design principles and supports GDPR, POPIA, and other regional data protection requirements.' },
];

export default function Identity() {
  return (
    <PlatformTemplate
      overline="Identity & Access"
      title="Digital Identity and Access Infrastructure"
      description="Digital profiles, role-based access, and enterprise-grade security — the identity layer that lets an organization know who it's actually dealing with."
      heroCta={{ label: 'Explore Security', href: '/platform/security' }}
      problemTitle="Agricultural Ecosystems Run on Unverified Identity"
      problemDescription="Unverified participants create risk. Unauthorized access compromises data. Manual identity checks are slow and error-prone, and most organizations have no trusted way to confirm who they're actually working with."
      whyTitle="A Trusted Identity Layer Underneath Everything"
      whyDescription="Every other Heraja capability — traceability, marketplace, logistics — assumes it knows who's on the other end of a transaction. Identity is what makes that assumption safe: every participant checked once, then recognized everywhere."
      whyPoints={['Multi-factor verification', 'Role-based access', 'Privacy-by-design', 'Audit compliance']}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Security', href: '/platform/security', description: 'Security framework' },
        { title: 'HAOS', href: '/platform/haos', description: 'Operating system' },
        { title: 'APIs', href: '/platform/apis', description: 'Integration' },
        { title: 'Architecture', href: '/platform/architecture', description: 'Full stack' },
      ]}
    />
  );
}
