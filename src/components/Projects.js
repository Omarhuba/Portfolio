import React from "react";
import "../sass/Projects.scss";
import ProjectsItem from "./ProjectsItem";

export const Projects = (props) => {
  return (
    <div className="project_page" id="project_page">
      <h1 data-aos="fade-up" data-aos-duration="2000">
        PROJECTS
      </h1>
      {props.items.map((item) => (
        <ProjectsItem
          name={item.name}
          img={item.img}
          desc={item.desc}
          codelink={item.codelink}
        />
      ))}
    </div>
  );
};
