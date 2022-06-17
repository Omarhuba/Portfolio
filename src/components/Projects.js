import React from "react";
import "../sass/Projects.scss";
import ProjectsItem from "./ProjectsItem";

export const Projects = (props) => {




  return (
    <div className="project_page" id="project_page">
        <h1 data-aos="fade-up" data-aos-duration="2000">PROJECTS</h1>

     <ProjectsItem  name={props.items[0].name} img={props.items[0].img} desc={props.items[0].desc} codelink={props.items[0].codelink} sitelink={props.items[0].sitelink}/>
     <ProjectsItem  name={props.items[1].name} img={props.items[1].img} desc={props.items[1].desc} codelink={props.items[1].codelink} sitelink={props.items[1].sitelink}/>
     <ProjectsItem  name={props.items[2].name} img={props.items[2].img} desc={props.items[2].desc} codelink={props.items[2].codelink} sitelink={props.items[2].sitelink}/>
     <ProjectsItem  name={props.items[3].name} img={props.items[3].img} desc={props.items[3].desc} codelink={props.items[3].codelink} sitelink={props.items[3].sitelink}/>
     <ProjectsItem  name={props.items[4].name} img={props.items[4].img} desc={props.items[4].desc} codelink={props.items[4].codelink} sitelink={props.items[4].sitelink}/>
    </div>
  );
};
