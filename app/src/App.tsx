import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/*
 * The Phase 1 information architecture: 4 top-level sections, 29 approved
 * routes, down from 6 sections and 54.
 *
 * This file is the route manifest AND the sitemap source — scripts/generate-
 * sitemap.mjs parses the <Route path="..."> list below, so a route that is
 * not here is not in the sitemap, and there is no second list to keep in
 * step. /company/leadership is registered but publishes itself from admin
 * content — see the note at the Company block.
 *
 * Routes removed here still answer: vercel.json 301s all 25 of them to their
 * Phase 1 destinations, so inbound links and rankings survive the change.
 */

// Platform
const PlatformOverview = lazy(() => import('./pages/platform/PlatformOverview'));
const HAOS = lazy(() => import('./pages/platform/HAOS'));
const Architecture = lazy(() => import('./pages/platform/Architecture'));
const Security = lazy(() => import('./pages/platform/Security'));
const APIs = lazy(() => import('./pages/platform/APIs'));
const Innovation = lazy(() => import('./pages/platform/Innovation'));
const Roadmap = lazy(() => import('./pages/platform/Roadmap'));
// Applications — live only. Coordination Network is built but not deployed,
// so it has no page here; it appears on the roadmap as "building".
const FarmIntelligence = lazy(() => import('./pages/platform/FarmIntelligence'));
const Marketplace = lazy(() => import('./pages/platform/Marketplace'));
const EChimusika = lazy(() => import('./pages/platform/EChimusika'));
const Logistics = lazy(() => import('./pages/platform/Logistics'));

// Solutions
const SolutionsOverview = lazy(() => import('./pages/solutions/SolutionsOverview'));
const Government = lazy(() => import('./pages/solutions/Government'));
const FinancialInstitutions = lazy(() => import('./pages/solutions/FinancialInstitutions'));
const Cooperatives = lazy(() => import('./pages/solutions/Cooperatives'));
const Agribusiness = lazy(() => import('./pages/solutions/Agribusiness'));
const DevelopmentOrganizations = lazy(() => import('./pages/solutions/DevelopmentOrganizations'));

// Evidence — the former /ecosystem, rebuilt around proof
const EvidenceOverview = lazy(() => import('./pages/evidence/EvidenceOverview'));
const ZimoClan = lazy(() => import('./pages/evidence/ZimoClan'));
const Pilot = lazy(() => import('./pages/evidence/Pilot'));

// Company
const About = lazy(() => import('./pages/company/About'));
const Careers = lazy(() => import('./pages/company/Careers'));
const Contact = lazy(() => import('./pages/company/Contact'));
const Leadership = lazy(() => import('./pages/company/Leadership'));
const Privacy = lazy(() => import('./pages/company/Privacy'));
const Terms = lazy(() => import('./pages/company/Terms'));

// Resources
const CorporateBrochure = lazy(() => import('./pages/resources/CorporateBrochure'));
const FAQ = lazy(() => import('./pages/resources/FAQ'));

/*
 * Shown while a route's chunk downloads.
 *
 * Deliberately almost nothing. Each page renders its own <Layout>, so during
 * the swap the header and footer are unmounted too — anything eye-catching
 * here (a spinner, a skeleton, a logo) reads as a full page reload rather than
 * a navigation. A reserved block of height keeps the scrollbar and page
 * geometry stable instead, and on a fast connection it is never seen.
 *
 * aria-busy and the visually-hidden text mean a screen reader announces that
 * something is loading rather than silently landing on an empty document.
 */
function RouteFallback() {
  return (
    <div className="min-h-screen" role="status" aria-busy="true">
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Platform */}
      <Route path="/platform" element={<PlatformOverview />} />
      <Route path="/platform/haos" element={<HAOS />} />
      <Route path="/platform/architecture" element={<Architecture />} />
      <Route path="/platform/security" element={<Security />} />
      <Route path="/platform/apis" element={<APIs />} />
      <Route path="/platform/innovation" element={<Innovation />} />
      <Route path="/platform/roadmap" element={<Roadmap />} />

      {/* Applications — every one of these is live and launchable */}
      <Route path="/platform/farm-intelligence" element={<FarmIntelligence />} />
      <Route path="/platform/marketplace" element={<Marketplace />} />
      <Route path="/platform/echimusika" element={<EChimusika />} />
      <Route path="/platform/logistics" element={<Logistics />} />

      {/* Solutions */}
      <Route path="/solutions" element={<SolutionsOverview />} />
      <Route path="/solutions/government" element={<Government />} />
      <Route path="/solutions/financial-institutions" element={<FinancialInstitutions />} />
      <Route path="/solutions/cooperatives" element={<Cooperatives />} />
      <Route path="/solutions/agribusiness" element={<Agribusiness />} />
      <Route path="/solutions/development-organizations" element={<DevelopmentOrganizations />} />

      {/* Evidence */}
      <Route path="/evidence" element={<EvidenceOverview />} />
      <Route path="/evidence/zimo-clan" element={<ZimoClan />} />
      <Route path="/evidence/pilot" element={<Pilot />} />

      {/* Company */}
      <Route path="/company/about" element={<About />} />
      <Route path="/company/careers" element={<Careers />} />
      <Route path="/company/contact" element={<Contact />} />
      <Route path="/company/privacy" element={<Privacy />} />
      <Route path="/company/terms" element={<Terms />} />

      {/*
       * The 29th approved route, and the one that was withheld longest.
       *
       * It is registered unconditionally now, but it publishes itself: the
       * page renders the 404 when no leadership has been entered in the HAOS
       * admin, and generate-sitemap.mjs reads the same flag so an empty page
       * is never advertised to a crawler. Add people in the admin and the next
       * build turns the page, the footer link and the sitemap entry on
       * together — nobody has to remember all three.
       *
       * The rule this preserves: an empty leadership page is worse than none,
       * because the visitor most likely to open it is checking whether the
       * company is real.
       */}
      <Route path="/company/leadership" element={<Leadership />} />

      {/* Resources */}
      <Route path="/resources/corporate-brochure" element={<CorporateBrochure />} />
      <Route path="/resources/faq" element={<FAQ />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}
