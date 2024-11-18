'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/constants';

export default function Experiences() {
 return (
  <div className="flex flex-col-reverse gap-5 lg:flex-row items-center lg:gap-24 relative lg:right-40 mr-5">
   <div className="relative flex flex-col items-center">
    <span className="text-lg lg:text-2xl text-white mb-2">
     Over <b>4</b> Years
    </span>

    {/* Animated SVG underline */}
    <motion.svg
     width="247"
     height="13"
     viewBox="0 0 247 13"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
     animate={{ strokeDashoffset: 0 }}
     transition={{ duration: 2, ease: 'easeInOut', delay: 1.5 }}
     className="mt-2"
    >
     <path
      d="M27.884 12.7243C27.1861 12.7243 26.5898 12.1892 26.5356 11.4779C26.4746 10.7328 27.0303 10.0758 27.7757 10.0148C69.6923 6.57372 112.083 4.73802 154.528 4.52803C135.027 4.10806 115.614 3.94549 96.4509 3.77614C65.254 3.51197 32.9932 3.23425 1.75562 6.38405C1.00348 6.45856 0.346158 5.91665 0.271622 5.17154C0.197085 4.42642 0.739196 3.76259 1.48456 3.68808C32.8712 0.517959 65.2066 0.795687 96.478 1.06664C145.442 1.48661 196.072 1.92013 245.632 6.56016C246.364 6.6279 246.913 7.27141 246.859 8.00298C246.805 8.73455 246.168 9.28999 245.443 9.25612C172.946 5.65248 99.7847 6.81757 27.9992 12.7107C27.9586 12.7107 27.9247 12.7107 27.884 12.7107V12.7243Z"
      stroke="var(--theme-primary)"
      strokeWidth="2"
     />
    </motion.svg>
   </div>

   <div className="relative flex flex-col items-start pl-5">
    {experiences.map((experience, index) => (
     <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.4 }}
      className="relative w-full"
     >
      {index === 0 && (
       <div className="font-semibold text-xl text-theme-primary">Current</div>
      )}
      <div className="pl-24 flex items-center lg:w-[600px] justify-between w-full lg:pl-32 gap-5 py-7">
       <h3 className="text-2xl lg:text-4xl font-bold text-white">
        {experience.title}
       </h3>
       <p className="text-sm lg:text-lg font-medium text-theme-primary text-right">
        {experience.role}
       </p>
      </div>

      <motion.div
       className="absolute left-8 w-[2px] border-l-2 border-dashed border-theme-primary"
       initial={{ height: 0 }}
       animate={{
        height: '4.5rem',
       }}
       transition={{
        duration: 0.8,
        delay: index * 0.4,
        ease: 'easeInOut',
       }}
       style={{
        top: index === 0 ? '2.5rem' : '1rem',
        bottom: '1rem',
       }}
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
