import React, { useState } from 'react'
import {projects} from "../utils/constants"
import ProjectCard from './Cards/ProjectCard';
const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
  return (
     <div className=' flex flex-col justify-between relative z-10 ' id="projects">
        <div className="relative flex justify-between items-center flex-col w-full pt-2 pb-24 px-0 gap-3">
        <div className="text-4xl text-center font-semibold md:text-3xl text-slate-100">Projects</div>
        <div className="sm:text-base md:text-lg text-center max-w-xl text-[#838894]">
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </div>
        <div className="flex justify-center w-[95%] items-center gap-1 flex-wrap ">
        {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </div>
        </div>
        </div>
    
  )
}

export default Projects