import React from 'react';
import CodeBlock from './code-block';
import { MDXProvider } from '@mdx-js/react';

export const MDXComponents: React.ComponentProps<
 typeof MDXProvider
>['components'] = {
 h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="text-4xl font-bold text-theme-primary my-6" {...props} />
 ),
 h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="text-2xl font-bold text-theme-primary mt-14 mb-4" {...props} />
 ),
 h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className="text-xl font-medium text-theme-primary mb-4 mt-6" {...props} />
 ),
 p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className="text-white my-4 leading-relaxed text-pretty" {...props} />
 ),
 ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="list-disc text-white my-4" {...props} />
 ),
 ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
  <ol className="list-decimal text-white my-4" {...props} />
 ),
 li: (props: React.HTMLAttributes<HTMLLIElement>) => (
  <li className="text-white my-2 marker:text-theme-primary" {...props} />
 ),
 blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
  <blockquote
   className="border-l-4 border-theme-primary pl-4 italic text-theme-secondary my-6"
   {...props}
  />
 ),
 strong: (props: React.HTMLAttributes<HTMLElement>) => (
  <strong className="font-semibold text-theme-primary" {...props} />
 ),
 em: (props: React.HTMLAttributes<HTMLElement>) => (
  <em className="italic text-theme-primary" {...props} />
 ),
 a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
   className="text-theme-accent underline hover:text-theme-primary"
   {...props}
  />
 ),
 code: ({
  className,
  children,
 }: {
  className?: string;
  children?: React.ReactNode;
 }) =>
  className ? (
   <CodeBlock language={className.replace('language-', '')}>
    {children}
   </CodeBlock>
  ) : (
   <code className="bg-theme-secondary text-theme-background px-1 py-0.5 rounded">
    {children}
   </code>
  ),
 pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
  <pre
   className="bg-theme-background text-theme-secondary p-0 overflow-x-auto my-4"
   {...props}
  />
 ),
};
