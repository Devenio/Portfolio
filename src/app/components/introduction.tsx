import IntroFigure from "@/app/assets/images/intro-figure.png";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center h-full absolute left-[50%] -translate-x-[50%] top-[60%] translate-y-[-50%]">
      <div className="relative">
        <p className="text-[260px] font-light h-40 text-theme-1">MAHZIYAR</p>
        <Image
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={IntroFigure}
          alt="figure"
        />
      </div>

      <p className="text-theme-2 text-2xl mt-56">Frontend Developer</p>
      <p className="text-4xl text-white mt-2">
        Let’s create cool stuff together
      </p>
      <button className="bg-white text-lg text-theme-4 hover:bg-theme-5 hover:text-theme-1 transition-colors px-24 py-3 mt-5">
        Contact me
      </button>
    </div>
  );
}
