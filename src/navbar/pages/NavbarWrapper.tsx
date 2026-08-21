import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const NavbarWrapper: React.FC<{
  selectedPage: string;
  children: JSX.Element;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIsTransparent(window.scrollY < 60);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div>
      <Navbar
        selectedPage={props.selectedPage}
        isTransparent={isTransparent}
        handleGoToPage={props.handleGoToPage}
      />
      {props.children}
    </div>
  );
};

export default NavbarWrapper;
