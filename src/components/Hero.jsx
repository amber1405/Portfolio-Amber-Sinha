import { Bio } from "../utils/constants";
import HeroBgAnimation from "./HeroBgAnimation";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="mx-10 flex justify-center relative z-10 p-24 ">
      <div className="absolute flex justify-end overflow-hidden px-0 py-8 max-w-m transform translate-x-2/3 -translate-y-16 lg:justify-center lg:p-0">
        <HeroBgAnimation />
      </div>
      <div className="flex items-center w-full text-slate-100">
        <div className="-my-64">
          <div className="font-bold text-6xl ">
            Hi, I am <br /> {Bio.name}
          </div>
          <div className="font-semibold text-4xl flex gap-3 sm:mb-4">
            I am a
            <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="w-2/3 text-xl font-semibold mb-10 leading-10 text-[#838894] lg">
            {Bio.description}
          </div>
          <button className="h-14 w-60 max-w-80 text-center px-4 py-0 rounded-full cursor-pointer text-2xl font-semibold bg-gradient-to-br from-[#8400ff] to-[#e600ff] hover:scale-105 hover:duration-500 hover:transition-all duration-500 hover:ease-in-out hover:brightness-100">
            Check Resume
          </button>
        </div>
        <div className="w-full flex order-2 justify-end gap-3 lg:order-1 lg:justify-center lg:mb-20 sm:mb-8">
          <img
            src="src\assets\Amber2.jpg"
            alt="hero-image"
            className="relative rounded-full border-2 border-purple-500 sm:text-3xl size-96 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
