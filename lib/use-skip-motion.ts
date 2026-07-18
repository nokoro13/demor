"use client";

import { useReducedMotion } from "framer-motion";

/** True when the user prefers reduced motion (iOS Accessibility setting). */
export function useShouldReduceMotion() {
  return useReducedMotion() === true;
}
