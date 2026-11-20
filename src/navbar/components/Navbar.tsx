import NavbarButton from "./NavbarButton";

const NAV_ITEMS = ["About", "Experience", "Education", "Contact"];

const Navbar: React.FC<{
  selectedPage: string;
  isTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500 ease-premium ${
        props.isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-canvas/70 backdrop-blur-xl border-b border-line"
      }`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10 md:px-14">
        <div className="flex h-14 items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[13.5px] font-medium tracking-[-0.005em] text-ink hover:opacity-70 transition-opacity"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            Aarav Mittal
          </button>

          {/* Section links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item, i) => (
              <NavbarButton
                key={item}
                text={item}
                delay={0.04 * i}
                backgroundIsTransparent={props.isTransparent}
                selectedButton={props.selectedPage}
                handleGoToPage={props.handleGoToPage}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
