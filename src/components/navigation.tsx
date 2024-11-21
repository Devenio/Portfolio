'use client';

import { useSection } from '@/lib/hooks';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
 ANIMATION_DURATION,
 SECTIONS,
 WORK_SUBSECTIONS,
} from '@/lib/constants';
import { generateUniqueTitleSections } from '@/lib/utils';
import { Sections } from '@/lib/types';
import Socials from './socials';

const sectionNavigationOptions = generateUniqueTitleSections(SECTIONS);

export default function Navigation() {
 const { sectionIndex, subsectionIndex, setSectionIndex, setSubsectionIndex } =
  useSection();

 const [isHidden, setIsHidden] = useState(true);

 useEffect(() => {
  setIsHidden(window.innerWidth < 1024);
 }, []);

 const toggle = () => {
  setIsHidden((prev) => !prev);
 };

 return (
  <nav className="fixed top-5 sm:top-10 right-5 sm:right-10 z-[999] transition-colors items-start flex gap-5">
   <AnimatePresence>
    {!isHidden && (
     <motion.aside
      className="hidden lg:flex flex-col items-start gap-4 relative"
      initial="hidden"
      animate="visible"
      exit="hidden"
     >
      <motion.div
       className="absolute left-[-16px] color-transition w-1 h-1 rounded-full bg-theme-primary"
       variants={indicatorVariants}
       initial="hidden"
       animate="visible"
       custom={sectionNavigationOptions.indexOf(
        sectionNavigationOptions.findLast(
         (option) => option.index <= sectionIndex
        ) as (typeof sectionNavigationOptions)[number]
       )}
       exit="exit"
      />

      {sectionNavigationOptions.map((section, i) => (
       <motion.div
        key={section.title}
        className="relative w-28 group hoverable"
       >
        <motion.button
         custom={i}
         variants={buttonVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
         type="button"
         onClick={() => setSectionIndex(section.index)}
        >
         <span className="group-hover:tracking-widest  transition-all delay-0 text-theme-primary px-2 py-1">
          {section.title}
         </span>
        </motion.button>

        <AnimatePresence>
         {section.title === 'Works' && sectionIndex === Sections.Works && (
          <div className="flex ml-2 mt-1 space-x-1 absolute">
           {[...Array(WORK_SUBSECTIONS)].map((_, subIndex) => (
            <motion.button
             onClick={() => setSubsectionIndex(subIndex)}
             key={subIndex}
             initial={{ width: '4px', opacity: 0.5 }}
             animate={{
              width: subsectionIndex === subIndex ? '28px' : '16px',
              opacity: subsectionIndex === subIndex ? 1 : 0.5,
             }}
             exit={{ width: '4px', opacity: 0.5 }}
             transition={{
              duration: ANIMATION_DURATION.MEDIUM,
              ease: 'easeInOut',
             }}
             className="h-1 rounded-full bg-theme-primary"
            />
           ))}
          </div>
         )}
        </AnimatePresence>
       </motion.div>
      ))}
     </motion.aside>
    )}
   </AnimatePresence>

   <AnimatePresence>
    {!isHidden && (
     <motion.div
      className="lg:hidden fixed top-0 rounded-b-3xl gap-2 left-0 right-0 bg-theme-background flex flex-col items-center justify-center z-20 p-4 shadow-lg"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: ANIMATION_DURATION.MEDIUM }}
     >
      {sectionNavigationOptions.map((section, i) => (
       <motion.div key={section.title} className="relative">
        <motion.button
         onClick={() => {
          setSectionIndex(section.index);
          setIsHidden(true);
         }}
         custom={i}
         variants={buttonVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
         type="button"
         className="text-theme-primary text-lg my-2"
        >
         {section.title}
        </motion.button>

        <AnimatePresence>
         {section.title === 'Works' && sectionIndex === Sections.Works && (
          <div className="flex mt-1 space-x-1 absolute">
           {[...Array(WORK_SUBSECTIONS)].map((_, subIndex) => (
            <motion.button
             onClick={() => setSubsectionIndex(subIndex)}
             key={subIndex}
             initial={{ width: '4px', opacity: 0.5 }}
             animate={{
              width: subsectionIndex === subIndex ? '24px' : '16px',
              opacity: subsectionIndex === subIndex ? 1 : 0.5,
             }}
             exit={{ width: '4px', opacity: 0.5 }}
             transition={{
              duration: ANIMATION_DURATION.MEDIUM,
              ease: 'easeInOut',
             }}
             className="h-1 rounded-full bg-theme-primary"
            />
           ))}
          </div>
         )}
        </AnimatePresence>
       </motion.div>
      ))}

      <Socials className="py-2 mt-4" />
     </motion.div>
    )}
   </AnimatePresence>

   <div
    onClick={toggle}
    className="flex flex-col z-30 justify-around w-10 h-8 cursor-pointer group"
   >
    {[0, 1, 2].map((i) => (
     <motion.div
      key={i}
      className="h-1 rounded-full group-hover:animate-grow bg-theme-primary"
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      custom={i}
      style={{ animationDelay: `${i * 150}ms` }}
     />
    ))}
   </div>
  </nav>
 );
}

const buttonVariants = {
 hidden: { opacity: 0, x: 20 },
 visible: (i: number) => ({
  opacity: 1,
  x: 0,
  transition: {
   delay: i * 0.2,
   duration: ANIMATION_DURATION.MEDIUM,
  },
 }),
 exit: {
  opacity: 0,
  x: 20,
  transition: { duration: ANIMATION_DURATION.MEDIUM },
 },
};

const indicatorVariants = {
 hidden: { opacity: 0, y: -10 },
 visible: (i: number) => ({
  opacity: 1,
  x: 0,
  y: i * 40 + 12,
  transition: {
   type: 'spring',
   stiffness: 300,
   damping: 30,
   duration: 0.6,
  },
 }),
 exit: {
  opacity: 0,
  y: -10,
  transition: { duration: ANIMATION_DURATION.MEDIUM },
 },
};
