'use client';

import IntroFigure from '@/assets/images/intro-figure.webp';
import { useSection } from '@/lib/hooks';
import { Sections } from '@/lib/types';
import Image from 'next/image';
import { useEffect } from 'react';
import { BubbleText } from './ui/bubble-text';

const glitchConfig = {
 playMode: 'always',
 createContainers: true,
 hideOverflow: false,
 timing: {
  duration: 3950,
 },
 glitchTimeSpan: {
  start: 0.5,
  end: 0.7,
 },
 shake: {
  velocity: 15,
  amplitudeX: 0.2,
  amplitudeY: 0.2,
 },
 slice: {
  count: 6,
  velocity: 15,
  minHeight: 0.02,
  maxHeight: 0.15,
  hueRotate: true,
 },
 pulse: false,
};

export default function Home() {
 const { setSectionIndex } = useSection();

 useEffect(() => {
  const loadGlitch = async () => {
   const { PowerGlitch } = await import('powerglitch');
   PowerGlitch.glitch('#cover', glitchConfig);
  };

  loadGlitch();
 }, []);

 return (
  <div className="flex flex-col items-center justify-center h-full w-full -z-20">
   <div className="relative flex items-center justify-center sm:mt-20">
    <BubbleText
     className="text-[calc(100vw/6)] font-light text-theme-primary -z-10 absolute"
     text="PERNOVA"
    />

    <Image
     id="cover"
     className="w-52 md:w-72 lg:w-80"
     src={IntroFigure}
     alt="figure"
     priority
     loading="eager"
    />
   </div>

   <p className="text-2xl mt-10 sm:text-4xl text-white sm:mt-2 text-center">
    Think big. Big moves are coming...
   </p>
   <button
    onClick={() => {
     setSectionIndex(Sections.Contact);
    }}
    className="text-theme-background text-xl rounded-2xl bg-white text-theme-4 hover:bg-theme-accent font-semibold hover:text-white px-24 py-5 mt-10 delay-0 hover:px-28 hoverable active:brightness-80 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-white"
   >
    Open Community
   </button>
  </div>
 );
}
