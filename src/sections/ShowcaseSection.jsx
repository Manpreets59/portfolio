import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const vertexRef = useRef(null);
  const quantumCareRef = useRef(null);
  const mentorMindRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [vertexRef.current, quantumCareRef.current, mentorMindRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <a
            href="https://github.com/Manpreets59/Vertex"
            target="_blank"
            rel="noreferrer"
            ref={vertexRef}
            className="first-project-wrapper"
          >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Vertex code editor" />
            </div>
            <div className="text-content">
              <h2>
                Vertex — A Cloud IDE with a Gemini-Powered AI Coding
                Assistant
              </h2>
              <p className="text-white-50 md:text-xl">
                Next.js + Convex + Inngest, with a live browser preview
                sandbox, GitHub import/export, and an embedded AI agent that
                creates, edits, and refactors files on request.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            <a
              href="https://github.com/Manpreets59/QuantumCare-Nexus"
              target="_blank"
              rel="noreferrer"
              className="project"
              ref={quantumCareRef}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="QuantumCare healthcare platform"
                />
              </div>
              <h2>QuantumCare — MERN Healthcare Platform with JWT RBAC</h2>
            </a>

            <a
              href="https://github.com/Manpreets59/Mentormind"
              target="_blank"
              rel="noreferrer"
              className="project"
              ref={mentorMindRef}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="MentorMind AI tutor" />
              </div>
              <h2>MentorMind — AI Tutor with Persistent Memory</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
