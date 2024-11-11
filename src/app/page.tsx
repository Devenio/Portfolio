import { SectionProvider } from "@/components/section-provider";
import Section from "@/components/section";
import Frame from "@/components/frame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahziyar Erfani - Portfolio",
  description:
    "Explore Mahziyar Erfani's portfolio, showcasing innovative projects such as Mjolnir, Ainur, and Jeton. Dive into each project’s design, technical creativity, and commitment to quality.",
  openGraph: {
    title: "Mahziyar Erfani - Portfolio",
    description:
      "Explore My portfolio, showcasing innovative projects like Mjolnir, Ainur, and Jeton. See the creativity and expertise behind each project.",
    url: "https://mhzrerfani.dev",
    siteName: "Mahziyar Erfani Portfolio",
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
      "Explore My portfolio, showcasing innovative projects like Mjolnir, Ainur, and Jeton. See the creativity and expertise behind each project.",
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
