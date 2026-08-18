import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import ProseTemplate from '@/components/layout/ProseTemplate';
import { careerBenefits, vacancies } from '@/config/siteContent';

/*
 * ── WHAT THIS PAGE MAY AND MAY NOT SAY ───────────────────────────────────
 *
 * Two rounds of fabrication have been removed from this page, and the second
 * is the subtler one.
 *
 * 1 · FIVE INVENTED VACANCIES. "Senior Platform Engineer — Lagos / Remote —
 *     Full-time" and four like it, each with an Apply button. None came from
 *     the company. A real engineer could have spent an evening writing an
 *     application for a role that does not exist, which is a worse outcome
 *     than any invented statistic produces.
 *
 * 2 · SIX BENEFITS. [CONTENT REQUIRED] The page listed:
 *
 *         Competitive compensation
 *         Health insurance
 *         Flexible working arrangements
 *         Professional development budget
 *         Meaningful equity participation
 *         Annual team retreats
 *
 *     These are PLAUSIBLE, and plausible is not verified. Nobody supplied
 *     them, and "health insurance" and "meaningful equity participation" are
 *     employment terms — a candidate who reads them forms an expectation about
 *     what they will be offered, and the company has never agreed to it.
 *     Health cover and equity in particular are the two terms people weigh an
 *     offer against.
 *
 *     They are recorded as NEEDS VERIFICATION in
 *     docs/content-integrity-register.md (CI-063 → CI-068), preserved verbatim
 *     above, and withheld from the page until someone confirms them. Restoring
 *     them is a paste. Retracting a benefit a candidate accepted an interview
 *     over is not.
 *
 * WHAT MAY NOT BE WRITTEN INSTEAD. "No current openings" and "no benefits" are
 * assertions too, and equally unsupported — the company may well be hiring on
 * good terms. Even "We're hiring", which stood in the H1 block, claims more
 * than is known. What is left is the part that is true: applications are read,
 * and here is where to send one.
 */
export default function Careers() {
  return (
    <ProseTemplate
      eyebrow="Company / Careers"
      title="Working at Heraja"
      lede="We build operating infrastructure for agriculture — the coordination layer underneath production, movement and market access."
      description="How to approach Heraja Agro Technologies about work, and what the engineering problem actually is."
    >
      <h2 className="text-h2 mb-4">The work</h2>
      <p className="text-body-large text-neutral-700 mb-6">
        Heraja builds one platform and the applications that run on it. The problems are
        operational rather than novel: making a record created on a phone in a field mean the
        same thing to a buyer, a lender and a programme auditor; keeping one identity and one
        audit trail consistent across four applications; making all of it work on the handset a
        farmer already owns, on the bandwidth they already have.
      </p>
      <p className="text-body-large text-neutral-700 mb-10">
        If you want to see the standard before deciding whether to write, the{' '}
        <Link to="/platform/architecture" className="text-brand-accent underline underline-offset-2">
          architecture
        </Link>{' '}
        and the{' '}
        <Link to="/platform/farm-intelligence" className="text-brand-accent underline underline-offset-2">
          product screenshots
        </Link>{' '}
        are the most honest description of it on this site.
      </p>

      {/*
        Both sections below appear only when someone has entered them in the
        HAOS admin. Empty means the page says nothing about benefits or
        vacancies — not "no benefits", not "no current openings", because those
        are assertions too and nobody has made them.
      */}
      {vacancies.length > 0 && (
        <>
          <h2 className="text-h2 mb-4">Open roles</h2>
          <ul className="space-y-3 mb-12 list-none p-0">
            {vacancies.map((role) => (
              <li
                key={`${role.title}-${role.location}`}
                className="bg-surface-elevated rounded-lg border border-neutral-300 p-5 min-w-0"
              >
                <h3 className="text-h4 mb-1">{role.title}</h3>
                <p className="text-body-small text-neutral-600">
                  {[role.location, role.type].filter(Boolean).join(' · ')}
                </p>
                {role.url && (
                  <a
                    href={role.url}
                    className="inline-flex items-center gap-1.5 mt-3 text-body-small font-medium text-brand-accent underline underline-offset-2"
                  >
                    Apply <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {careerBenefits.length > 0 && (
        <>
          <h2 className="text-h2 mb-4">What we offer</h2>
          <ul className="space-y-2 mb-12 list-none p-0">
            {careerBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-body-large text-neutral-700">
                <Check
                  className="w-4 h-4 text-brand-accent flex-shrink-0 mt-1.5"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 className="text-h2 mb-4">How to reach us</h2>
      <div className="bg-surface-elevated rounded-lg border border-neutral-300 p-6">
        <p className="text-body text-neutral-700 mb-4">
          {vacancies.length > 0
            ? 'If none of the roles above is quite right, write to us anyway — tell us what you have built and where you think you would fit, and it will reach the people who make the decision.'
            : 'We do not publish a vacancy list on this site. If this is the kind of work you want to do, write to us — tell us what you have built and where you think you would fit, and it will reach the people who make the decision. Terms are discussed directly, with the people who can answer for them.'}
        </p>
        <Link to="/company/contact?enquiry=careers" className="btn-primary">
          Write to us <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </ProseTemplate>
  );
}
