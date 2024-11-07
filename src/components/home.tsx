import IntroFigure from "@/assets/images/intro-figure.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full -z-20">
      <div className="relative flex items-center justify-center mt-20">
        <p className="text-[calc(100vw/6)] font-light text-theme-primary -z-10 absolute color-transition">
          MAHZIYAR
        </p>
        <Image
          className="w-52 md:w-72 lg:w-80"
          src={IntroFigure}
          alt="figure"
        />
      </div>

      <p className="text-4xl text-white mt-2 text-center">
        Let’s create cool stuff together
      </p>
      <button className="text-theme-background text-lg rounded-2xl bg-white text-theme-4 hover:bg-theme-accent font-semibold hover:text-white transition-colors px-24 py-3 mt-5">
        Contact me
      </button>
    </div>
  );
}
