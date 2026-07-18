"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { appleEaseOut, motionTransition } from "@/lib/motion";
import { useRevealVisible } from "@/lib/use-reveal-visible";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  duration?: keyof typeof motionTransition;
  offset?: number;
  when?: "mount" | "inView";
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = "medium",
  offset = 28,
  when = "inView",
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRevealVisible(ref, when);
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      ref={ref}
      className={className}
      data-motion-reveal
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : offset }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : shouldReduceMotion ? 0 : offset,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : motionTransition[duration].duration,
        ease: appleEaseOut,
        delay: isVisible ? delay : 0,
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
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      className={className}
      data-motion-reveal
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : offset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : motionTransition[duration].duration,
        ease: appleEaseOut,
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
  when?: "mount" | "inView";
};

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
  when = "inView",
  ...props
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRevealVisible(ref, when);
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      ref={ref}
      className={className}
      data-motion-reveal
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : stagger,
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
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
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.2 : 0.85,
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
  when?: "mount" | "inView";
};

export function ScaleReveal({
  children,
  className,
  delay = 0,
  when = "inView",
  ...props
}: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRevealVisible(ref, when);
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      ref={ref}
      className={className}
      data-motion-reveal
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 28,
        scale: shouldReduceMotion ? 1 : 0.97,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : shouldReduceMotion ? 0 : 28,
        scale: isVisible ? 1 : shouldReduceMotion ? 1 : 0.97,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : motionTransition.slow.duration,
        ease: appleEaseOut,
        delay: isVisible ? delay : 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
