/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        /*
         * Heraja Brand Colors — sourced directly from the Heraja logo mark.
         *
         * SURFACE RULE (WCAG AA). The logo green and orange are DARK-SURFACE
         * colours. Measured against #FFFFFF they are 2.20:1 and 2.13:1 —
         * both well under the 4.5:1 AA needs for text and the 3:1 it needs
         * for UI components and focus indicators. Against the brand charcoal
         * they are 7.40:1 and 8.06:1.
         *
         * So the same hue is carried by two tokens, and which one you reach
         * for is decided by the surface behind it, not by preference:
         *
         *   dark ground  → secondary / tertiary   (the logo values, unchanged)
         *   light ground → accent / accent-warm   (same hue, corrected value)
         *
         * The logo itself keeps #7AC142 because it is a graphic, not text,
         * and graphics carry no contrast requirement. Nothing here is a
         * rebrand — accent is the same green at a darker value, which is why
         * it reads as the brand rather than as a new colour.
         */
        brand: {
          primary: '#231F20',        // logo charcoal/black
          secondary: '#7AC142',      // logo green  — DARK GROUNDS + LOGO ONLY
          tertiary: '#F99D1C',       // logo orange — DARK GROUNDS ONLY
          accent: '#3A7F27',         // green on light grounds  — 4.95:1 on white
          'accent-warm': '#9A5B00',  // orange on light grounds — 5.43:1 on white
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#F6F7F5',
          dark: '#231F20',
        },
        neutral: {
          900: '#231F20',
          700: '#4A4546',
          500: '#6B6A6A',
          300: '#D8D6D5',
          100: '#F3F3F2',
        },
        /*
         * Infrastructure Module Colors — used as capability-card icon tints
         * across the platform pages (~74 call sites).
         *
         * Values darkened to clear 4.5:1 on white. The previous set was mixed
         * — marketplace was the raw logo green at 2.20:1 and identity the raw
         * orange at 2.13:1, so those icons were barely visible on the white
         * cards they sit on. The concept-to-hue mapping is unchanged; only the
         * values moved, so every existing usage keeps its meaning.
         */
        infra: {
          haos: '#231F20',
          marketplace: '#3A7F27',
          traceability: '#336B47',
          ai: '#8A5216',
          identity: '#9A5B00',
          api: '#43792B',
        },
        /*
         * Semantic. These sit on light surfaces, so they take the light-ground
         * values. `error` previously disagreed with index.css (#D64545 here vs
         * #EF4444 there) — one value now, defined here and consumed by the CSS
         * variable rather than duplicated.
         */
        success: '#3A7F27',
        warning: '#9A5B00',
        error: '#C0392B',
        info: '#336B47',
        /* Focus ring — see the *:focus-visible rule in index.css. */
        focus: '#3A7F27',
      },
      /*
       * Syne and DM Mono are the faces the HAOS product estate already uses
       * (apps/farm-web/app/layout.tsx imports both from next/font/google).
       * This site embeds screenshots of those products as its primary
       * evidence, so sharing their display face is what stops the screenshots
       * reading as borrowed from somewhere else.
       *
       * Inter is deliberately retained for body copy: it is highly readable
       * at 14–16px on the low-DPI Android screens much of this audience uses,
       * and swapping it would add a font download for no legibility gain.
       * Syne is a display face — it is not used below h3.
       */
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      /*
       * `display`, `h1`, `h2` and `h3` are deliberately NOT defined here.
       *
       * They used to be, at fixed sizes — h1 at 3rem, display at 4rem — and
       * src/index.css separately defines .text-display / .text-h1 / .text-h2 /
       * .text-h3 with clamp() so headings scale down on small screens.
       *
       * Both cannot win, and the utility did: Tailwind emits fontSize keys
       * into the utilities layer, which outranks the components layer where
       * the clamp rules live. So every heading on the site rendered at its
       * full desktop size at every width — a 48px h1 inside a 288px column on
       * a 320px phone. That was the actual cause of the horizontal scrolling
       * across the site, and it had nothing to do with the content of any
       * individual heading.
       *
       * Removing these four keys lets the clamp definitions apply. The
       * remaining keys below have no counterpart in index.css, so they are
       * the only definition and there is nothing to collide with.
       */
      fontSize: {
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-large': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      spacing: {
        'space-1': '4px',
        'space-2': '8px',
        'space-3': '16px',
        'space-4': '24px',
        'space-5': '32px',
        'space-6': '48px',
        'space-7': '64px',
        'space-8': '96px',
        'space-9': '128px',
        'space-10': '160px',
      },
      maxWidth: {
        'content': '1280px',
        'full-bleed': '1440px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        'sm-token': '4px',
        'md-token': '8px',
        'lg-token': '12px',
        'xl-token': '16px',
        'full-token': '9999px',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'sm-token': '0 1px 2px rgba(35, 31, 32, 0.05)',
        'md-token': '0 4px 6px -1px rgba(35, 31, 32, 0.07)',
        'lg-token': '0 10px 15px -3px rgba(35, 31, 32, 0.08)',
        'xl-token': '0 20px 25px -5px rgba(35, 31, 32, 0.1)',
        'glow': '0 0 20px rgba(122, 193, 66, 0.15)',
      },
      transitionTimingFunction: {
        'default-token': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'decelerate': 'cubic-bezier(0, 0, 0.2, 1)',
        'accelerate': 'cubic-bezier(0.4, 0, 1, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        'instant': '100ms',
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
        'dramatic': '800ms',
      },
      /*
       * `screens` is deliberately NOT overridden.
       *
       * It used to be, and every name was shifted one tier off Tailwind's
       * defaults: sm fired at 768 rather than 640, md at 1024, lg at 1280.
       * Idiomatic Tailwind — written by a person, copied from the docs, or
       * generated by a tool — therefore landed one tier wider than intended
       * everywhere, silently. Layouts looked correct on the machine they were
       * built on and collapsed a tier late elsewhere.
       *
       * Defaults now apply: sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536.
       * Consequences that were checked rather than assumed, since every one
       * of ~230 responsive utilities now fires one tier EARLIER:
       *   · desktop nav (hidden lg:flex) appears at 1024, not 1280 — which is
       *     the intended breakpoint, and the dropdown panel fits at that width
       *   · .grid-heraja goes 2-up at 640 and 3-up at 1024
       *   · container padding steps at 640/1024/1280
       * The removed `xs` alias had no breakpoint call sites; the only "xs:" in
       * the tree is a cva variant key in ui/input-group.tsx, not a prefix.
       */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "slide-up": "slide-up 0.5s cubic-bezier(0, 0, 0.2, 1) forwards",
        "draw-line": "draw-line 1.5s cubic-bezier(0, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
