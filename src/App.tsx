import React, { useEffect, useRef, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NavbarWrapper from "./navbar/pages/NavbarWrapper";
import Hero from "./hero/pages/Hero";
import About from "./about/pages/About";
import Experience from "./experience/pages/Experience";
import Education from "./experience/pages/Education";
import Projects from "./projects/pages/Projects";
import Skills from "./skills/pages/Skills";
import ContactForm from "./contact/pages/ContactForm";
import Footer from "./footer/pages/Footer";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [selectedPage, setSelectedPage] = useState("About");
  const [refLocations, setRefLocations] = useState<{ [key: string]: number }>(
    {}
  );

  const fetchLocation = (ref: React.RefObject<HTMLDivElement>): number =>
    ref.current ? ref.current.offsetTop : 0;

  const fetchAllLocations = (): { [key: string]: number } => ({
    About: fetchLocation(aboutRef) - 0,
    Experience: fetchLocation(experienceRef) - 50,
    Education: fetchLocation(educationRef) - 50,
    Projects: fetchLocation(projectsRef) - 50,
    Skills: fetchLocation(skillsRef) - 50,
    Contact: fetchLocation(contactRef) + 50,
  });

  useEffect(() => {
    setRefLocations(fetchAllLocations());
    const onResize = () => setRefLocations(fetchAllLocations());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;
    const handleScroll = () => {
      if (Object.keys(refLocations).length === 0) return;
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const currentLocation = window.scrollY;
        let minimumDistance: number | null = null;
        let page: string | null = null;
        for (const key of Object.keys(refLocations)) {
          const topLocation = refLocations[key] + 50;
          const distance = Math.abs(topLocation - currentLocation);
          if (minimumDistance === null || distance < minimumDistance) {
            minimumDistance = distance;
            page = key;
          }
        }
        if (page) setSelectedPage(page);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, [refLocations]);

  const handleGoToPage = (newPage: string) => {
    setSelectedPage(newPage);
    const locations = fetchAllLocations();
    const location = locations[newPage];
    if (typeof location === "number") {
      window.scrollTo({ top: location, behavior: "smooth" });
    }
  };

  return (
    <Switch>
      <Route path="/">
        <NavbarWrapper
          selectedPage={selectedPage}
          handleGoToPage={handleGoToPage}
        >
          <div className="overflow-x-hidden bg-white">
            <Hero onGoToPage={handleGoToPage} />
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={experienceRef}>
              <Experience />
            </div>
            <div ref={educationRef}>
              <Education />
            </div>
            <div ref={projectsRef}>
              <Projects />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
            <div ref={contactRef}>
              <ContactForm />
            </div>
            <br />
            <Footer />
          </div>
        </NavbarWrapper>
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
