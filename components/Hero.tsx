import { ArrowRight, Sparkles } from "lucide-react";
import { portalUrl } from "@/lib/config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 px-6 pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-brand-light blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div className="max-w-xl lg:max-w-none">
          <Badge variant="secondary" className="mb-6 px-3 py-1 text-xs font-medium">
            <Sparkles className="size-3.5" />
            Built for your medspa
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.08] lg:text-[3.35rem]">
            Elevate every client touchpoint{" "}
            <span className="text-primary">from booking to follow-up</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Demor gives your medspa a premium, branded client experience — online
            booking, secure messaging, and treatment journeys that keep clients
            coming back.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-11 px-8 text-base shadow-lg shadow-primary/20"
              render={<a href={portalUrl} />}
              nativeButton={false}
            >
              Get Started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-8 text-base"
              render={<a href={portalUrl} />}
              nativeButton={false}
            >
              Sign In
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "White-labeled for your brand",
              "Built for treatment-based care",
              "Secure client communication",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/70 bg-background/90 px-4 py-3 text-xs leading-snug text-muted-foreground backdrop-blur-sm sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <PhoneMockup
              screenshot="/demorMockUp.PNG"
              screenshotAlt="Demor medspa mobile app"
              size="lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
