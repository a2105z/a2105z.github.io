import { useState } from "react";
import NavbarButton from "./NavbarButton";

const NAV_ITEMS = [
  "About",
  "Experience",
  "Education",
  "Focus",
  "Leadership",
  "Contact",
];

const Navbar: React.FC<{
  selectedPage: string;
  isTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const [open, setOpen] = useState(false);

  const go = (page: string) => {
    setOpen(false);
    props.handleGoToPage(page);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-line`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10 md:px-14">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[15px] font-medium text-ink"
          >
            Aarav Mittal
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => (
              <NavbarButton
                key={item}
                text={item}
                delay={0.03 * i}
                backgroundIsTransparent={props.isTransparent}
                selectedButton={props.selectedPage}
                handleGoToPage={props.handleGoToPage}
              />
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-[14px] text-accent"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="md:hidden flex flex-col pb-4 border-t border-line">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => go(item)}
                className={`text-left py-3 text-[15px] ${
                  props.selectedPage === item
                    ? "text-accent font-medium"
                    : "text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
