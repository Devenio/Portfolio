import { cn } from '@/lib/utils';

export const BubbleText = ({
 text,
 className,
}: {
 text: string;
 className?: string;
}) => {
 return (
  <div className={cn('text-center font-thin   text-white', className)}>
   {text.split('').map((child, idx) => (
    <span className={'hoverText '} key={idx}>
     {child}
    </span>
   ))}
  </div>
 );
};
