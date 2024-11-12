import { FuzzyOverlay } from "@/components/ui/fuzzy-overlay";
import "./globals.css";
import { Roboto } from "next/font/google";
import Cursor from "@/components/ui/cursor";
import { GoogleTagManager } from "@next/third-parties/google";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className={`${roboto.variable} h-dvh`}>
        <div className="h-full relative overflow-hidden overscroll-none">
          {children}
          <FuzzyOverlay />
          <Cursor />
        </div>
      </body>
    </html>
  );
}
