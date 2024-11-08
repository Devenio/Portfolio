"use client";

import React, { useEffect, useState } from "react";
import { useSection } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ANIMATION_DURATION, WORKS_ITEMS } from "@/lib/constants";

export default function Works() {
  const { subsectionIndex } = useSection();
  const [currentWorkItem, setCurrentWorkItem] = useState(subsectionIndex);

  const { cover, title, subject, description, link } =
    WORKS_ITEMS[currentWorkItem];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentWorkItem(subsectionIndex);
    }, ANIMATION_DURATION.MEDIUM * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [subsectionIndex, currentWorkItem]);

  const overlayVariants = (delay: number) => ({
    initial: { width: "0%", originX: 0 },
    animate: {
      width: ["0%", "100%", "0%"],
      transition: {
        duration: ANIMATION_DURATION.MEDIUM * 2,
        times: [0, 0.5, 1],
        ease: "easeInOut",
        delay,
      },
    },
  });

  const overlayColors = [
    "bg-theme-primary",
    "bg-theme-background",
    "bg-theme-primary",
  ];

  return (
    <div className="relative flex items-center justify-center mx-auto px-5">
      <div className="relative flex flex-col lg:flex-row items-center justify-center">
        <div className="relative border-theme-accent border-[12px] overflow-hidden rounded-3xl">
          <Image
            priority
            loading="eager"
            src={cover}
            alt={`${title} cover`}
            className="2xl:w-[920px] xl:w-[720px] lg:w-[540px]"
          />

          {overlayColors.map((color, index) => (
            <motion.div
              key={`image-overlay-${subsectionIndex}-${index}`}
              initial="initial"
              animate="animate"
              custom={index * 0.2}
              variants={overlayVariants(index * 0.2)}
              className={`absolute inset-0 h-full ${color} z-[${20 - index}]  `}
              style={{ originX: 0 }}
            />
          ))}
        </div>

        <div className="relative flex flex-col lg:w-96 pt-5 pb-5 pr-4 lg:pl-9 lg:pt-10 border-theme-accent lg:border-2 lg:right-28 rounded-3xl z-10">
          <h4 className="work-subject text-sm lg:text-lg text-theme-primary mb-3  ">
            {subject}
          </h4>
          <h3 className="work-title text-2xl font-semibold text-white mb-3 lg:mb-14  ">
            {title}
          </h3>
          <p className="work-description text-base text-white mb-5 lg:mb-24  ">
            {description}
          </p>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:self-end self-start text-center bg-theme-primary text-theme-background text-sm font-medium px-6 py-2 rounded-xl  "
          >
            Visit
          </Link>

          <div className="absolute inset-0 h-full rounded-3xl bg-theme-background -z-10" />
          <div className="absolute inset-0 h-full rounded-3xl mt-1 lg:overflow-hidden">
            {overlayColors.map((color, index) => (
              <motion.div
                key={`info-overlay-${subsectionIndex}-${index}`}
                initial="initial"
                animate="animate"
                custom={index * 0.1}
                variants={overlayVariants(index * 0.1)}
                className={`absolute lg:rounded-3xl inset-0 h-full ${color} z-[${
                  20 - index
                }]  `}
                style={{ originX: 0 }}
              />
            ))}
          </div>

          <div className="absolute w-full h-full rounded-3xl bg-theme-accent hidden lg:block right-5 top-5 -z-20" />
        </div>
      </div>
    </div>
  );
}
