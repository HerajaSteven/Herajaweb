import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductScreenshot from '@/components/evidence/ProductScreenshot';
import ProductEvidenceGallery from '@/components/evidence/ProductEvidenceGallery';
import { FARM_INTELLIGENCE_EVIDENCE } from '@/config/productEvidence';
import { ArrowRight, Database, Sprout, Truck, ShoppingCart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';
import ArchitectureDiagram from '@/components/diagrams/ArchitectureDiagram';

/*
 * AnimatedCounter and MetricCard used to live here, feeding the metric strip
 * that stood second on the page. Both went with it — a counter component whose
 * only purpose is to animate a number the site no longer claims is dead weight,
 * and leaving it would invite the next person to find a number for it.
 */

/* ─── Capability Card ─── */
function CapabilityCard({ icon: Icon, title, description, href, color }: {
  icon: React.ElementType; title: string; description: string; href: string; color: string;
}) {
  return (
    <Link to={href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${color}15` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-h4 mb-2 group-hover:text-brand-accent transition-colors">{title}</h3>
      <p className="text-body-small text-neutral-600 mb-3">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
        Explore <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}

/* ─── Pathway Card ─── */
/*
 * NO SCROLL REVEAL. Phase 5 §4.6: one page-load sequence, in the hero, and
 * "no scroll-reveal chain down sections 2–9 — content that appears on scroll
 * cannot be found with Ctrl+F and reads as decoration by the third
 * repetition".
 *
 * These five cards are the audience router: the only path from the homepage to
 * the five solution pages. They were rendered at opacity 0 until an
 * IntersectionObserver fired. A real visitor scrolling normally does see them —
 * that was checked, and the observer works — but a card that starts invisible
 * is invisible to anything that does not run the observer, and this is the
 * section the site can least afford to have disappear. It is also the third
 * reveal on the page by the time a reader reaches it, which is the effect §4.6
 * describes.
 *
 * `delay` is kept in the signature deliberately: the call sites pass it, and
 * removing it there would be a wider edit than this correction warrants.
 */
function PathwayCard({ title, description, href }: {
  title: string; description: string; href: string; delay?: number;
}) {
  return (
    <Link to={href} className="group card-elevate block bg-surface rounded-lg border border-neutral-100 p-6 h-full">
      <h3 className="text-h4 mb-2 group-hover:text-brand-accent transition-colors">{title}</h3>
      <p className="text-body-small text-neutral-600">{description}</p>
      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-all mt-3" aria-hidden="true" />
    </Link>
  );
}

/* ═══════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <Layout showBreadcrumb={false}>
      <Seo
        title="The Operating Infrastructure for Modern Agriculture"
        description="Heraja builds the digital backbone that connects production, coordination, and market access."
      />
      {/* ─── Hero ─── */}
      {/*
        LARGE-DESKTOP COMPOSITION (Phase 4 §7, Phase 5 §4.4).

        The hero uses the VISUAL container, not the content container. That is
        the whole mechanism: at 1600+ the media is allowed past the 1280 column
        while the copy stays inside a readable measure, so the section composes
        instead of stretching.

        Grid changes shape rather than merely widening:
          lg  (1024)  7/5 split, copy left, media right — symmetric
          2xl (1536)  12 columns. Copy lands on 2–7, media on 8–12. The left
                      margin becomes deliberate negative space rather than the
                      dead margin Phase 3.5 measured at ~320px per side.

        The asymmetry is earned by the media (Phase 4 §7.3) — a text-only
        section stays symmetric at every width, which is why this rule lives
        here and not in a global layout class.
      */}
      <section className="min-h-[60vh] md:min-h-[85vh] flex items-center relative overflow-hidden bg-surface py-12 lg:py-0">
        <div className="container-visual w-full">
          <div className="grid lg:grid-cols-[1fr_0.42fr] 2xl:grid-cols-12 gap-12 lg:gap-16 2xl:gap-12 items-center">
            {/*
              min-w-0 is load-bearing. A grid item defaults to min-width:auto,
              which refuses to shrink below its content's longest word — at 390px
              "Infrastructure" in the H1 is ~378px, so this item grew past its
              358px track and the word was clipped by the hero's overflow-hidden.
              The clipping is also why the overflow test passed: nothing reached
              document scrollWidth.
            */}
            <div className="min-w-0 2xl:col-start-2 2xl:col-span-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-overline mb-4"
              >
                Heraja Agro Technologies
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display mb-6"
              >
                The Operating Infrastructure for Modern Agriculture
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-body-large text-neutral-700 max-w-xl mb-8"
              >
                Heraja builds the digital backbone that connects production, coordination, and market access — enabling agricultural organizations to operate with transparency, efficiency, and scale.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {/*
                  "Book Demo" used to sit here. It implied a scheduling flow that
                  does not exist, and it competed with the header's "Talk to us"
                  for the same destination under a different name — the exact
                  duplication Phase 1 settled when it cut the navigation to one
                  CTA. The secondary now matches the header's language.
                */}
                <Link to="/platform" className="btn-primary">
                  Explore the platform <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/company/contact" className="btn-secondary">
                  Talk to us
                </Link>
              </motion.div>
            </div>

            {/*
              REAL PRODUCT, NOT A DIAGRAM.

              This was a hand-drawn SVG of a "HAOS" hub orbited by API / Secure /
              Market / Trace / AI nodes on animated dashed rings. It illustrated
              nothing that exists and is the visual language Phase 2 named as
              disqualifying — a glowing network graphic on the one surface where
              the site could instead show a product doing real work.

              Ten screenshots of the running applications are committed to this
              repository. The homepage showed none of them. This is the livestock
              screen: a broiler batch on day 24 of 41, growth derived from logged
              weigh-ins, feed conversion computed from what was actually served.
            */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="hidden lg:block min-w-0 2xl:col-start-8 2xl:col-span-5"
            >
              <ProductScreenshot
                {...FARM_INTELLIGENCE_EVIDENCE[2]}
                crop="top"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/*
        ─── 2 · The problem · 3 · HAOS (Phase 5 §4.2, §4.5) ────────────────

        FOUR SECTIONS USED TO STAND HERE, AND NONE OF THEM WAS THE PROBLEM.

        A metric strip ("2 Sectors in Pilot · Built-in · Multi-Region"), a
        positioning banner, "Why Infrastructure, Not Software", and an
        interactive "How the Ecosystem Works" explorer. Phase 1 §13 puts the
        problem second and HAOS third; the page instead opened with three
        assertions about Heraja and an explorer whose collapsed panels listed
        four applications that do not exist — Marketplace Portal, Operations
        Dashboard, Buyer Portal, Analytics Console — plus "Enterprise Clients"
        as an organisation type. Hidden behind a click, so no rendered audit
        that did not open things had ever seen them.

        The replacement is the approved order: state the problem, then show
        what was built for it. Sections 2 and 3 share one charcoal band with a
        change of register inside it — reading width for the argument, visual
        width for the diagram — which is the Phase 4 three-band budget.

        Nothing here animates. Phase 5 §4.6 allows exactly one load sequence
        on this page, in the hero.
      */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-reading text-center">
          <p className="text-overline mb-3">The challenge</p>
          <h2 className="text-h1 text-white mb-5">Agriculture is missing its coordination layer</h2>
          {/*
            Exactly two sentences, and deliberately nothing to look at — the one
            moment the page asks the reader to think rather than check. No
            statistic: the problem is recognisable to anyone who has worked in
            the sector, and a number invented to make it look larger would be
            the first thing a diligence reader pulled on.
          */}
          <p className="text-body-large text-neutral-300">
            Losses happen less often because a crop failed than because aggregation was late, a
            truck never arrived, or nobody could confirm what a shipment actually contained.
            Agriculture does not only need financing — it needs operational coordination
            infrastructure.
          </p>
        </div>
      </section>

      {/* No top padding: sections 2 and 3 are one charcoal band, and a gap
          between them would make it read as two. */}
      <section className="pb-20 lg:pb-[120px] px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-dark text-white">
        <div className="container-visual">
          <div className="max-w-[720px] mb-10">
            <p className="text-overline mb-3">The platform</p>
            <h2 className="text-h1 text-white mb-4">
              HAOS — the Heraja Agricultural Operating System
            </h2>
            <p className="text-body-large text-neutral-300">
              One platform underneath every application: shared identity, verification, audit
              trail and multi-tenancy. An organisation registers once, and a record created in one
              application stays meaningful in the next.
            </p>
          </div>
          <ArchitectureDiagram tone="dark" />
          <div className="mt-8">
            <Link
              to="/platform/haos"
              className="btn-secondary border-white/30 text-white hover:bg-white/10"
            >
              How HAOS works <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Platform Overview ─── */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          {/*
            THIS GRID USED TO SAY NINE THINGS WERE THE SAME KIND OF THING.

            It listed HAOS, Farm Intelligence, Coordination Network, Logistics,
            Marketplace, Traceability, Operational Intelligence, Identity &
            Security and API & Integrations as nine identical "Infrastructure
            Modules". Three of those are applications you can open, two are
            properties of the platform, two are shared services, one is the
            platform itself — and one, Coordination Network, is not deployed at
            all yet was presented as a peer of the products that are.

            Phase 1 §8 exists because of this exact grid: presenting capabilities
            beside applications as if all were deployable makes both halves less
            credible. Separating them makes the platform look like a platform and
            the applications look like products.

            Applications are now their own row, all four live and launchable.
            Capabilities and services follow in a visibly different treatment,
            with no launch affordance, because you cannot open them.
          */}
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Applications</p>
            <h2 className="text-h1 max-w-2xl mx-auto">Four applications, deployed today</h2>
            <p className="text-body-large text-neutral-700 max-w-2xl mx-auto mt-4">
              Each one runs on HAOS and shares its identity, verification and audit trail.
              Every one of them is publicly reachable right now.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <CapabilityCard icon={Sprout} title="Farm Intelligence" description="Production recording and operational intelligence — twice-daily reporting, growth tracking, feed conversion." href="/platform/farm-intelligence" color="#3A7F27" />
            <CapabilityCard icon={ShoppingCart} title="Marketplace" description="Market coordination connecting verified supply with authenticated demand." href="/platform/marketplace" color="#3A7F27" />
            <CapabilityCard icon={Database} title="e-Chimusika" description="A marketplace application built on the same shared platform services." href="/platform/echimusika" color="#3A7F27" />
            <CapabilityCard icon={Truck} title="Logistics" description="Movement coordination for aggregation, transportation and delivery across regions." href="/platform/logistics" color="#3A7F27" />
          </div>

          {/*
            Capabilities and services. Deliberately plainer than the cards above:
            no icon tile, no hover-reveal "Explore" affordance, denser. The shape
            itself says these are foundations rather than products, which is the
            distinction the previous grid destroyed by making everything a card.
          */}
          <div className="mt-16 pt-12 border-t border-neutral-300">
            <p className="text-overline mb-3">Platform</p>
            <h3 className="text-h3 mb-3">What every application is built on</h3>
            <p className="text-body text-neutral-700 max-w-2xl mb-8">
              These are properties of HAOS rather than things you open. They are what make a
              record created in one application meaningful in another.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {[
                { title: 'HAOS', description: 'The operating system the applications run on.', href: '/platform/haos' },
                { title: 'Traceability', description: 'Operations documented from farm to buyer.', href: '/platform/haos' },
                { title: 'Operational intelligence', description: 'Figures derived from recorded events.', href: '/platform/haos' },
                { title: 'Identity & access', description: 'One identity across every application.', href: '/platform/architecture' },
                { title: 'Security & audit', description: 'Permissions, access control, audit trail.', href: '/platform/security' },
                { title: 'APIs & integration', description: 'The surface external systems connect to.', href: '/platform/apis' },
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-neutral-300 pl-4">
                  <Link to={item.href} className="group block">
                    <p className="font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </p>
                    <p className="text-body-small text-neutral-600">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/*
        ─── Product evidence ───

        Phase 1 §13 places this fifth on the homepage and Phase 1 §17 ranks it as
        the highest-value Tier-1 evidence the company has. It was missing
        entirely: before this section existed, `main img` on the homepage
        returned zero images while ten screenshots of the running applications
        sat committed in this repository.

        These are the three that carry an argument rather than just showing a
        surface: the system reasoning about a record, the wording it uses when it
        asks for one, and the figures it derives from them. Order is fixed by the
        gallery, which keeps the two Farm Intelligence screens that disagree with
        each other apart — see docs/product-defects.md.
      */}
      <ProductEvidenceGallery
        title="What the software actually does"
        intro="Three screens from Farm Intelligence, running against a real batch mid-cycle. Not mockups, and not retouched."
        items={FARM_INTELLIGENCE_EVIDENCE.slice(0, 3)}
      />


      {/* ─── Enterprise Trust ─── */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Enterprise Trust</p>
            <h2 className="text-h1 max-w-2xl mx-auto text-white">Built for Every Agricultural Organization</h2>
          </div>
          {/*
            This was a three-figure metric strip: "6+ Organization Types",
            "Composable", and "99.9% Uptime Target".

            The uptime figure was the problem. Nothing in the estate measures
            or publishes availability, so it was a number the company could not
            answer a question about — and this audience asks. Phase 1 (D1)
            removed outcome metrics for exactly that reason, and an unverifiable
            SLA-shaped claim is the most expensive kind to leave standing in
            front of a government or finance evaluator.

            What replaces it is the one thing on this page a reader can check
            without trusting anyone: the applications are deployed, and the
            links open them.
          */}
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <p className="text-h2 text-brand-secondary mb-2">Four applications</p>
              <p className="text-body text-neutral-300">Deployed and publicly reachable today</p>
            </div>
            <div className="text-center">
              <p className="text-h2 text-brand-secondary mb-2">One platform</p>
              <p className="text-body text-neutral-300">Shared identity, verification and audit across all of them</p>
            </div>
            <div className="text-center">
              <p className="text-h2 text-brand-secondary mb-2">Multi-tenant</p>
              <p className="text-body text-neutral-300">Each organisation operates its own data boundary</p>
            </div>
          </div>
          <div className="text-center">
            {/*
              Zimo Clan is a Heraja subsidiary as well as a client. Phase 1 §9
              requires that relationship to be disclosed before the deployment
              is described, so the link says what the page is rather than
              "View Enterprise Clients", which implied an arm's-length customer
              roster that does not exist.
            */}
            <Link to="/evidence/zimo-clan" className="inline-flex items-center gap-2 text-brand-secondary hover:underline font-medium">
              How a Heraja subsidiary runs on HAOS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/*
        "Featured Resources" stood here: cards for a "HAOS Whitepaper", "Platform
        Documentation" and "Research Insights", plus "View All Resources". None
        of those documents exists — Phase 1 D4 records the corporate brochure as
        the only confirmed one — and every card redirected to the brochure, the
        API page or the innovation page.

        The redirects prevented a 404 and left the promise intact, which is the
        worse half of the problem: a reader who clicks "HAOS Whitepaper" and
        lands on a brochure page learns something about the company. Phase 1 §17
        rule 5 is that absence is stated, never implied. Removed rather than
        relabelled; the brochure is linked from the footer and from the pages
        that actually need it.
      */}


      {/* ─── CTA / Pathways ─── */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="text-center mb-12">
            <p className="text-overline mb-3">Get Started</p>
            <h2 className="text-h1 max-w-2xl mx-auto">Choose Your Pathway</h2>
            <p className="text-body-large text-neutral-700 max-w-2xl mx-auto mt-4">
              Every organization type has a tailored journey into the Heraja ecosystem.
            </p>
          </div>
          {/*
            Financial Institutions was absent from this list — one of the five
            approved audiences with no route to it from the homepage, while its
            page existed and was linked from the navigation. Added, so the
            router matches the audiences the site actually addresses.
          */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PathwayCard title="Government" description="National and regional agricultural programmes that have to account for how funds were used." href="/solutions/government" delay={0.1} />
            <PathwayCard title="Financial Institution" description="Lending against agricultural operations you can verify rather than take on trust." href="/solutions/financial-institutions" delay={0.2} />
            <PathwayCard title="Cooperative" description="Coordinating members, and giving them something that works on the phone they own." href="/solutions/cooperatives" delay={0.3} />
            <PathwayCard title="Agribusiness" description="One system across sites that currently do not reconcile with each other." href="/solutions/agribusiness" delay={0.4} />
            <PathwayCard title="Development Organization" description="Programmes whose outcomes have to be evidenced, not asserted." href="/solutions/development-organizations" delay={0.5} />
          </div>
        </div>
      </section>

      {/*
        ─── 7 · Proof (Phase 1 §13) ───

        This section did not exist. The site had evidence pages and no route to
        them from the homepage.

        Two cards, equal weight, no metrics — Phase 1 D1 removed outcome
        figures, and §9 requires the Zimo Clan relationship to be disclosed
        BEFORE anything is claimed from it. The eyebrow on that card carries
        the disclosure, so a reader cannot reach the description without
        passing it.
      */}
      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="max-w-[720px] mb-10">
            <p className="text-overline mb-3">Proof</p>
            <h2 className="text-h1 mb-4">What we can actually show</h2>
            <p className="text-body-large text-neutral-700">
              No customer logos, no testimonials, no outcome statistics. Two things that exist,
              described with their limits attached.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/evidence/zimo-clan"
              className="group card-elevate block bg-surface rounded-lg border border-neutral-300 p-6 min-w-0"
            >
              <p className="text-overline mb-3">A Heraja subsidiary and client</p>
              <h3 className="text-h3 mb-2 group-hover:text-brand-accent transition-colors">
                Zimo Clan runs on HAOS
              </h3>
              <p className="text-body-small text-neutral-700">
                A real business operating on the platform. Because it is also a subsidiary, it
                demonstrates that the infrastructure runs an operating company — not that the
                market has independently validated it. Both halves of that matter.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-body-small font-medium text-brand-accent">
                Read the deployment <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
            <Link
              to="/evidence/pilot"
              className="group card-elevate block bg-surface rounded-lg border border-neutral-300 p-6 min-w-0"
            >
              <p className="text-overline mb-3">In progress</p>
              <h3 className="text-h3 mb-2 group-hover:text-brand-accent transition-colors">
                A two-sector pilot
              </h3>
              <p className="text-body-small text-neutral-700">
                Poultry and fish. The page states the method, what is being measured, where it has
                got to — and what is not yet known. A pilot that lists its own open questions is
                more useful than one that does not.
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-body-small font-medium text-brand-accent">
                Read the pilot <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/*
        ─── 8 · Technology & trust (Phase 1 §13) ───

        Also absent. This section routes rather than persuades, so it is
        deliberately the plainest on the page: bordered rows, one line each, no
        cards and no icons. With outcome metrics removed (D1), the engineering
        carries more of the credibility than it used to, and a reader who wants
        it should be one click away.
      */}
      <section className="section-padding bg-surface-elevated">
        <div className="container-heraja">
          <div className="max-w-[720px] mb-10">
            <p className="text-overline mb-3">Technology &amp; trust</p>
            <h2 className="text-h1">How it is engineered</h2>
          </div>
          <ul className="grid md:grid-cols-3 gap-px bg-neutral-300 border border-neutral-300 rounded-lg overflow-hidden">
            {[
              { title: 'Architecture', line: 'Multi-tenancy, identity and the services every application shares.', href: '/platform/architecture' },
              { title: 'Security', line: 'Access control, permissions and the audit trail behind every record.', href: '/platform/security' },
              { title: 'APIs & integration', line: 'The surface external systems connect to.', href: '/platform/apis' },
            ].map((item) => (
              <li key={item.href} className="bg-surface min-w-0">
                <Link to={item.href} className="group block p-6 h-full hover:bg-surface-elevated transition-colors">
                  <h3 className="text-h4 mb-2 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-small text-neutral-600">{item.line}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*
        ─── 9 · CTA (Phase 1 §13) ───
        The page previously ended on the audience router with no closing action.
      */}
      <CTABlock
        variant="dark"
        static
        title="Talk to us"
        description="Tell us what you are evaluating and we will point you at the part of the platform that answers it."
        primaryCta={{ label: 'Talk to us', href: '/company/contact' }}
        secondaryCta={{ label: 'Explore the platform', href: '/platform' }}
      />
    </Layout>
  );
}
