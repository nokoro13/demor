"use client";

import { useReducedMotion } from "framer-motion";

/** True only when the user has explicitly enabled Reduce Motion. */
export function useSkipMotion() {
  return useReducedMotion() === true;
}
