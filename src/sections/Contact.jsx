import { useRef, useState, useEffect, lazy, Suspense } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import SceneErrorBoundary from "../components/SceneErrorBoundary";
import { useInView } from "../hooks/useInView";

const ContactExperience = lazy(() =>
  import("../components/models/contact/ContactExperience")
);

const Contact = () => {
  const formRef = useRef(null);
  const [sceneRef, sceneInView] = useInView("300px");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Tells you exactly which env var is missing at page load, instead of
    // waiting for a submit to fail with EmailJS's generic error message.
    const required = [
      "VITE_APP_EMAILJS_SERVICE_ID",
      "VITE_APP_EMAILJS_TEMPLATE_ID",
      "VITE_APP_EMAILJS_PUBLIC_KEY",
    ];
    const missing = required.filter((key) => !import.meta.env[key]);
    if (missing.length > 0) {
      console.warn(
        `[Contact] Missing from .env: ${missing.join(", ")}. ` +
          "Make sure .env sits next to package.json (not inside src/) and " +
          "restart `npm run dev` after adding or editing it."
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      // Check the browser console (F12) for the real reason EmailJS
      // rejected this — almost always a missing/incorrect .env value.
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  {/* This field isn't referenced in your template body,
                      but it's still sent to EmailJS — set your template's
                      "Reply To" setting (not the body) to {{email}} so
                      replies actually reach the sender. */}
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* Populates the {{time}} variable your template uses. */}
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm">
                    Message sent — thanks for reaching out!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Open the browser console (F12) for
                    the exact error — it's almost always a missing or
                    mistyped value in .env.
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div
              ref={sceneRef}
              className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden"
            >
              <SceneErrorBoundary
                label="Contact scene"
                fallback={
                  <div className="w-full h-full flex items-center justify-center text-white/70 text-sm p-4 text-center">
                    Couldn't load the 3D scene here — check the console (F12)
                    for the exact error.
                  </div>
                }
              >
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-white/70 text-sm">
                      Loading…
                    </div>
                  }
                >
                  {sceneInView && <ContactExperience />}
                </Suspense>
              </SceneErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
