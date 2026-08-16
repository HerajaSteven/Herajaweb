import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CTABlock from '@/components/sections/CTABlock';
import NotFound from '@/pages/NotFound';
import { leadership, hasLeadership } from '@/config/siteContent';

/**
 * /company/leadership
 *
 * The highest-value credibility page on the site, and the one that stayed
 * unpublished the longest: a government or finance evaluator checking whether
 * this company is real opens exactly this page, and a page of placeholders
 * answers that question worse than no page at all.
 *
 * It is now driven by the HAOS admin. Add people in Site Content → Leadership
 * and the next build publishes the page, links it from the footer, and adds it
 * to the sitemap. Remove them and all three reverse.
 *
 * WHY IT RENDERS NotFound WHEN EMPTY. The route is registered unconditionally
 * so the router stays static and greppable, but an empty leadership page must
 * not be reachable. Rendering the 404 means a visitor who guesses the URL, or
 * follows a stale link, gets the honest answer rather than a heading with
 * nothing under it. generate-sitemap.mjs reads the same flag, so the page is
 * not advertised while it is empty either.
 */
export default function Leadership() {
  if (!hasLeadership) return <NotFound />;

  return (
    <Layout>
      <Seo
        title="Leadership"
        description="The people accountable for Heraja Agro Technologies — the team building and operating HAOS."
      />

      <section className="section-padding bg-surface">
        <div className="container-heraja">
          <div className="max-w-2xl mb-12">
            <p className="text-overline mb-4">Company / Leadership</p>
            <h1 className="text-display mb-6">Leadership</h1>
            <p className="text-body-large text-neutral-700">
              The people accountable for what Heraja builds and operates.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <li key={person.name} className="bg-surface rounded-lg border border-neutral-300 overflow-hidden">
                {person.photo_url && (
                  /*
                   * 4:5 rectangle, not a circle. A circular crop is a
                   * social-media convention; a rectangular portrait reads as a
                   * record, which is the right register for a page whose job
                   * is accountability.
                   */
                  <img
                    src={person.photo_url}
                    alt={`${person.name}, ${person.role || 'Heraja leadership'}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover bg-surface-elevated"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-h3 mb-1">{person.name}</h2>
                  {person.role && (
                    <p className="font-mono-data uppercase text-neutral-500 mb-3">{person.role}</p>
                  )}
                  {person.bio && <p className="text-body-small text-neutral-700">{person.bio}</p>}
                  {person.linkedin_url && (
                    <a
                      href={person.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-body-small text-brand-accent hover:underline font-medium"
                    >
                      <Linkedin className="w-4 h-4" aria-hidden="true" />
                      {person.name} on LinkedIn
                    </a>
                  )}
                </div>

                {/*
                  Person structured data, so a search engine can attribute the
                  role to a named individual rather than to a page of text.
                */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Person',
                      name: person.name,
                      ...(person.role ? { jobTitle: person.role } : {}),
                      ...(person.photo_url ? { image: person.photo_url } : {}),
                      ...(person.linkedin_url ? { sameAs: [person.linkedin_url] } : {}),
                      worksFor: {
                        '@type': 'Organization',
                        name: 'Heraja Agro Technologies Limited',
                      },
                    }),
                  }}
                />
              </li>
            ))}
          </ul>

          <p className="text-body-small text-neutral-500 mt-10">
            Looking for something else about the company?{' '}
            <Link to="/company/about" className="text-brand-accent hover:underline font-medium">
              About Heraja
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABlock
        title="Talk to the people building this"
        description="Tell us what you are evaluating and we will point you at the right part of the platform."
        primaryCta={{ label: 'Talk to us', href: '/company/contact' }}
      />
    </Layout>
  );
}
