import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { lazy, Suspense } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import SceneErrorBoundary from "../components/SceneErrorBoundary";
import { words } from "../constants";
import { useIsVisible } from "../hooks/useIsVisible";

// Code-split the Three.js/R3F scene out of the main bundle — it's the
// heaviest chunk on the page and isn't needed for the first paint.
const HeroExperience = lazy(() =>
  import("../components/models/hero_models/HeroExperience")
);

const Hero = () => {
  const [sceneRef, sceneVisible] = useIsVisible("100px");
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Manpreet, a full-stack developer who builds
              backend-heavy, real-time systems with Node.js, TypeScript, and
              React.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout" ref={sceneRef}>
            <SceneErrorBoundary label="Hero scene">
              <Suspense
                fallback={
                  <div className="w-full h-full animate-pulse rounded-3xl bg-white/5" />
                }
              >
                <HeroExperience active={sceneVisible} />
              </Suspense>
            </SceneErrorBoundary>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
