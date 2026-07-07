import { Link } from 'react-router-dom';
import { footerColumns, footerLegal } from '@/config/navigation';

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
                src="/assets/heraja-logo.png"
                alt="Heraja"
                className="h-7 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Digital infrastructure enabling agricultural organizations to coordinate modern ecosystems.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="text-neutral-400 hover:text-brand-secondary transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-secondary transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-label uppercase tracking-wider text-neutral-400 mb-4">
                {column.title}
              </h3>
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

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-h4 text-white mb-1">Stay informed</h3>
              <p className="text-body-small text-neutral-400">
                Infrastructure updates, research, and ecosystem news.
              </p>
            </div>
            <form className="flex gap-2 max-w-md w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 h-11 px-4 bg-white/10 border border-white/20 rounded-sm text-sm text-white placeholder:text-neutral-500 focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20"
              />
              <button
                type="submit"
                className="h-11 px-5 bg-brand-secondary text-brand-primary font-semibold text-sm rounded-sm hover:bg-[#00E0B5] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-small text-neutral-500">
            &copy; {new Date().getFullYear()} Heraja Agro Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLegal.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-body-small text-neutral-500 hover:text-neutral-300 transition-colors"
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
