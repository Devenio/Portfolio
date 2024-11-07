import React, { useEffect, useState } from "react";
import { useSection } from "@/lib/providers/SectionProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MjolnirCover from "@/assets/images/mjolnir-cover.png";
import AinurCover from "@/assets/images/ainur-cover.png";
import JetonCover from "@/assets/images/Jeton-cover.png";

const Works: React.FC = () => {
  const { subsectionIndex } = useSection();

  // Track the current displayed content separately from subsectionIndex
  const [currentContentIndex, setCurrentContentIndex] =
    useState(subsectionIndex);

  const worksContent = [
    {
      cover: MjolnirCover,
      title: "Mjolnir",
      subject: "Design and Implementation",
      description:
        "Potter ipsum wand elf parchment wingardium. Trace hedwig seven expecto scales.",
      link: "https://mjolnir.ainurhq.cloud",
    },
    {
      cover: AinurCover,
      title: "Ainur",
      subject: "Prototyping and Design",
      description:
        "Potter ipsum wand elf parchment wingardium. Trace hedwig seven expecto scales.",
      link: "https://link-to-project-2.com",
    },
    {
      cover: JetonCover,
      title: "Jeton",
      subject: "Design and Implementation",
      description:
        "Potter ipsum wand elf parchment wingardium. Trace hedwig seven expecto scales.",
      link: "https://jeton.pages.dev/",
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentContentIndex(subsectionIndex),
      500
    );
    return () => clearTimeout(timeout);
  }, [subsectionIndex]);

  const overlayVariants = {
    initial: { width: "0%" },
    animate: {
      width: ["0%", "100%", "0%"],
      transition: {
        duration: 1,
        times: [0, 0.5, 1],
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center mx-auto">
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <Image
            src={worksContent[currentContentIndex].cover}
            alt={`${worksContent[currentContentIndex].title} cover`}
            className="rounded-3xl border-theme-accent border-[12px] w-[920px] z-10 color-transition"
          />
          <motion.div
            key={`image-overlay-${subsectionIndex}`}
            initial="initial"
            animate="animate"
            variants={overlayVariants}
            className="absolute inset-0 h-full bg-theme-primary z-20 rounded-3xl color-transition"
            style={{ originX: 0 }}
          />
        </div>

        <div className="relative flex flex-col w-96 pb-5 pr-4 pl-9 pt-10 border-theme-accent border-2 color-transition right-28 rounded-3xl z-10">
          <h4 className="work-subject text-lg text-theme-primary mb-3 color-transition">
            {worksContent[currentContentIndex].subject}
          </h4>
          <h3 className="work-title text-2xl font-semibold text-white mb-14 color-transition">
            {worksContent[currentContentIndex].title}
          </h3>
          <p className="work-description text-base text-white mb-24 color-transition">
            {worksContent[currentContentIndex].description}
          </p>
          <Link
            href={worksContent[currentContentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-end bg-theme-primary text-theme-background text-sm font-medium px-6 py-2 rounded-xl color-transition"
          >
            Visit
          </Link>

          <div className="absolute w-full h-full bg-theme-accent rounded-3xl color-transition -z-20 top-5 right-5" />
          <div className="absolute inset-0 h-full bg-theme-background rounded-3xl color-transition -z-10" />

          <motion.div
            key={`info-overlay-${subsectionIndex}`}
            initial="initial"
            animate="animate"
            variants={overlayVariants}
            className="absolute inset-0 h-full bg-theme-primary z-20 rounded-3xl color-transition"
            style={{ originX: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
