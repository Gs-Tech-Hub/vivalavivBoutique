import "./css/style.css";

import {
  Cormorant_Garamond,
  Great_Vibes,
  Montserrat,
} from "next/font/google";

import Header from "@/components/ui/header";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata = {
  title: {
    default: "VivaLaViv Boutique",
    template: "%s | VivaLaViv Boutique",
  },
  description:
    "Curated fashion boutique with timeless elegance. Browse collections, find locations, and discover your next favorite piece.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} bg-marble font-body text-base text-brand-text antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
