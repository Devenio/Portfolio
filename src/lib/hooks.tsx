'use client';

import { SectionContext } from '@/components/section-provider';
import { useContext } from 'react';

export const useSection = () => {
 const context = useContext(SectionContext);
 if (!context) {
  throw new Error('useSection must be used within a SectionProvider');
 }
 return context;
};
