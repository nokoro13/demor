const features = [
  {
    title: "Patient portal",
    description:
      "Give patients a secure place to view records, message their provider, and manage appointments.",
  },
  {
    title: "Practice dashboard",
    description:
      "Streamline scheduling, intake, and follow-ups so your team spends less time on admin.",
  },
  {
    title: "White-labeled experience",
    description:
      "Your brand front and center — patients see Demor, not a third-party platform.",
  },
];

export function Features() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
