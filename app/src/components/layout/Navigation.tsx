import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ArrowRight,
} from 'lucide-react';
import { primaryNav } from '@/config/navigation';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMegaMenu(null), 150);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-fast ease-default ${
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="container-heraja h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Heraja Home"
          >
            <img src="/assets/heraja-logo.png" alt="Heraja" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-primary'
                      : 'text-neutral-700 hover:text-brand-primary hover:bg-surface-elevated'
                  }`}
                  aria-expanded={item.children ? activeMegaMenu === item.label : undefined}
                  aria-haspopup={item.children ? 'true' : undefined}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-instant ${
                        activeMegaMenu === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {item.children && activeMegaMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      style={{ transformOrigin: 'top' }}
                    >
                      <div
                        className="bg-white rounded-lg shadow-xl-token border border-neutral-100 p-8 min-w-[680px]"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className={`grid gap-8 ${item.children.length > 1 ? 'grid-cols-3' : 'grid-cols-1'}`}>
                          {item.children.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-label text-neutral-500 mb-4 uppercase tracking-wider">
                                {section.title}
                              </h3>
                              <ul className="space-y-3">
                                {section.links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      to={link.href}
                                      className="group block"
                                    >
                                      <span className="text-sm font-medium text-brand-primary group-hover:text-brand-secondary transition-colors flex items-center gap-1">
                                        {link.label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                      </span>
                                      {link.description && (
                                        <span className="text-body-small text-neutral-500 mt-0.5 block">
                                          {link.description}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="p-2 text-neutral-700 hover:text-brand-primary hover:bg-surface-elevated rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/company/contact"
              className="px-4 py-2 text-sm font-medium text-brand-primary border border-neutral-300 rounded-sm hover:bg-surface-elevated hover:border-brand-primary transition-all"
            >
              Book Demo
            </Link>
            <Link
              to="/company/contact"
              className="px-4 py-2 text-sm font-medium text-white bg-brand-primary rounded-sm hover:bg-[#1a3a5c] active:scale-[0.98] transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-neutral-700 hover:text-brand-primary rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-over */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-y-auto lg:hidden shadow-2xl"
              role="dialog"
              aria-label="Mobile navigation"
            >
              {/* Mobile Search */}
              <div className="p-4 border-b border-neutral-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="Search platform, solutions, resources..."
                    className="w-full h-10 pl-10 pr-4 text-sm border border-neutral-300 rounded-sm focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/10 outline-none"
                  />
                </div>
              </div>

              {/* Mobile Accordion Nav */}
              <div className="py-2">
                {primaryNav.map((item) => (
                  <div key={item.label} className="border-b border-neutral-100 last:border-0">
                    {item.children ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-6 py-4 text-left"
                          onClick={() =>
                            setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                          }
                          aria-expanded={mobileAccordion === item.label}
                        >
                          <span className={`font-medium ${isActive(item.href) ? 'text-brand-primary' : 'text-neutral-700'}`}>
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-neutral-500 transition-transform ${
                              mobileAccordion === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileAccordion === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4">
                                {item.children.map((section) => (
                                  <div key={section.title} className="mb-4 last:mb-0">
                                    <h4 className="text-label text-neutral-500 mb-2 uppercase">
                                      {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                      {section.links.map((link) => (
                                        <li key={link.href}>
                                          <Link
                                            to={link.href}
                                            className="block text-sm text-neutral-700 hover:text-brand-primary py-1"
                                          >
                                            {link.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-6 py-4 font-medium ${
                          isActive(item.href) ? 'text-brand-primary' : 'text-neutral-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="p-6 space-y-3 border-t border-neutral-100">
                <Link
                  to="/company/contact"
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-brand-primary rounded-sm"
                >
                  Get Started
                </Link>
                <Link
                  to="/company/contact"
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-brand-primary border border-neutral-300 rounded-sm"
                >
                  Book Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
