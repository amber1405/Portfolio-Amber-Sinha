import { skills } from "../utils/constants";


const Skills = () => {
  return (
    <div className="flex flex-col justify-center relative z-10 items-center">
      <div className="relative flex justify-between items-center flex-col w-full max-w-6xl gap-3 md:flex-col">
        <div className="text-4xl text-center font-semibold mt-5 md:mt-3 md:text-3xl text-slate-100">
          Skills
        </div>
        <p className="text-lg text-pretty font-semibold text-center max-w-3xl text-[#838894]">
            The greatest skill you can possess is the ability to learn and adapt
            to change. Skill is not just about what you know, but how quickly
            you can learn and apply new knowledge. Here are some of my skills on
            which I have been working on for the past 2 years.
        </p>
        <div className="w-full flex flex-wrap m-6 gap-12 justify-center">
          {skills.map((skill,index) => (
            <div key={index} className="w-full max-w-lg bg-[#111c34] border border-[#854CE6] shadow-[0px_4px_rgba(23,92,230)] rounded-2xl py-4 m-4">
              <div className="text-3xl font-semibold mb-5 text-center text-[#838894]">{skill.title}</div>
              <div className="flex justify-center flex-wrap gap-5">
                {skill.skills.map((item,index) => (
                  <div key={index} className="text-base w-40 font-normal border border-slate-400  rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-slate-100 ">
                    <img src={item.image} alt="skill-image" className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
