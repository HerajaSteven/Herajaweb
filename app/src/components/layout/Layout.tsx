import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import Breadcrumb from './Breadcrumb';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumb?: boolean;
}

export default function Layout({ children, showBreadcrumb = true }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navigation />
      <div className="flex-1 flex flex-col pt-20">
        {showBreadcrumb && <Breadcrumb />}
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
