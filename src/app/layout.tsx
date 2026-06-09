import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vani — On-device voice dictation for macOS",
  description:
    "Hold Fn. Speak. Done. Vani is a privacy-first macOS dictation app powered by Apple's on-device AI. Zero servers. Zero API costs.",
  openGraph: {
    title: "Vani — On-device voice dictation for macOS",
    description: "Hold Fn. Speak. Done. 100% on-device, zero servers.",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vani — On-device voice dictation for macOS",
    description: "Hold Fn. Speak. Done. 100% on-device, zero servers.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
