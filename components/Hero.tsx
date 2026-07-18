import { portalUrl } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-teal-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-600">
          Patient care, simplified
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
          Healthcare made simple for your practice
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Demor helps patients and providers connect seamlessly — manage
          appointments, records, and communication in one place.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={portalUrl}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-teal-600 px-8 text-base font-semibold text-white shadow-lg shadow-teal-600/20 transition-colors hover:bg-teal-700"
          >
            Get Started
          </a>
          <a
            href={portalUrl}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            Sign In
          </a>
        </div>
      </div>
    </section>
  );
}
