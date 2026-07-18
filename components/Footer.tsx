import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/60 bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-foreground">Demor</p>
            <p className="mt-1 text-sm text-muted-foreground">
              The client experience platform for modern medspas.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Secure · Branded · Built for growth
          </p>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          &copy; {year} Demor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
