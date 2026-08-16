/*
 * A screenshot of a real, running Heraja application.
 *
 * These are the site's strongest evidence and the easiest thing to ruin by
 * over-treating. The rules the component enforces:
 *
 *   · No retouching. Crop is the only editorial control, and it selects a
 *     region — it never composites, recolours or redraws.
 *   · No perspective, no 3D tilt, no floating. A tilted device mockup is the
 *     visual signature of a company selling an idea rather than a product.
 *   · No annotation drawn over the image. The caption does that job in text,
 *     where a screen reader can reach it.
 *   · Every screenshot carries a caption naming what it proves. A screenshot
 *     with a decorative caption is decoration.
 *   · Alt text describes the content, not the medium.
 */

export type ScreenshotCrop = 'full' | 'top' | 'band';

export interface ProductScreenshotProps {
  /** Path under public/. */
  src: string;
  /** The application, as a person would name it. */
  application: string;
  /** The product's own name for this screen. */
  screen: string;
  /**
   * What this screen proves, in a sentence. Required — a screenshot without
   * one is decoration, and this component has no use for decoration.
   */
  caption: string;
  /** Describes the content of the screen, not that it is a screenshot. */
  alt: string;
  /**
   * Which region of the capture to show.
   *   full — the whole screen
   *   top  — the header and what sits directly beneath it
   *   band — the middle of the screen, skipping header and footer chrome
   */
  crop?: ScreenshotCrop;
  /** Terminology quoted from the screen itself, set beside it — never over it. */
  annotation?: string;
  /** Only the one image above the fold should skip lazy loading. */
  priority?: boolean;
}

/*
 * Crops are expressed as an aspect ratio plus an object-position, so the
 * browser does the cropping and the underlying file is never modified.
 */
const CROP_STYLES: Record<ScreenshotCrop, { aspect: string; position: string }> = {
  full: { aspect: '9 / 19.5', position: 'center top' },
  top: { aspect: '4 / 3', position: 'center top' },
  band: { aspect: '4 / 3', position: 'center 58%' },
};

export default function ProductScreenshot({
  src,
  application,
  screen,
  caption,
  alt,
  crop = 'full',
  annotation,
  priority = false,
}: ProductScreenshotProps) {
  const { aspect, position } = CROP_STYLES[crop];

  return (
    <figure className="flex flex-col">
      {/*
        The frame reads as "this is a phone screen" and then stops. No notch,
        no speaker, no home indicator, no reflection — every one of those is a
        detail about a device rather than about the product being shown.
      */}
      <div className="rounded-[20px] border-[6px] border-brand-primary bg-brand-primary overflow-hidden shadow-lg-token">
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          /*
           * Intrinsic size of the captures (iPhone-class viewport at 3x DPR).
           * Declared so the browser reserves the right space before the image
           * arrives — ten unsized images would otherwise be the largest source
           * of layout shift on the site.
           */
          width={1170}
          height={2532}
          className="w-full h-full object-cover block rounded-[14px]"
          style={{ aspectRatio: aspect, objectPosition: position }}
        />
      </div>

      <figcaption className="mt-4">
        <p className="text-overline mb-1.5">
          {application} · {screen}
        </p>
        <p className="text-body-small text-neutral-700">{caption}</p>
        {annotation && (
          /*
           * Set beside the image rather than over it, so it is selectable,
           * translatable and reachable by a screen reader.
           */
          <p className="mt-2 font-mono-data text-neutral-500 border-l-2 border-neutral-300 pl-3">
            {annotation}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
