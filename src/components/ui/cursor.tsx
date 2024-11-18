'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
 const [isMobile, setIsMobile] = useState(false);

 const bigBallX = useMotionValue(0);
 const bigBallY = useMotionValue(0);
 const smallBallX = useMotionValue(0);
 const smallBallY = useMotionValue(0);

 const delayedBigBallX = useSpring(bigBallX, { stiffness: 150, damping: 20 });
 const delayedBigBallY = useSpring(bigBallY, { stiffness: 150, damping: 20 });

 const scale = useSpring(1, { stiffness: 150, damping: 10 });

 useEffect(() => {
  document.body.style.cursor = 'none';

  addHoverableClass();

  const handleMouseMove = (e: MouseEvent) => {
   bigBallX.set(e.pageX - 15);
   bigBallY.set(e.pageY - 15);
   smallBallX.set(e.pageX - 5);
   smallBallY.set(e.pageY - 5);
  };

  const handleMouseEnter = () => scale.set(2);
  const handleMouseLeave = () => scale.set(1);

  document.addEventListener('mousemove', handleMouseMove);
  document.querySelectorAll('.hoverable').forEach((el) => {
   el.addEventListener('mouseenter', handleMouseEnter);
   el.addEventListener('mouseleave', handleMouseLeave);
  });

  return () => {
   document.removeEventListener('mousemove', handleMouseMove);
   document.querySelectorAll('.hoverable').forEach((el) => {
    el.removeEventListener('mouseenter', handleMouseEnter);
    el.removeEventListener('mouseleave', handleMouseLeave);
   });
   document.body.style.cursor = 'default';
  };
 }, [bigBallX, bigBallY, scale, smallBallX, smallBallY]);

 useEffect(() => {
  const isTouchDevice =
   'ontouchstart' in window || navigator.maxTouchPoints > 0;
  setIsMobile(isTouchDevice);
 }, []);

 if (isMobile) {
  return null;
 }
 return (
  <div className="pointer-events-none">
   <motion.div
    className="fixed top-0 left-0 mix-blend-difference z-[1000]"
    style={{
     x: delayedBigBallX,
     y: delayedBigBallY,
     scale,
     width: '30px',
     height: '30px',
    }}
   >
    <svg height="30" width="30">
     <circle cx="15" cy="15" r="12" fill="#f7f8fa" />
    </svg>
   </motion.div>

   <motion.div
    className="fixed top-0 left-0 mix-blend-difference z-[1000]"
    style={{
     x: smallBallX,
     y: smallBallY,
     width: '10px',
     height: '10px',
    }}
   >
    <svg height="10" width="10">
     <circle cx="5" cy="5" r="4" fill="#f7f8fa" />
    </svg>
   </motion.div>
  </div>
 );
}

const addHoverableClass = () => {
 document.querySelectorAll('button, a').forEach((el) => {
  el.classList.add('hoverable');
 });
};
