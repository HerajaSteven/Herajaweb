import { Link } from 'react-router-dom';

/*
 * The platform, drawn to Phase 5 §9.1.
 *
 * ── WHAT THIS REPLACED, AND WHY IT MATTERED ──────────────────────────────
 *
 * The previous version listed an "Application Layer" of Farm Intelligence,
 * Logistics, Marketplace and **Analytics** — and omitted e-Chimusika. Analytics
 * is not an application; nobody can open it. So the site's own architecture
 * diagram named a product that does not exist while leaving out one that does,
 * on the two pages an evaluator opens to understand what is actually built.
 * That is the same failure Phase 1 §8 was written to correct, drawn as a
 * picture. The tiers below name only things that exist, and every application
 * in the bottom tier is a link you can follow to something running.
 *
 * ── WHY IT IS HTML AND NOT AN SVG ────────────────────────────────────────
 *
 * The tiers are lists of labelled things. HTML gives text selection, real
 * links, sensible screen-reader order and reflow at 390px for free; an SVG
 * would give up all four to gain nothing, because there is no geometry here
 * that a grid cannot express.
 *
 * ── PHASE 5 §9.2, WHICH THIS OBEYS ───────────────────────────────────────
 *
 * Tiers are distinguished by SHAPE, not colour — filled block, dense chips,
 * dashed bands, solid cards — so the diagram survives greyscale printing and
 * colour-blindness without a legend. Rectangles, never circles: circles imply
 * orbit, and nothing here orbits. Nothing animates. Brand green marks exactly
 * one thing, HAOS, because marking everything marks nothing.
 */

interface Props {
  /** `dark` for charcoal grounds — the homepage HAOS band. */
  tone?: 'light' | 'dark';
}

const PLATFORM_SERVICES = [
  'Identity',
  'Verification',
  'Notifications',
  'Multi-tenancy',
  'Audit trail',
  'APIs',
  'Security',
];

const CAPABILITIES = [
  { name: 'Traceability', line: 'Operations documented from farm to buyer.' },
  { name: 'Operational intelligence', line: 'Figures derived from recorded events.' },
];

const APPLICATIONS = [
  { name: 'Farm Intelligence', href: '/platform/farm-intelligence' },
  { name: 'Marketplace', href: '/platform/marketplace' },
  { name: 'e-Chimusika', href: '/platform/echimusika' },
  { name: 'Logistics', href: '/platform/logistics' },
];

/*
 * A 1px vertical rule between tiers. No arrowhead: this is containment, not
 * flow, and Phase 5 §9.2 reserves arrows for direction that is real
 * information.
 *
 * Declared at module scope, not inside the render function. Defining it inline
 * created a new component type on every render, so React would unmount and
 * remount all four connectors each time — which the react-hooks lint rule
 * catches as "Cannot create components during render".
 */
function Connector({ rule }: { rule: string }) {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div className={`w-px h-6 ${rule}`} />
    </div>
  );
}

export default function ArchitectureDiagram({ tone = 'light' }: Props) {
  const dark = tone === 'dark';

  const rule = dark ? 'bg-white/25' : 'bg-neutral-300';
  const edge = dark ? 'border-white/25' : 'border-neutral-300';
  const label = dark ? 'text-neutral-300' : 'text-neutral-600';
  const strong = dark ? 'text-white' : 'text-brand-primary';
  const quiet = dark ? 'text-neutral-400' : 'text-neutral-600';

  return (
    <figure className="w-full max-w-3xl mx-auto m-0">
      {/* Tier 0 — the company. Plain text, no container: it is not a component. */}
      <p className={`text-center text-label ${label}`}>Heraja Agro Technologies Limited</p>

      <Connector rule={rule} />

      {/* Tier 1 — HAOS. The one filled block, and the only green on the page. */}
      <div
        className={`rounded px-6 py-5 text-center ${
          dark ? 'bg-brand-secondary text-brand-primary' : 'bg-brand-primary text-brand-secondary'
        }`}
      >
        <p className="text-h3">HAOS</p>
        <p className={`text-body-small ${dark ? 'text-brand-primary/80' : 'text-white/80'}`}>
          The Heraja Agricultural Operating System
        </p>
      </div>

      <Connector rule={rule} />

      {/* Tier 2 — platform services. Small equal chips, dense, deliberately not
          links: there is no page behind an individual service, and a chip that
          looks clickable and is not is worse than a plain one. */}
      <div className={`rounded border ${edge} p-4`}>
        <p className={`text-label mb-3 ${label}`}>Platform services</p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PLATFORM_SERVICES.map((service) => (
            <li
              key={service}
              className={`rounded border ${edge} px-2.5 py-1.5 text-body-small text-center ${strong} ${
                dark ? 'bg-white/5' : 'bg-surface'
              }`}
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      <Connector rule={rule} />

      {/* Tier 3 — capabilities. Wide bands with DASHED side edges, because they
          span the applications rather than sitting beside them. The shape is
          the argument: these are properties of the platform, not products. */}
      <div className="space-y-2">
        <p className={`text-label ${label}`}>Capabilities</p>
        {CAPABILITIES.map((capability) => (
          <div
            key={capability.name}
            className={`rounded border border-x-2 ${edge} px-4 py-3 flex flex-wrap items-baseline gap-x-3 gap-y-1`}
            /* Tailwind's border-dashed applies to all four sides; only the
               spanning edges should be dashed, so the sides are set here. */
            style={{ borderLeftStyle: 'dashed', borderRightStyle: 'dashed' }}
          >
            <span className={`font-semibold ${strong}`}>{capability.name}</span>
            <span className={`text-body-small ${quiet}`}>{capability.line}</span>
          </div>
        ))}
      </div>

      <Connector rule={rule} />

      {/* Tier 4 — applications. Solid cards, named, and every one a real link to
          something running. */}
      <div>
        <p className={`text-label mb-2 ${label}`}>Applications</p>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {APPLICATIONS.map((application) => (
            <li key={application.href}>
              <Link
                to={application.href}
                className={`block h-full rounded border ${edge} px-3 py-4 text-center font-semibold transition-colors min-w-0 ${
                  dark
                    ? 'bg-white/5 text-white hover:border-brand-secondary'
                    : 'bg-surface-elevated text-brand-primary hover:border-brand-accent'
                }`}
              >
                {application.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/*
        Phase 5 §9.2: a diagram that cannot be captioned with what it explains
        is decoration. This one answers "what am I buying into?" — one platform,
        four things you can open, and shared services underneath both.
      */}
      <figcaption className={`mt-6 text-body-small ${quiet}`}>
        Every application runs on the same services and the same audit trail, so a record created
        in one is meaningful in the next. Capabilities span the applications rather than sitting
        beside them — you cannot open Traceability, you use it.
      </figcaption>
    </figure>
  );
}
