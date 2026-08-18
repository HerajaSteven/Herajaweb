# Phase 6 — Visual Asset Register

## Status

**No imagery was generated in Phase 6.** The brief (§15–19) asks for generated
photography; **image generation is not available in this environment**. Rather
than substitute placeholder or stock imagery, the requirement is recorded here
and the site continues to ship only assets that are real.

Nothing was fabricated. No stock photography was introduced.

## Assets in production today

| Asset | Type | Source | Used on |
|---|---|---|---|
| `fi-livestock.png` | Product screenshot | Real capture, authenticated | Home hero · Farm Intelligence |
| `fi-dashboard.png` | Product screenshot | Real capture | Home evidence · Farm Intelligence (band crop) |
| `fi-reports.png` | Product screenshot | Real capture | Home evidence · Farm Intelligence |
| `fi-vaccinations` · `fi-profile` · `fi-wallet` | Product screenshots | Real captures | Farm Intelligence |
| `marketplace-home` · `echimusika-home` · `logistics-home` | Product screenshots | Real, signed-out | Respective application pages |
| `heraja-logo` · `heraja-logo-white` | Brand mark | Supplied | Header, footer |
| 18 × woff2 | Fonts | Self-hosted | Global |

All ten screenshots are **unmodified**. Crop is the only editorial control.

## Required, not yet produced

Priority order. Each is **[CONTENT REQUIRED]** — real photography, not generated.

| # | Asset | Page / section | Why real, not generated |
|---|---|---|---|
| 1 | Leadership portraits | `/company/leadership` | Implies real, named, accountable people. Generating these would fabricate the company's leadership — explicitly forbidden by the brief §15 |
| 2 | Deployment environment | `/evidence/zimo-clan` | Presented as a real Heraja deployment. A generated facility shown as Zimo Clan's would be fabricated evidence |
| 3 | Field operations | Solutions, Home | Could legitimately be illustrative, but must be labelled as such and must not imply a Heraja-verified farm |
| 4 | Engineering | `/company/about`, `/platform/innovation` | Implies real team |
| 5 | Authenticated captures — Marketplace, e-Chimusika, Logistics | Application pages | **Must be captured, never generated.** A fabricated screenshot is fabricated product evidence |

## Where generated imagery could legitimately be used

If generation becomes available, and only with these constraints:

- Atmospheric agricultural-infrastructure scenes with **no implied Heraja
  ownership** — no signage, no branding, no caption asserting it is a Heraja site
- Abstract or environmental backgrounds behind text, where negative space is
  needed
- Generic role representation **clearly framed as illustrative**

Never: Heraja executives, employees, customers, partners, government officials,
facilities, verified farms, certificates, awards, or anything a reader would take
as a record of something that happened.

## Art direction, when commissioned

Natural documentary lighting · intentional negative space where text overlays ·
realistic professional photography, not cinematic AI composition · natural
posture and expression, no exaggerated smiles · authentic Nigerian/African
environments without geographic stereotype · technology naturally integrated
(tablet during inspection, phone during verification) and supporting the story
rather than dominating it.

Prohibited subjects: farmer staring at camera holding produce · staged handshake
· poverty framing · Western farmland presented as Nigerian · futuristic
agriculture renders · drone shots without operational purpose.

## Quality control, when assets arrive

Inspect every image for: hands and fingers · faces and eyes · equipment realism ·
text artifacts · accidental logos or signage · livestock anatomy · shadow
consistency · environment plausibility. Reject anything that reads as generated.

## Performance contract

Responsive `sizes` matched to render width · AVIF/WebP with fallback · lazy below
the fold, eager only for the hero · explicit dimensions to prevent layout shift ·
mobile crops that do not ship desktop-weight assets.
