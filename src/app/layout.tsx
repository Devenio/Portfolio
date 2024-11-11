import { FuzzyOverlay } from "@/components/ui/fuzzy-overlay";
import "./globals.css";
import { Roboto } from "next/font/google";
import Cursor from "@/components/ui/cursor";

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
      <body className={`${roboto.variable} h-dvh`}>
        <div className="h-full relative overflow-hidden">
          {children}
          <FuzzyOverlay />
          <Cursor />
        </div>
      </body>
    </html>
  );
}
