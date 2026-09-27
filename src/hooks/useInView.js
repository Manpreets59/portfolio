import { useEffect, useRef, useState } from "react";

/**
 * Returns true once the referenced element has entered the viewport.
 * Stays true forever after (a WebGL context is expensive to tear down and
 * recreate, so this is a "start once visible" gate, not a toggle).
 *
 * Use this to defer mounting a <Canvas> until it's actually about to be
 * seen, instead of running its render loop from page load regardless of
 * scroll position.
 */
export function useInView(rootMargin = "200px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView];
}
