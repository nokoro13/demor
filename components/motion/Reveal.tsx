"use client";

import {
  motion,
  useInView,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { appleEaseOut, motionTransition } from "@/lib/motion";
import { useSkipMotion } from "@/lib/use-skip-motion";

const inViewOptions = {
  once: true,
  amount: 0,
  margin: "0px 0px 120px 0px",
} as const;

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  duration?: keyof typeof motionTransition;
  offset?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = "medium",
  offset = 28,
  ...props
}: RevealProps) {
  const skipMotion = useSkipMotion();

  if (skipMotion) {
    return (
      <div className={className} data-motion-reveal>
        {children}
      </div>
    );
  }

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <motion.div
      ref={ref}
      className={className}
      data-motion-reveal
      initial={{ opacity: 0, y: offset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{
        ...motionTransition[duration],
        delay: isInView ? delay : 0,
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
  const skipMotion = useSkipMotion();

  if (skipMotion) {
    return (
      <div className={className} data-motion-reveal>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      data-motion-reveal
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
  /** mount = animate on load (hero). inView = animate when scrolled into view. */
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
  const skipMotion = useSkipMotion();

  if (skipMotion) {
    return (
      <div className={className} data-motion-reveal>
        {children}
      </div>
    );
  }

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, inViewOptions);
  const shouldAnimate = when === "mount" ? true : isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      data-motion-reveal
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
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
  const skipMotion = useSkipMotion();

  if (skipMotion) {
    return (
      <div className={className} data-motion-reveal>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
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
  when?: "mount" | "inView";
};

export function ScaleReveal({
  children,
  className,
  delay = 0,
  when = "inView",
  ...props
}: ScaleRevealProps) {
  const skipMotion = useSkipMotion();

  if (skipMotion) {
    return (
      <div className={className} data-motion-reveal>
        {children}
      </div>
    );
  }

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, inViewOptions);
  const shouldAnimate = when === "mount" ? true : isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      data-motion-reveal
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={
        shouldAnimate
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.97 }
      }
      transition={{
        ...motionTransition.slow,
        delay: shouldAnimate ? delay : 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
