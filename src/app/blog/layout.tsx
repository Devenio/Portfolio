export default function BlogLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
  <main className="pb-5 px-5 bg-theme-background min-h-screen">
   <div className="max-w-2xl w-full flex flex-col mx-auto relative">
    {children}
   </div>
  </main>
 );
}
