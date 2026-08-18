import { Link } from 'react-router-dom';
import ProseTemplate from '@/components/layout/ProseTemplate';
import { hasLeadership } from '@/config/siteContent';

/*
 * About, as Phase 5 §8.7 specifies it: a prose page in the reading container.
 *
 * WHAT WAS REMOVED. Three "values" cards — Infrastructure First, Transparency,
 * Impact — with icon tiles and a scroll-reveal, and a closing "Join Our Team /
 * We're building something transformative". Value cards are the part of an
 * About page that says nothing: every company claims transparency, so claiming
 * it transfers no information, and the icon-card treatment gave three slogans
 * the same visual weight as the two paragraphs that actually explain the
 * business. The beliefs that survive are the ones with a consequence attached.
 *
 * WHAT WAS NOT ADDED, DELIBERATELY. No founding date, no milestones, no team
 * size, no offices, no funding history, no customer count. None of it was
 * supplied, and an About page is the first place a diligence reader checks a
 * claim they can verify independently through a registry.
 *
 * WHAT IS KEPT AND FLAGGED. "Founded in Lagos, Nigeria" is the company's own
 * pre-existing copy, carried over from the site Phase 0 audited. It is
 * recorded as NEEDS VERIFICATION (CI-055) rather than deleted: it is a
 * company self-description that only the company can confirm, and removing
 * where a company was founded would say something too.
 *
 * LEADERSHIP (§13, Phase 5 §8.4) stays conditional. The link below appears
 * only once real people have been entered in the HAOS admin — the same flag
 * that publishes the page itself and its sitemap entry. No placeholder
 * executives, no generated portraits, and no sentence implying names exist.
 */
export default function About() {
  return (
    <ProseTemplate
      eyebrow="Company / About"
      title="About Heraja"
      lede="Heraja Agro Technologies builds the operating infrastructure for agriculture — the coordination layer underneath production, movement and market access."
      cta={{
        title: 'Talk to us',
        description:
          'Tell us what you are evaluating and we will point you at the part of the platform that answers it.',
        primaryCta: { label: 'Talk to us', href: '/company/contact' },
        secondaryCta: { label: 'Explore the platform', href: '/platform' },
      }}
    >
      <h2 className="text-h2 mb-4">Why we exist</h2>
      {/*
        "WAS FOUNDED IN LAGOS, NIGERIA" WAS REMOVED FROM THIS SENTENCE.

        It was the company's own pre-existing copy, carried over from the site
        Phase 0 audited — and a previous version of a website is not
        verification. No incorporation record, registry entry or owner
        statement supports it in this repository or in the session that
        produced this page.

        It is also four different claims wearing one coat: where the company
        was founded, where it is registered, where it is headquartered, and
        where it operates now are separate facts that a diligence reader will
        check separately, against a public registry.

        So the founding-event claim is gone and nothing was guessed in its
        place. What remains is the observation that motivated the company,
        which asserts nothing about corporate history. Nigeria as the
        operating context is supported elsewhere and independently — the
        pilot, Zimo Clan, and the roadmap's "Nigeria — Operating".

        Recorded as NEEDS VERIFICATION in docs/phase-7-decision-register.md §C.
        One confirmed sentence restores it.
      */}
      <p className="text-body-large text-neutral-700 mb-4">
        Heraja Agro Technologies exists because of a pattern that repeats across production
        regions: strong farmers, real demand from buyers, and almost nothing connecting the two
        reliably. A producer&apos;s output was invisible to a buyer until it showed up — or
        didn&apos;t. Losses happened not because crops failed, but because aggregation was late, a
        truck never arrived, or nobody could confirm what a shipment actually contained.
      </p>
      <p className="text-body-large text-neutral-700 mb-6">
        That gap is what Heraja was built to close — not with another lending product or another
        app that asks farmers to change how they work, but with the connective layer underneath:
        registration, reporting, movement and verification, in one place.
      </p>
      <p className="text-h4 text-brand-primary border-l-4 border-brand-accent pl-4 mb-12">
        Agriculture does not only need financing. It needs operational coordination
        infrastructure.
      </p>

      <h2 className="text-h2 mb-4">Why infrastructure rather than software</h2>
      <p className="text-body-large text-neutral-700 mb-12">
        Across Africa, mobile money and national digital ID programmes became the shared
        infrastructure that payments and identity now run on. Agriculture still has no equivalent.
        Every organisation builds its own registration, its own reporting, its own way of proving
        what happened — and none of it travels. A cooperative&apos;s records mean nothing to the
        bank; the bank&apos;s verification means nothing to the programme auditor. Building that
        layer once, for everyone to connect to, is a different exercise from building another
        farm app.
      </p>

      <h2 className="text-h2 mb-4">What we build</h2>
      <p className="text-body-large text-neutral-700 mb-6">
        HAOS — the Heraja Agricultural Operating System — is the platform. It holds identity,
        verification, multi-tenancy and the audit trail, and four applications run on top of it:
        Farm Intelligence, Marketplace, e-Chimusika and Logistics. An organisation registers once
        and a record created in one application stays meaningful in the next, which is the whole
        point of doing it this way.
      </p>
      <p className="text-body-large text-neutral-700 mb-12">
        You can see the shape of it on the{' '}
        <Link to="/platform/architecture" className="text-brand-accent underline underline-offset-2">
          architecture page
        </Link>
        , and the applications themselves on the{' '}
        <Link to="/platform" className="text-brand-accent underline underline-offset-2">
          platform pages
        </Link>{' '}
        — every one of them is deployed and publicly reachable, so the claim is checkable rather
        than asserted.
      </p>

      <h2 className="text-h2 mb-4">Where it is being proved</h2>
      <p className="text-body-large text-neutral-700 mb-12">
        We started deliberately narrow, with a poultry and fish farming pilot, to prove the model
        on fast-cycling sectors before extending it. Alongside it, Zimo Clan — a Heraja subsidiary
        — runs its operations on HAOS. That is a real business on the platform rather than
        independent market validation, and both halves of that sentence matter; the{' '}
        <Link to="/evidence" className="text-brand-accent underline underline-offset-2">
          evidence pages
        </Link>{' '}
        set out what each one does and does not show.
      </p>

      <h2 className="text-h2 mb-4">What we believe</h2>
      <p className="text-body-large text-neutral-700 mb-4">
        Infrastructure before features. A capability that only one organisation can use is a
        feature; the work is making it shared, which is slower and harder to demonstrate early.
      </p>
      <p className="text-body-large text-neutral-700 mb-4">
        A record is only worth what can be checked about it. Verification, provenance and the
        audit trail are not compliance overhead — they are the reason a buyer, a lender and an
        auditor can all act on the same entry.
      </p>
      <p className="text-body-large text-neutral-700">
        Say what exists. This site carries no customer logos, no testimonials and no outcome
        statistics, because we do not have ones we could stand behind under questioning. What is
        here instead is the software, running, with its limits stated.
      </p>

      {hasLeadership && (
        <p className="text-body-large text-neutral-700 mt-12">
          <Link
            to="/company/leadership"
            className="text-brand-accent underline underline-offset-2"
          >
            The people running the company
          </Link>{' '}
          are listed separately.
        </p>
      )}
    </ProseTemplate>
  );
}
