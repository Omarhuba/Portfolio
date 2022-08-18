import React from "react";
import "../sass/Projects.scss";

function ProjectsItem(props) {
  return (
    <div className="project-items">
      <section
        className="project-img"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <img src={props.img} alt="iaamage" width="500px" />
      </section>
      <section
        className="project-info"
        data-aos="fade-up-left"
        data-aos-duration="2000"
      >
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <a href={props.codelink}>VIEW CODE</a>
      </section>
    </div>
  );
}

export default ProjectsItem;
