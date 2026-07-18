import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demor — Client experience platform for medspas",
  description:
    "Demor helps medspa owners deliver a premium, branded client experience with online booking, secure messaging, and retention tools.",
  appleWebApp: {
    title: "Demor",
  },
  openGraph: {
    title: "Demor — Client experience platform for medspas",
    description:
      "Premium booking, client portals, and communication built for modern medspas.",
    url: "https://demor.app",
    siteName: "Demor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
