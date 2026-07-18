"use client";

import { useInView } from "framer-motion";
import { useEffect, useState, type RefObject } from "react";

const inViewOptions = {
  once: true,
  amount: 0,
  margin: "0px 0px 120px 0px",
} as const;

function isInViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export function useRevealVisible(
  ref: RefObject<HTMLElement | null>,
  when: "mount" | "inView" = "inView"
) {
  const isInView = useInView(ref, inViewOptions);
  const [isVisible, setIsVisible] = useState(when === "mount");

  useEffect(() => {
    if (when === "mount") {
      setIsVisible(true);
      return;
    }

    if (isInView) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (node && isInViewport(node)) {
      setIsVisible(true);
    }
  }, [when, isInView, ref]);

  return when === "mount" || isVisible || isInView;
}
