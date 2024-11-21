'use client';
import { useCallback, useEffect, useState } from 'react';
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
 const [isClicked, setIsClicked] = useState(false);

 const handleMouseMove = useCallback(
  (e: MouseEvent) => {
   bigBallX.set(e.pageX - 15);
   bigBallY.set(e.pageY - 15);
   smallBallX.set(e.pageX - 5);
   smallBallY.set(e.pageY - 5);
  },
  [bigBallX, bigBallY, smallBallX, smallBallY]
 );

 const handleMouseDown = useCallback(() => {
  setIsClicked(true);
  setTimeout(() => setIsClicked(false), 500);
 }, []);

 const handleMouseEnter = useCallback(() => scale.set(2), [scale]);
 const handleMouseLeave = useCallback(() => scale.set(1), [scale]);

 useEffect(() => {
  if (isMobile) return;

  const hoverableElements = Array.from(document.querySelectorAll('button, a'));
  hoverableElements.forEach((el) => el.classList.add('hoverable'));

  document.querySelectorAll('.hoverable').forEach((el) => {
   el.addEventListener('mouseenter', handleMouseEnter);
   el.addEventListener('mouseleave', handleMouseLeave);
  });

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mousedown', handleMouseDown);

  const observer = new MutationObserver(() => {
   document.querySelectorAll('.hoverable').forEach((el) => {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
   });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
   document.removeEventListener('mousemove', handleMouseMove);
   document.removeEventListener('mousedown', handleMouseDown);
   observer.disconnect();
   document.querySelectorAll('.hoverable').forEach((el) => {
    el.removeEventListener('mouseenter', handleMouseEnter);
    el.removeEventListener('mouseleave', handleMouseLeave);
   });
  };
 }, [
  handleMouseEnter,
  handleMouseLeave,
  handleMouseMove,
  handleMouseDown,
  isMobile,
 ]);

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
   {/* Big Circle */}
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
    {isClicked && (
     <motion.div
      className="absolute top-0 left-0"
      initial={{ scale: 1, opacity: 0.5 }}
      animate={{ scale: 4, opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
       width: '30px',
       height: '30px',
       borderRadius: '50%',
       backgroundColor: 'var(--theme-primary)',
      }}
     />
    )}
   </motion.div>

   {/* Small Circle */}
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
