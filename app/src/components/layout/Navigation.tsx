import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import { track } from '@/lib/analytics';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

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

  /*
   * Escape closes whichever surface is open, and returns focus to the control
   * that opened it. Without this a keyboard user who opens the mobile menu has
   * no way out except tabbing through every link in it — and a dropdown left
   * open after the pointer moves away traps nothing but confuses everything.
   */
  useEffect(() => {
    if (!mobileOpen && !activeMegaMenu) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (mobileOpen) {
        setMobileOpen(false);
        mobileTriggerRef.current?.focus();
      } else if (activeMegaMenu) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen, activeMegaMenu]);

  /*
   * Focus trap for the mobile overlay. It covers the whole viewport, so Tab
   * reaching the page behind it would move focus somewhere the user cannot
   * see — the classic reason an overlay is unusable with a keyboard or a
   * screen reader even though it looks fine.
   */
  useEffect(() => {
    if (!mobileOpen) return;
    const panel = mobilePanelRef.current;
    if (!panel) return;

    const selector =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    panel.querySelector<HTMLElement>(selector)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(selector))
        .filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener('keydown', onKeyDown);
    return () => panel.removeEventListener('keydown', onKeyDown);
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
                      {/*
                        520px for the two-column Platform panel, 280px for the
                        single-column Solutions list. It was a flat 680px with
                        a hardcoded 3-column grid, which now that Platform has
                        two groups would have left an empty third column — and
                        680px is wide for a panel that has to fit inside a
                        1024px viewport, which is where the desktop nav now
                        appears.
                      */}
                      <div
                        className={`bg-white rounded-lg shadow-xl-token border border-neutral-100 p-6 ${
                          item.children.length > 1 ? 'min-w-[520px]' : 'min-w-[280px]'
                        }`}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className={`grid gap-8 ${item.children.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
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
                                      <span className="text-sm font-medium text-brand-primary group-hover:text-brand-accent transition-colors flex items-center gap-1">
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

          {/*
            One call to action, not two.

            "Book Demo" and "Get Started" competed for the same click and meant
            the same thing — and "Get Started" implies a self-service signup
            that does not exist, since every enquiry routes to a conversation.
            The Search control beside them was removed for a simpler reason: it
            had no handler and no search index behind it.
          */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/company/contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-brand-primary rounded-sm hover:bg-[#3D3738] active:bg-[#151213] transition-colors"
              onClick={() => track('cta_click', { label: 'Talk to us', page: 'header' })}
            >
              Talk to us
            </Link>
          </div>

          {/* Mobile Toggle — 44px minimum target */}
          <button
            ref={mobileTriggerRef}
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-700 hover:text-brand-primary rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
              ref={mobilePanelRef}
              id="mobile-navigation"
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-y-auto lg:hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
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

              {/* Single CTA, pinned below the links */}
              <div className="p-6 border-t border-neutral-100">
                <Link
                  to="/company/contact"
                  className="block w-full text-center px-4 py-3 min-h-[44px] text-sm font-semibold text-white bg-brand-primary rounded-sm hover:bg-[#3D3738] transition-colors"
                  onClick={() => track('cta_click', { label: 'Talk to us', page: 'mobile-nav' })}
                >
                  Talk to us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
