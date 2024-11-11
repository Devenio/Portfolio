"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/constants";

export default function Experiences() {
  return (
    <div className="flex flex-col-reverse gap-5 lg:flex-row items-center lg:gap-24 relative lg:right-40 mr-5">
      <span className="text-lg lg:text-2xl text-white">
        Over <b>4</b> Years
      </span>
      <div className="relative flex flex-col items-start  pl-5">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative w-full"
          >
            {index === 0 && (
              <div className="font-semibold text-xl text-theme-primary">
                Current
              </div>
            )}
            <div className="pl-24 flex items-center lg:w-[600px] justify-between w-full lg:pl-32 gap-5 py-7">
              <h3 className="text-2xl lg:text-4xl font-bold text-white">
                {experience.title}
              </h3>
              <p className="text-sm lg:text-lg font-medium text-theme-primary text-right">
                {experience.role}
              </p>
            </div>

            <div
              className={`absolute left-8 ${
                index === 0 ? "top-10" : "top-5"
              } bottom-10 border-l-2 border-dashed border-theme-primary`}
            />
            <div className="font-semibold text-base lg:text-xl text-theme-primary">
              {experience.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
