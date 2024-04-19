import React from "react";
import ExperienceCard from "./Cards/ExperienceCard";
import { experiences } from "../utils/constants";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center relative z-10 items-center pb-5">
      <div className="relative flex justify-between items-center w-full flex-col max-w-7xl py-20 gap-3">
        <h1 className="text-4xl text-center font-semibold mt-5 text-blue-100">
          Experience
        </h1>
        <p className="text-lg text-center max-w-xl text-[#838894]">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
        <div className="w-full max-w-5xl mt-3 flex items-center justify-center gap-3">
          <div className="timeline">
            {experiences.map((experience, index) => (
              <div key={index} className="timelineItem">
                <div className="timelinesaperator" />
                <div className="timelinedot">
                  {index != experience.length - 1 && (
                    <div className="TimelineConnertor" />
                  )}
                </div>
                <div className="timelineContent">
                  <ExperienceCard experience={experience} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
