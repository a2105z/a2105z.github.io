import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sectionIds = ["about", "experience", "projects", "skills", "contact"];
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-display text-2xl md:text-3xl tracking-tight transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Aarav Mittal
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-all px-4 rounded-lg ${
                    isScrolled
                      ? isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                      : isActive
                        ? "text-white bg-white/15"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleDark}
              className={`p-2.5 rounded-lg transition-all ${
                isScrolled ? "hover:bg-muted text-foreground" : "hover:bg-white/15 text-white"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button
              onClick={() => window.open("https://github.com/a2105z", "_blank")}
              className={`h-11 px-6 font-semibold rounded-lg shadow-lg transition-all ${
                isScrolled
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              GitHub
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-lg ${isScrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`lg:hidden pb-6 space-y-2 border-t pt-4 ${isScrolled ? "border-border/50" : "border-white/20"}`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium ${
                  isScrolled ? "text-foreground hover:bg-primary/10" : "text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
