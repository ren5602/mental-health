import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MentalZee — Find Calm, Build Balance, Live Better",
  description:
    "A peaceful space to care for your mind through personalized guidance, mindfulness, and professional support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", lora.variable, jakarta.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full bg-darker text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
