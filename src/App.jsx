import { useEffect } from "react";

import Blog from "./sections/Blog";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => {
  useEffect(() => {
    // The 3D sections are lazy-loaded so the initial bundle stays small,
    // but that means the browser only starts fetching each chunk the
    // moment it's requested — which feels like a stall on first scroll.
    // Prefetching them during idle time (after the first paint) means
    // they're already warm by the time the user reaches each section,
    // without giving up the smaller initial bundle.
    const prefetch = () => {
      import("./components/models/hero_models/HeroExperience");
      import("./components/models/contact/ContactExperience");
      import("./components/models/tech_logos/TechIconCardExperience");
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }

    const id = setTimeout(prefetch, 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
