import React from "react";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className="w-full h-full absolute left-0 top-0 bg-black flex items-start justify-center overflow-y-scroll transition-all duration-100 ease-in">
        <div className="max-w-3xl w-full rounded-2xl my-12 mx-3 h-min flex flex-col relative p-5 bg-slate-950 text-slate-100">
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img src={project?.image} className="w-full object-cover rounded-xl mt-8 shadow-md opacity-30" />
          <div className="text-lg font-semibold text-slate-100 mx-2 mt-2">{project?.title}</div>
          <div className="text-base my-1 mx-2 font-normal">{project.date}</div>
          <div className="flex flex-wrap my-2">
            {" "}
            {project?.tags.map((tag) => (
              <div className="text-sm font-normal text-purple-600 m-1 py-1 px-2 rounded-lg bg-purple-950">{tag}</div>
            ))}
          </div>
          <div className="text-base font-normal text-slate-100 my-2 mx-1">{project?.description}</div>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member) => (
                  <Member>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            <Button href={project?.webapp} target="new">
              View Live App
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
