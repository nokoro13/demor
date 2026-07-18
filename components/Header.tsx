"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portalUrl } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { motionTransition } from "@/lib/motion";
import { useSkipMotion } from "@/lib/use-skip-motion";

export function Header() {
  const skipMotion = useSkipMotion();

  if (skipMotion) {
    return (
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <HeaderContent />
      </header>
    );
  }

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={motionTransition.fast}
    >
      <HeaderContent />
    </motion.header>
  );
}

function HeaderContent() {
  return (
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
  );
}
