import React from "react";

const EducationCard = ({ education }) => {
  return (
    <div className="w-[650px] border rounded-lg shadow-sm p-3 justify-between relative overflow-hidden flex flex-col gap-3 transition duration-300 ease-in-out hover:-translate-y-1 border-solid  shadow-purple-500 border-purple-500">
      <div className="w-full gap-3 flex">
        <img className="h-12 bg-[#000] rounded-xl mt-1" src={education.img} />
        <div className="text-lg font-semibold text-[#838894]">
          <div className="name">{education.school}</div>
          <div className="text-sm font-medium text-[#838894]">
            {education.degree}
          </div>
          <div className="text-xs font-normal text-[#838894]">
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-sm font-medium text-[#838894]">
        <b>Grade: </b>
        {education.grade}
      </div>
      <div className="w-full text-base font-normal mb-2 text-[#838894]">
        <span>{education.desc}</span>
      </div>
    </div>
  );
};

export default EducationCard;
