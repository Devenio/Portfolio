import { SectionProvider } from '@/components/section-provider';
import Section from '@/components/section';
import Frame from '@/components/frame';
import { Metadata } from 'next';
import { FuzzyOverlay } from '@/components/ui/fuzzy-overlay';
import Cursor from '@/components/ui/cursor';

const domain =
 process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || 'http://localhost:3000';

export const metadata: Metadata = {
 title: 'Mahziyar Erfani - Portfolio',
 description:
  'Discover the work and achievements of Mahziyar Erfani in web development and design.',
 openGraph: {
  title: 'Mahziyar Erfani - Portfolio',
  description: "Explore Mahziyar Erfani's work in web development and design.",
  images: [
   {
    url: `${domain}/thumbnail.png`,
    width: 1200,
    height: 630,
    alt: 'Mahziyar Erfani Portfolio Thumbnail',
   },
  ],
  locale: 'en_US',
  type: 'website',
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Mahziyar Erfani - Portfolio',
  description: "Explore Mahziyar Erfani's work in web development and design.",
  images: [`${domain}/thumbnail.png`],
 },
};

export default function Page() {
 return (
  <main
   className="h-full touch-none w-full relative overflow-hidden overscroll-none"
   style={{
    WebkitOverflowScrolling: 'auto',
   }}
  >
   <SectionProvider>
    <Frame />
    <Section />
    <FuzzyOverlay />
    <Cursor />
   </SectionProvider>
  </main>
 );
}
