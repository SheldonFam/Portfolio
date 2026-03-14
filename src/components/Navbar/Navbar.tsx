import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import { NAV_ITEMS } from "../../data/navigation";
import { useNavMenu } from "../../hooks/useNavMenu";
import { useTheme } from "../../hooks/useTheme";
import resumePdf from "../../assets/SheldonFam-Resume.pdf";

export function Navbar() {
  const { isOpen, toggle, close } = useNavMenu();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <>
      <nav className="fixed top-0 w-full bg-nav-bg backdrop-blur-xl border-b border-border-custom z-50 px-8 transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-15">
          <div className="font-bold text-lg tracking-tight">
            sheldon<span className="text-accent">.dev</span>
          </div>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex list-none gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-secondary no-underline text-sm hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 active:scale-95 transition-transform,background-color no-underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <FileText size={14} aria-hidden="true" />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-custom bg-surface text-text-secondary hover:text-text-primary hover:border-accent-border transition-colors,border-color cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden text-text-primary bg-transparent border-none cursor-pointer focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 z-60"
              onClick={toggle}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu — sibling to nav to avoid backdrop-blur stacking context */}
      <div
        className={`md:hidden fixed inset-0 top-15 bg-bg z-50 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col items-center gap-8 list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-text-primary no-underline text-2xl font-semibold hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                onClick={close}
                tabIndex={isOpen ? 0 : -1}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-accent-hover active:scale-95 transition-transform,background-color no-underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          onClick={close}
          tabIndex={isOpen ? 0 : -1}
        >
          <FileText size={16} aria-hidden="true" />
          Resume
        </a>
      </div>
    </>
  );
}
