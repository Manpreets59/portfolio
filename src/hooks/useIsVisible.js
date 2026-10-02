import { useEffect, useRef, useState } from "react";

/**
 * Unlike useInView (one-way "has been seen"), this toggles: true while the
 * element is near the viewport, false once it scrolls away. Used to pause
 * WebGL render loops for canvases nobody can see.
 */
export function useIsVisible(rootMargin = "100px") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, visible];
}
