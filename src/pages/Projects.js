import React from 'react'
import Projectitem from '../components/Projectitem'
// import Img import Proj1 from '.../assests/projX.jpg
import { ProjectList } from "../helpers/ProjectLists"

import "../styles/Projects.css"


function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <Projectitem id={idx} name={project.name} image = {project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects