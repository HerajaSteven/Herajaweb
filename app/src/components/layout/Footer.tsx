import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { footerColumns, footerLegal } from '@/config/navigation';
import { socialLinks } from '@/config/siteContent';

/*
 * A fixed icon per network. The admin can only choose from these five, so
 * every URL that arrives has an icon and nothing renders as a blank square.
 */
const SOCIAL_ICONS = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
} as const;

/* Written out rather than title-cased: "Linkedin" and "Youtube" are wrong. */
const SOCIAL_LABELS = {
  linkedin: 'LinkedIn',
  twitter: 'X (Twitter)',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
} as const;

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white" role="contentinfo">
      <div className="container-heraja py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="Heraja Home">
              <img
                src="/assets/heraja-logo-white.png"
                alt="Heraja"
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Digital infrastructure enabling agricultural organizations to coordinate modern ecosystems.
            </p>
            {/*
              Social links come from the HAOS admin (Site Content → Social
              links) and are baked in at build time.

              The icons that used to sit here pointed at href="#" — they looked
              like profiles and went nowhere, which is the worst answer to give
              someone checking whether a company is real. Nothing is rendered
              now unless a URL exists, so an account that has not been created
              simply has no icon rather than a dead one.
            */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map(([network, url]) => {
                  const Icon = SOCIAL_ICONS[network];
                  if (!Icon) return null;

                  return (
                    <a
                      key={network}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-brand-secondary transition-colors"
                      aria-label={`Heraja on ${SOCIAL_LABELS[network]}`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-label uppercase tracking-wider text-neutral-400 mb-4">
                {column.title}
              </h2>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/*
          The newsletter signup that used to sit here has been removed.

          Three reasons, any one of which would have been enough. Its onSubmit
          was `e.preventDefault()` and nothing else, so every address entered
          was silently discarded — asking for a contact detail and dropping it
          is worse than not asking. Phase 1 removed the newsletter from the
          architecture, as there is nothing to send. And its Subscribe button
          would not wrap, which made it the site's source of horizontal scroll
          at 320px.

          If a mailing list is wanted later it needs somewhere for addresses to
          go before it needs a form.
        */}

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-small text-neutral-300">
            &copy; {new Date().getFullYear()} Heraja Agro Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLegal.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-body-small text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
