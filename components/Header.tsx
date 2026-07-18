import Link from "next/link";
import Image from "next/image";
import { portalUrl } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Demor" width={32} height={32} priority />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Demor
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          <a
            href={portalUrl}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Sign In
          </a>
          <a
            href={portalUrl}
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}
