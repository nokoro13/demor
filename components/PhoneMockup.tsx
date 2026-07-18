import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  className?: string;
  size?: "md" | "lg";
  screenshot?: string;
  screenshotAlt?: string;
  priority?: boolean;
};

const sizeClasses = {
  md: "w-[260px]",
  lg: "w-[300px]",
};

export function PhoneMockup({
  className,
  size = "lg",
  screenshot,
  screenshotAlt = "Demor mobile app screenshot",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto", sizeClasses[size], className)}>
      <div
        className="pointer-events-none absolute inset-x-6 -bottom-6 h-16 rounded-full bg-primary/15 blur-2xl"
        aria-hidden
      />

      <div className="relative rounded-[2.75rem] bg-linear-to-b from-zinc-700 to-zinc-900 p-[3px] shadow-[0_24px_60px_-20px_rgba(16,98,166,0.45)]">
        <div className="absolute -left-[2px] top-24 h-8 w-[3px] rounded-l bg-zinc-600" />
        <div className="absolute -right-[2px] top-32 h-12 w-[3px] rounded-r bg-zinc-600" />

        <div className="overflow-hidden rounded-[2.55rem] bg-zinc-950 p-2">
          <div className="relative overflow-hidden rounded-[2.15rem] bg-black">
            {screenshot ? (
              <div className="relative aspect-[1170/2532] w-full">
                <Image
                  src={screenshot}
                  alt={screenshotAlt}
                  fill
                  priority={priority}
                  sizes="(max-width: 1024px) 280px, 300px"
                  className="object-cover object-top"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
