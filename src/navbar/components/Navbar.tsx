import { useEffect, useState } from "react";
import NavbarButton from "./NavbarButton";

const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

const useLocalTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      return d.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/Chicago",
      });
    };
    setTime(fmt());
    const id = window.setInterval(() => setTime(fmt()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
};

const Navbar: React.FC<{
  selectedPage: string;
  isTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const time = useLocalTime();

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

          {/* Local time */}
          <div className="hidden md:flex items-center gap-2 text-[11px] text-ink-dim tracking-[0.06em] font-medium">
            <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulseDot" />
            <span>{time ? `${time} CDT · Urbana, IL` : "Urbana, IL"}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
