interface MenuButtonProps {
  onClick: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-around w-10 h-8 cursor-pointer group"
    >
      <div className="h-1 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-12 animate-grow delay-[0ms]" />
      <div className="h-1 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-12 animate-grow delay-[150ms]" />
      <div className="h-1 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-12 animate-grow delay-[300ms]" />
    </div>
  );
}
