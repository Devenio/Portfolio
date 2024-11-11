import { SectionProvider } from "@/components/section-provider";
import Section from "@/components/section";
import Frame from "@/components/frame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahziyar Erfani - Portfolio",
  description:
    "Discover the work and achievements of Mahziyar Erfani in web development and design.",
  openGraph: {
    title: "Mahziyar Erfani - Portfolio",
    description:
      "Explore Mahziyar Erfani's work in web development and design.",
    images: [
      {
        url: "https://mhzrerfani.dev/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Mahziyar Erfani Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahziyar Erfani - Portfolio",
    description:
      "Explore Mahziyar Erfani's work in web development and design.",
    images: ["https://mhzrerfani.dev/thumbnail.png"],
  },
};

export default function Page() {
  return (
    <SectionProvider>
      <Frame />
      <Section />
    </SectionProvider>
  );
}
