import { CONTACT_LINKS } from "../../data/contacts";
import { NAV_ITEMS } from "../../data/navigation";
import { ContactIcon } from "../common/ContactIcon";

export function Footer() {
  return (
    <footer className="border-t border-border-custom py-10 px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Sheldon Fam. All rights reserved.
        </div>
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {CONTACT_LINKS.filter((l) => l.href.startsWith("http")).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label={link.label}
            >
              <ContactIcon type={link.iconType} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
