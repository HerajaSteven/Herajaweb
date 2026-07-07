import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Platform pages
import PlatformOverview from './pages/platform/PlatformOverview';
import HAOS from './pages/platform/HAOS';
import FarmIntelligence from './pages/platform/FarmIntelligence';
import CoordinationNetwork from './pages/platform/CoordinationNetwork';
import Logistics from './pages/platform/Logistics';
import Marketplace from './pages/platform/Marketplace';
import Traceability from './pages/platform/Traceability';
import OperationalIntelligence from './pages/platform/OperationalIntelligence';
import Identity from './pages/platform/Identity';
import InfrastructureServices from './pages/platform/InfrastructureServices';
import APIs from './pages/platform/APIs';
import Security from './pages/platform/Security';
import Architecture from './pages/platform/Architecture';
import Roadmap from './pages/platform/Roadmap';

// Solutions pages
import SolutionsOverview from './pages/solutions/SolutionsOverview';
import Government from './pages/solutions/Government';
import Cooperatives from './pages/solutions/Cooperatives';
import Enterprise from './pages/solutions/Enterprise';
import Agribusiness from './pages/solutions/Agribusiness';
import FinancialInstitutions from './pages/solutions/FinancialInstitutions';
import DevelopmentOrganizations from './pages/solutions/DevelopmentOrganizations';
import TechnologyPartners from './pages/solutions/TechnologyPartners';

// Ecosystem pages
import EcosystemOverview from './pages/ecosystem/EcosystemOverview';
import EnterpriseClients from './pages/ecosystem/EnterpriseClients';
import ZIMOClan from './pages/ecosystem/ZIMOClan';
import Partners from './pages/ecosystem/Partners';
import ImplementationStories from './pages/ecosystem/ImplementationStories';
import RegionalPrograms from './pages/ecosystem/RegionalPrograms';
import PilotPrograms from './pages/ecosystem/PilotPrograms';

// Innovation pages
import InnovationOverview from './pages/innovation/InnovationOverview';
import AI from './pages/innovation/AI';
import Research from './pages/innovation/Research';
import OpenInnovation from './pages/innovation/OpenInnovation';
import FutureInfrastructure from './pages/innovation/FutureInfrastructure';

// Resources pages
import ResourcesOverview from './pages/resources/ResourcesOverview';
import Whitepaper from './pages/resources/Whitepaper';
import CorporateBrochure from './pages/resources/CorporateBrochure';
import Documentation from './pages/resources/Documentation';
import CaseStudies from './pages/resources/CaseStudies';
import ResearchPage from './pages/resources/Research';
import Blog from './pages/resources/Blog';
import FAQ from './pages/resources/FAQ';
import MediaKit from './pages/resources/MediaKit';

// Company pages
import CompanyOverview from './pages/company/CompanyOverview';
import About from './pages/company/About';
import Vision from './pages/company/Vision';
import Leadership from './pages/company/Leadership';
import Careers from './pages/company/Careers';
import News from './pages/company/News';
import Contact from './pages/company/Contact';
import Legal from './pages/company/Legal';
import Privacy from './pages/company/Privacy';
import Terms from './pages/company/Terms';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Platform */}
      <Route path="/platform" element={<PlatformOverview />} />
      <Route path="/platform/haos" element={<HAOS />} />
      <Route path="/platform/farm-intelligence" element={<FarmIntelligence />} />
      <Route path="/platform/coordination-network" element={<CoordinationNetwork />} />
      <Route path="/platform/logistics" element={<Logistics />} />
      <Route path="/platform/marketplace" element={<Marketplace />} />
      <Route path="/platform/traceability" element={<Traceability />} />
      <Route path="/platform/operational-intelligence" element={<OperationalIntelligence />} />
      <Route path="/platform/identity" element={<Identity />} />
      <Route path="/platform/infrastructure-services" element={<InfrastructureServices />} />
      <Route path="/platform/apis" element={<APIs />} />
      <Route path="/platform/security" element={<Security />} />
      <Route path="/platform/architecture" element={<Architecture />} />
      <Route path="/platform/roadmap" element={<Roadmap />} />

      {/* Solutions */}
      <Route path="/solutions" element={<SolutionsOverview />} />
      <Route path="/solutions/government" element={<Government />} />
      <Route path="/solutions/cooperatives" element={<Cooperatives />} />
      <Route path="/solutions/enterprise" element={<Enterprise />} />
      <Route path="/solutions/agribusiness" element={<Agribusiness />} />
      <Route path="/solutions/financial-institutions" element={<FinancialInstitutions />} />
      <Route path="/solutions/development-organizations" element={<DevelopmentOrganizations />} />
      <Route path="/solutions/technology-partners" element={<TechnologyPartners />} />

      {/* Ecosystem */}
      <Route path="/ecosystem" element={<EcosystemOverview />} />
      <Route path="/ecosystem/enterprise-clients" element={<EnterpriseClients />} />
      <Route path="/ecosystem/zimo-clan" element={<ZIMOClan />} />
      <Route path="/ecosystem/partners" element={<Partners />} />
      <Route path="/ecosystem/implementation-stories" element={<ImplementationStories />} />
      <Route path="/ecosystem/regional-programs" element={<RegionalPrograms />} />
      <Route path="/ecosystem/pilot-programs" element={<PilotPrograms />} />

      {/* Innovation */}
      <Route path="/innovation" element={<InnovationOverview />} />
      <Route path="/innovation/ai" element={<AI />} />
      <Route path="/innovation/research" element={<Research />} />
      <Route path="/innovation/open-innovation" element={<OpenInnovation />} />
      <Route path="/innovation/future-infrastructure" element={<FutureInfrastructure />} />

      {/* Resources */}
      <Route path="/resources" element={<ResourcesOverview />} />
      <Route path="/resources/whitepaper" element={<Whitepaper />} />
      <Route path="/resources/corporate-brochure" element={<CorporateBrochure />} />
      <Route path="/resources/documentation" element={<Documentation />} />
      <Route path="/resources/case-studies" element={<CaseStudies />} />
      <Route path="/resources/research" element={<ResearchPage />} />
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/faq" element={<FAQ />} />
      <Route path="/resources/media-kit" element={<MediaKit />} />

      {/* Company */}
      <Route path="/company" element={<CompanyOverview />} />
      <Route path="/company/about" element={<About />} />
      <Route path="/company/vision" element={<Vision />} />
      <Route path="/company/leadership" element={<Leadership />} />
      <Route path="/company/careers" element={<Careers />} />
      <Route path="/company/news" element={<News />} />
      <Route path="/company/contact" element={<Contact />} />
      <Route path="/company/legal" element={<Legal />} />
      <Route path="/company/privacy" element={<Privacy />} />
      <Route path="/company/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
