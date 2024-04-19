const ExperienceCard = ({experience}) => {
    return (
        <div className="w-[650px] border rounded-md shadow-sm shadow-blue-500 p-12 justify-between relative overflow-hidden flex flex-col gap-4 transition duration-500 ease-in-out hover:-translate-y-1 border-solid border-blue-500">
          <div className="w-full flex gap-3">
            <img className='h-12 bg-black border-spacing-3 mt-1' src={experience.img} alt="" />
            <body className='w-full flex flex-col'>
              <div className="text-lg font-semibold text-[#838894]">{experience?.role}</div>
              <div className="text-sm font-medium text-[#838894]">{experience?.company}</div>
              <div className="text-xs font-normal text-slate-500 ">{experience?.date}</div>
            </body>
          </div>
          <div className="w-full text-base font-normal text-[#838894]">
            {experience?.desc && <span>{experience?.desc}</span>}
            {experience?.skills && (
              <>
                <br />
                <div className="w-full flex gap-3">
                  <b>Skills:</b>
                  <div className="flex flex-wrap gap-2">
                    {experience?.skills?.map((skill, index) => (
                      <div key={index} className="text-base font-normal text-[#838894]">
                        • {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          {experience.doc && (
            <a href={experience.doc} target="new">
              <img src="{experience.doc}" alt="" className="document" />
            </a>
          )}
        </div>
      );
}

export default ExperienceCard