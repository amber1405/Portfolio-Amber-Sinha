import React from "react";

const ProjectCard = ({project,setOpenModal}) => {
  return (
    <div
      className="text-slate-300 w-[340px] mx-3 h-[500px] overflow-hidden border border-slate-900 m-3 bg-[#061223] cursor-pointer rounded-2xl shadow-2xl shadow-slate-950 pb-7 px-2 flex flex-col gap-2 transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-3xl hover:filter "
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <img src={project.image} alt="" className="w-80  mt-3 h-44 rounded-lg shadow-sm shadow-blue-700 " />
      <div className="w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags?.map((tag, index) => (
          <div key={index} className="text-xs font-normal text-purple-500 bg-slate-800 py-1 px-2 rounded-xl">{tag}</div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-0 px-1">
        <div className="text-xl font-semibold overflow-hidden max-w-full text-ellipsis ">{project.title}</div>
        <div className="text-xs ml-1 font-normal text-[#838894]">{project.date}</div>
        <div className="font-normal text-[#838894] overflow-hidden mt-2 max-w-full text-ellipsis max-h-36">{project.description}</div>
      </div>
      {/* <div className="flex items-center pl-3">
        {project.member?.map((member) => (
          <img src={member.img} alt="" className="w-10 h-10 rounded-[50%] -ml-3 bg-white shadow-sm border-2 border-[#854CE6] " />
        ))}
      </div> */}
    </div>
  );
};

export default ProjectCard;
