export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {year} Demor. All rights reserved.
        </p>
        <p className="text-sm text-slate-400">
          Secure patient care platform
        </p>
      </div>
    </footer>
  );
}
