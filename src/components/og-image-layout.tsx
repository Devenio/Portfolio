import React from 'react';

const themeColors = {
 background: '#f8f9fa', // Light gray
 primary: '#1a73e8', // Blue
 secondary: '#6c757d', // Gray
 accent: '#ff5722', // Orange
 foreground: '#333333', // Dark gray
};

type OgImageLayoutProps = {
 title: string;
 description: string;
};

export function OgImageLayout({ title, description }: OgImageLayoutProps) {
 return (
  <div
   style={{
    display: 'flex',
    width: '1200px',
    height: '630px',
    backgroundColor: themeColors.background,
    color: themeColors.foreground,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center',
    padding: '2rem', // Tailwind 'p-8'
   }}
  >
   {/* Title */}
   <h1
    style={{
     fontSize: '4rem', // Tailwind 'text-4xl'
     fontWeight: 'bold', // Tailwind 'font-bold'
     color: themeColors.primary,
     marginBottom: '1rem', // Tailwind 'mb-4'
    }}
   >
    {title}
   </h1>

   {/* Description */}
   <p
    style={{
     fontSize: '2rem', // Tailwind 'text-2xl'
     color: themeColors.secondary,
    }}
   >
    {description}
   </p>

   {/* Accent Line */}
   <div
    style={{
     marginTop: '2rem', // Tailwind 'mt-8'
     width: '50%', // Tailwind 'w-1/2'
     height: '0.5rem', // Tailwind 'h-2'
     backgroundColor: themeColors.accent,
    }}
   />
  </div>
 );
}
