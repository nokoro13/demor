"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { appleEaseOut, motionTransition } from "@/lib/motion";

const defaultViewport = {
  once: true,
  amount: 0.1,
  margin: "0px 0px 120px 0px",
} as const;

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  duration?: keyof typeof motionTransition;
  offset?: number;
  blur?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = "medium",
  offset = 28,
  blur = true,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, defaultViewport);
  const prefersReducedMotion = useReducedMotion();
  const visible = prefersReducedMotion || isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: offset, filter: blur ? "blur(8px)" : "blur(0px)" }
      }
      transition={{
        ...motionTransition[duration],
        delay: visible ? delay : 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  duration?: keyof typeof motionTransition;
  offset?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = "fast",
  offset = 12,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...motionTransition[duration],
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
  ...props
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, defaultViewport);
  const prefersReducedMotion = useReducedMotion();
  const visible = prefersReducedMotion || isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
};

export function StaggerItem({
  children,
  className,
  ...props
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
          filter: "blur(8px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.85,
            ease: appleEaseOut,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ScaleRevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function ScaleReveal({
  children,
  className,
  delay = 0,
  ...props
}: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { ...defaultViewport, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const visible = prefersReducedMotion || isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : {
              opacity: 0,
              y: 32,
              scale: 0.96,
              filter: "blur(10px)",
            }
      }
      transition={{
        ...motionTransition.slow,
        delay: visible ? delay : 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
