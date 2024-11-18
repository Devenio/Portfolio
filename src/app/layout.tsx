import { Roboto } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const roboto = Roboto({
 weight: ['300', '400', '500', '700'],
 subsets: ['latin'],
 variable: '--font-roboto',
});

export default function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
  <html lang="en" className="h-full">
   {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
   <body className={`${roboto.variable} h-full`}>{children}</body>
  </html>
 );
}
