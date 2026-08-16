import ProductScreenshot from './ProductScreenshot';
import { assertEvidenceOrdering, type EvidenceItem } from '@/config/productEvidence';

interface Props {
  items: EvidenceItem[];
  /** Section heading. */
  title: string;
  /** One line on what this set of screens is. */
  intro?: string;
}

/*
 * Screens from a running application, laid out so they can be read.
 *
 * Mobile is a horizontal snap-scroll showing about 1.15 cards, so the cut
 * edge tells the reader there is more without needing a control to say so.
 * It uses native scrolling rather than a JS carousel: native scroll is
 * keyboard-operable, works under reduced motion, respects the platform's
 * scroll physics and costs nothing in JavaScript.
 *
 * There is no lightbox. Enlarging a phone screenshot adds nothing, and a
 * modal would add a focus trap, a close affordance and a keyboard contract
 * for no benefit.
 */
export default function ProductEvidenceGallery({ items, title, intro }: Props) {
  // Throws in dev if the two contradicting Farm Intelligence screens are
  // adjacent. See the ordering note in config/productEvidence.ts.
  assertEvidenceOrdering(items);

  return (
    <section className="section-padding bg-surface-elevated">
      <div className="container-heraja">
        <div className="mb-10 max-w-2xl">
          <p className="text-overline mb-3">Inside the product</p>
          <h2 className="text-h2 mb-3">{title}</h2>
          {intro && <p className="text-body-large text-neutral-700">{intro}</p>}
        </div>

        {/*
          One list, two presentations. Below md it scrolls horizontally with
          snap points; from md it becomes a grid. Same DOM order either way,
          so the ordering constraint holds in both.
        */}
        {/*
          tabIndex and role are what make the mobile scroller usable without a
          pointer. Below md this is a horizontally scrolling region whose
          children contain no focusable elements, so without a tab stop there
          is no way to reach — or scroll — the screens past the first one using
          a keyboard. A focusable scroll container gets arrow-key scrolling
          from the browser for free, which is the whole fix.

          From md it is a grid with nothing to scroll, but the tab stop is kept
          rather than made conditional: a focus target that appears and
          disappears with viewport width is harder to reason about than one
          that is always there, and it costs a single extra Tab press.
        */}
        <ul
          tabIndex={0}
          role="region"
          aria-label={`${title} — screenshot gallery`}
          className="
            flex md:grid md:grid-cols-2 lg:grid-cols-3
            gap-6 lg:gap-8
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0
            scrollbar-hide
          "
        >
          {items.map((item, i) => (
            <li
              key={item.src}
              className="snap-start shrink-0 basis-[86%] sm:basis-[60%] md:basis-auto md:shrink"
            >
              <ProductScreenshot {...item} priority={i === 0} />
            </li>
          ))}
        </ul>

        {/*
          Told, not implied. A visitor evaluating this company should know
          these are captures of the running product rather than design
          comps — it is the whole reason they are on the page.
        */}
        <p className="mt-8 text-body-small text-neutral-500 max-w-2xl">
          These are screens from the deployed application, captured on a phone. They are not
          mockups, and they have not been retouched.
        </p>
      </div>
    </section>
  );
}
