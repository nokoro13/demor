"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { portalUrl } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { motionTransition } from "@/lib/motion";

export function Header() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={motionTransition.fast}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Demor" width={45} height={32} priority />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Demor
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            render={<a href={portalUrl} />}
            nativeButton={false}
          >
            Sign In
          </Button>
          <Button
            size="sm"
            render={<a href={portalUrl} />}
            nativeButton={false}
          >
            Sign Up
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
