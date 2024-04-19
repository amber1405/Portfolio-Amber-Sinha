import { Bio } from "../utils/constants";
import HeroBgAnimation from "./HeroBgAnimation";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className=" m-16 mt-10 flex justify-center relative px-20 py-8 z-10">
      <div className="absolute flex justify-center items-center overflow-hidden max-w-m transform xl:translate-x-2/3 -translate-y-16 ">
        <HeroBgAnimation />
      </div>
      <div className="relative flex items-center justify-between w-full text-slate-100 flex-col xl:flex-row">
        <div className="order-1">
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
          <div className="w-[600px] text-xl font-semibold mb-10 leading-10 text-[#838894] ">
            {Bio.description}
          </div>
          <button className="h-16 w-64 max-w-80 text-center px-4 py-0 rounded-3xl cursor-pointer text-2xl font-semibold bg-gradient-to-br from-[#8400ff] to-[#e600ff] hover:scale-105 hover:duration-500 hover:transition-all duration-500 hover:ease-in-out hover:brightness-100">
            Check Resume
          </button>
        </div>
        <div className="w-full max-w-md flex justify-center gap-3 mb-28 xl:order-1">
          <img
            src="src\assets\Amber2.jpg"
            alt="hero-image"
            className=" max-w-lg rounded-full border-2 border-purple-500 size-[26rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
