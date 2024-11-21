'use client';

import { useSection } from '@/lib/hooks';
import Navigation from './navigation';
import Curves from './curves';
import { motion } from 'framer-motion';
import Socials from './socials';
import { ANIMATION_DURATION } from '@/lib/constants';
import SectionTitle from './section-title';
import { BubbleText } from './ui/bubble-text';

export default function Frame() {
 const { sectionIndex } = useSection();

 return (
  <div className="w-full h-dvh absolute">
   <motion.h1
    initial={{ y: -20, opacity: 0 }}
    animate={{
     y: 0,
     opacity: 1,
    }}
    transition={{ duration: ANIMATION_DURATION.MEDIUM, ease: 'easeInOut' }}
    className={`fixed top-5 sm:top-10 left-5 sm:left-10 z-20  `}
   >
    <BubbleText className="text-2xl sm:text-4xl" text="Mahziyar Erfani" />
   </motion.h1>

   <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{
     y: 0,
     opacity: 1,
    }}
    transition={{ duration: ANIMATION_DURATION.MEDIUM, ease: 'easeInOut' }}
    className="2xl:mt-5 fixed bottom-5 sm:bottom-10 left-5 sm:left-10 text-theme-secondary text-lg font-semibold  "
   >
    Frontend Developer
   </motion.p>

   <motion.div
    initial={{ scaleY: 0.5, opacity: 0 }}
    animate={{
     scaleY: 1 - (sectionIndex + 1) / 10,
     opacity: 1,
    }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className={`fixed top-[calc(50dvh-(176px/2))] z-20 hidden md:block left-5 sm:left-10 h-44 w-1 rounded-lg bg-theme-primary`}
   />

   <Socials className="hidden lg:flex right-5 sm:bottom-10 sm:right-10 fixed bottom-5 " />
   <Curves />
   <Navigation />
   <SectionTitle />
  </div>
 );
}
