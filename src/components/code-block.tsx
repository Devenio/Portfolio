'use client';

import { useState, useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

type CodeBlockProps = {
 children: React.ReactNode;
 language?: string;
};

export default function CodeBlock({
 children,
 language = 'typescript',
}: CodeBlockProps) {
 const [copied, setCopied] = useState(false);

 useEffect(() => {
  Prism.highlightAll();
 }, []);

 const handleCopy = () => {
  navigator.clipboard.writeText((children as string).trim());
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
 };

 return (
  <div className="relative group bg-theme-background pt-6 rounded-lg text-theme-foreground">
   {language && (
    <span className="absolute top-2 left-2 text-xs font-semibold uppercase text-theme-secondary">
     {language}
    </span>
   )}

   <button
    onClick={handleCopy}
    className="absolute top-10 delay-0 right-2 text-sm text-theme-primary border border-theme-primary px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
   >
    {copied ? 'Copied!' : 'Copy'}
   </button>

   <pre className="overflow-auto rounded-lg">
    <code className={`language-${language}`}>
     {(children as string).trim()}
    </code>
   </pre>
  </div>
 );
}
