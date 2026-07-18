"use client";

import { MotionConfig } from "framer-motion";

type MotionProviderProps = {
  children: React.ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      reducedMotion={
        process.env.NODE_ENV === "production" ? "user" : "never"
      }
    >
      {children}
    </MotionConfig>
  );
}
