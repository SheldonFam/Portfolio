import { CONTACT_LINKS } from "../../data/contacts";
import { SectionHeader } from "../common/SectionHeader";
import { ContactIcon } from "../common/ContactIcon";

export function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1100px] mx-auto px-8 py-24 text-center"
    >
      <SectionHeader
        tag="Let's Connect"
        title="Get in Touch"
        description="Open to frontend engineering roles and interesting projects. Let's build something great together."
        centered
      />
      <div className="bg-surface-elevated border border-border-custom rounded-2xl p-8 md:p-10 max-w-xl mx-auto">
        <p className="text-text-secondary mb-6 text-sm">
          Reach out through any of these channels
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-center justify-center gap-2.5 bg-bg border border-border-custom px-4 py-3 rounded-xl no-underline text-text-primary text-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 active:scale-95 transition-transform,border-color,color focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
            >
              <ContactIcon type={link.iconType} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
