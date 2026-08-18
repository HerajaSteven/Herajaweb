import PlatformTemplate from '@/components/layout/PlatformTemplate';
import { Shield, Lock, Eye, Server, Key, Fingerprint } from 'lucide-react';

/*
 * ── THE MOST EXPENSIVE PAGE ON THE SITE TO GET WRONG ─────────────────────
 *
 * This page claimed, in an FAQ answer collapsed behind a click:
 *
 *     "Heraja follows industry best practices including SOC 2, ISO 27001,
 *      GDPR, and POPIA compliance frameworks."
 *
 * Heraja holds none of those. SOC 2 and ISO 27001 are audited attestations
 * with certificates and dates; a reader who sees them named asks for the
 * report, and there is no report. The hedge — "follows industry best
 * practices including" — does not survive being read by a procurement team,
 * and it is not meant to; it is the shape a claim takes when someone wants
 * credit for a certification without holding one.
 *
 * It sat inside an accordion, which is why every previous audit missed it.
 * The rendered content scan only found it once it started clicking things
 * open (scripts/check-content.mjs).
 *
 * The same page also claimed multi-factor authentication, end-to-end
 * encryption, automated threat detection, DDoS protection, data-residency
 * options and regular security audits. None of those is supported.
 *
 * ── WHAT IS ACTUALLY TRUE, AND WHY IT IS ENOUGH ──────────────────────────
 *
 * Role-based permissions, a tenant boundary enforced at the query layer, one
 * identity across the applications, and an audit trail on the records: those
 * exist, they are architectural rather than aspirational, and an engineer can
 * verify every one of them in a technical session. That is a better position
 * than a certification list that collapses under the first question — Phase 1
 * §17 rule 5, absence is stated rather than implied.
 *
 * [CONTENT REQUIRED] If a certification or an external penetration test is
 * ever obtained, it belongs here named, dated and attributed to the assessor.
 * Nothing in this file should be reworded to imply one in the meantime.
 */

const capabilities = [
  {
    title: 'Role-based access control',
    description:
      'Permissions are defined per role and checked on every action, rather than by special-casing an administrator account.',
    icon: <Key className="w-6 h-6 text-infra-identity" />,
  },
  {
    title: 'Tenant isolation',
    description:
      'Every organization is a tenant, and queries are scoped to the tenant that owns the data — enforced in the platform, not re-implemented per application.',
    icon: <Server className="w-6 h-6 text-infra-api" />,
  },
  {
    title: 'Audit trail',
    description:
      'Records carry who created or changed them and when, so an operational claim can be traced back to the entry that supports it.',
    icon: <Eye className="w-6 h-6 text-infra-traceability" />,
  },
  {
    title: 'One identity across applications',
    description:
      'Access is granted once and applies consistently across all four applications, so removing someone removes them everywhere.',
    icon: <Fingerprint className="w-6 h-6 text-infra-ai" />,
  },
  {
    title: 'Encrypted in transit',
    description:
      'All traffic between a user and the platform is served over TLS. We do not claim end-to-end encryption — see the FAQ for why that would be untrue.',
    icon: <Lock className="w-6 h-6 text-brand-primary" />,
  },
  {
    title: 'Verification gates',
    description:
      'Identity verification is required before the operations that need it, rather than applied uniformly to everything a user might do.',
    icon: <Shield className="w-6 h-6 text-brand-primary" />,
  },
];

const workflow = [
  { step: 'Define roles', description: 'Set out the roles your organization uses and what each one is permitted to do.' },
  { step: 'Configure the tenant', description: 'Your organization becomes a tenant with its own data boundary and its own users.' },
  { step: 'Grant access once', description: 'A user is granted access at the platform level and it applies across the applications they need.' },
  { step: 'Operate', description: 'Every action is permission-checked and every record change is attributed.' },
  { step: 'Review', description: 'Access and the audit trail are reviewable by your own administrators, not only by us.' },
];

const benefits = [
  'Permissions defined per role',
  'Per-tenant data boundary',
  'Attributed record history',
  'One identity across applications',
  'TLS in transit',
  'Administrator-reviewable access',
];

const faq = [
  {
    question: 'What security certifications does Heraja hold?',
    answer:
      'None. Heraja holds no SOC 2 report, no ISO 27001 certificate and no equivalent third-party attestation, and this site claims none. Access control, tenant isolation and audit logging are built into the platform and we will walk an engineering or risk team through any of them in a technical review — but a certification is an audited document, and we do not have one to show you.',
  },
  {
    question: 'Is data encrypted?',
    answer:
      'In transit, yes — all traffic is served over TLS. We do not claim end-to-end encryption, because it would not be true: the platform reads and writes the records it stores, which is precisely what makes verification, audit and operational intelligence possible. A system that could not read your records could not check them.',
  },
  {
    question: 'Where is data stored, and can we require residency?',
    answer:
      'Data is held in a managed cloud database. Residency is a question we answer per engagement rather than a configuration option we currently offer — ask us and we will tell you what is and is not possible, which is more useful than a list of options that has not been built.',
  },
  {
    question: 'Is Heraja compliant with GDPR or POPIA?',
    answer:
      'Compliance is a property of how an organization operates, not something a platform confers, and no external assessment of Heraja against either regime has been carried out. What the platform provides is the mechanism — access control, attribution, and a per-tenant data boundary — that a compliance programme is built on. We will not tell you that adopting HAOS makes you compliant.',
  },
];

export default function Security() {
  return (
    <PlatformTemplate
      overline="Security & Access"
      title="Security and access control"
      description="Role-based permissions, a per-tenant data boundary, and an attributed audit trail — with an explicit account of what is not claimed."
      heroCta={{ label: 'See the architecture', href: '/platform/architecture' }}
      problemTitle="Agricultural data is operational, financial and personal at once"
      problemDescription="A single production record can carry a farmer's identity, a lender's exposure and a programme's reporting obligation. Organizations that coordinate through spreadsheets and messaging apps have no way to say who saw what, who changed what, or which organization's data is which."
      whyTitle="Access control belongs in the platform"
      whyDescription="If each application implements its own permissions, they drift, and the weakest one becomes the way in. Identity, permissions, the tenant boundary and the audit trail sit in HAOS, so all four applications inherit the same rules rather than approximating them."
      whyPoints={[
        'Permissions checked per action',
        'Tenant boundary enforced at the query layer',
        'Record changes attributed',
        'No certification claimed',
      ]}
      capabilities={capabilities}
      workflow={workflow}
      benefits={benefits}
      faq={faq}
      relatedPages={[
        { title: 'Architecture', href: '/platform/architecture', description: 'How the platform is put together' },
        { title: 'APIs & integration', href: '/platform/apis', description: 'The external surface' },
        { title: 'HAOS', href: '/platform/haos', description: 'The operating system' },
      ]}
    />
  );
}
