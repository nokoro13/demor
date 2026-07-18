import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demor — Healthcare made simple",
  description:
    "Demor helps patients and providers connect seamlessly. Manage appointments, records, and communication in one place.",
  openGraph: {
    title: "Demor — Healthcare made simple",
    description:
      "Demor helps patients and providers connect seamlessly.",
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
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
