import React from "react";
import "../sass/Projects.scss";
import ProjectsItem from "./ProjectsItem";

export const Projects = (props) => {
  return (
    <div className="container" >
      <h1 data-aos="fade-up" data-aos-duration="2000">
        PROJECTS
      </h1>

    <div className="project_page" id="project_page">
      {props.items.map((item) => (
        <ProjectsItem className="container"
        key={item.id}
        name={item.name}
        img={item.img}
        desc={item.desc}
        codelink={item.codelink}
        />
        ))}
    </div>
        </div>
  );
};
