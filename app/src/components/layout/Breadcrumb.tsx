import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { generateBreadcrumbs } from '@/config/navigation';

export default function Breadcrumb() {
  const location = useLocation();
  const items = generateBreadcrumbs(location.pathname);

  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-surface-elevated border-b border-neutral-100">
      <div className="container-heraja py-3">
        <ol className="flex items-center flex-wrap gap-1.5 text-body-small" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => (
            <li
              key={item.href}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-neutral-300" aria-hidden="true" />}
              {index === items.length - 1 ? (
                /*
                 * aria-current tells a screen-reader user which crumb is the
                 * page they are on. Without it the trail is just a list of
                 * names with no indication of position.
                 */
                <span className="breadcrumb-item-current" aria-current="page" itemProp="name">
                  {item.label}
                </span>
              ) : item.linkable === false ? (
                // A section that is not a page — see SECTION_ONLY_PATHS.
                <span className="breadcrumb-item" itemProp="name">{item.label}</span>
              ) : (
                <Link to={item.href} className="breadcrumb-item" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
