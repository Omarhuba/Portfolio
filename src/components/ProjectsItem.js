import React from "react";
import "../sass/ProjectItem.scss";

function ProjectsItem(props) {
  return (
    <div className="container" id="project-items">
      <div className="card" data-aos="fade-up" data-aos-duration="2000">
        <div className="project-img">
          <img src={props.img} alt="iaamage"  />
        </div>
        <div className="project-info">
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
          <a href={props.codelink}>VIEW CODE</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsItem;
