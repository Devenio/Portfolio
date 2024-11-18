'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Figure from '@/assets/images/figure-2.webp';

export default function NeonFigure() {
 return (
  <div className="relative flex items-center justify-center w-[291px] h-[388px] overflow-hidden">
   <Image
    src={Figure}
    alt="Julius Caesar Figure"
    className="relative z-20 object-cover w-full h-full"
    priority
   />

   <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    fill="none"
    className="absolute z-10 top-0 left-0"
    initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
    animate={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.5, ease: 'easeInOut' }}
   >
    <path d="M 60, 60 L 210, 70" className="neon-path" />
   </motion.svg>

   <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    fill="none"
    className="absolute z-20 top-0 left-0"
    initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
    animate={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
   >
    <path d="M 60, 60 L 130, 220" className="neon-path" />
   </motion.svg>

   <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    fill="none"
    className="absolute z-20 top-0 left-0"
    initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
    animate={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
   >
    <path d="M 130, 220 L 210, 70" className="neon-path" />
   </motion.svg>

   <motion.div
    className="absolute top-4 left-[37%] transform -translate-x-1/2 z-30 mix-blend-difference bg-cyan-400 rounded-full"
    style={{ width: '60px', height: '60px' }}
    initial={{ scale: 0.8, opacity: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
   />
  </div>
 );
}
