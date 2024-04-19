import { education } from "../utils/constants";
import EducationCard from "./Cards/EducationCard";

const Education = () => {
  return (
    <div className="flex justify-center relative z-10 items-center pb-16">
      <div className="relative flex flex-col justify-between items-center w-full max-w-screen-xl pt-10 gap-3">
        <h1 className="text-4xl text-center font-semibold mt-5 text-[#838894]">
          Education
        </h1>
        <p className="text-lg text-center text-[#838894]">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        <div className="">
          <div className="w-full max-w-1000 mx-auto mt-3 flex flex-col items-center justify-center gap-6">
            {education.map((education) => (
              <div key={education.id} className="timelineItem">
                <div className="timelineContent">
                  <EducationCard education={education} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
