'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Curves() {
 const path1Ref = useRef<SVGPathElement>(null);
 const path2Ref = useRef<SVGPathElement>(null);

 useEffect(() => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(path1Ref.current, {
   strokeDashoffset: 0,
   duration: 2,
   ease: 'power2.out',
  });

  tl.to(path2Ref.current, {
   strokeDashoffset: 0,
   duration: 2,
   ease: 'power2.out',
  });
 }, []);

 return (
  <svg
   className="fixed left-0 bottom-0 stroke-theme-primary opacity-15 z-0"
   viewBox="0 0 1202 1080"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    ref={path1Ref}
    d="M1621.88 -47.1813C1451.86 -40.9397 1088.86 85.9397 996.98 543.524C905.102 1001.11 422.711 1152.88 193 1171.56"
    strokeWidth="2"
    strokeLinecap="round"
    style={{
     strokeDasharray: 3000,
     strokeDashoffset: 3000,
    }}
   />

   <path
    ref={path2Ref}
    d="M1710.67 356.612C1545.47 315.917 1161.58 338.213 947.557 752.964C733.532 1167.71 228.009 1181.15 2.00008 1136.03"
    strokeWidth="2"
    strokeLinecap="round"
    style={{
     strokeDasharray: 3000,
     strokeDashoffset: 3000,
    }}
   />
  </svg>
 );
}
