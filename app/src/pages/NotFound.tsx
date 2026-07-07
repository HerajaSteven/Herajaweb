import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <Layout showBreadcrumb={false}>
      <section className="section-padding bg-surface min-h-[50vh] flex items-center">
        <div className="container-heraja max-w-2xl text-center">
          <p className="text-overline mb-4 text-brand-secondary">404</p>
          <h1 className="text-display mb-4">Page Not Found</h1>
          <p className="text-body-large text-neutral-700 mb-8">
            This page doesn't exist, or it moved. Try the platform overview, or head back home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/platform" className="btn-secondary">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
