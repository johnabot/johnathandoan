import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectLists";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href = {project.github} rel = "noopener noreffer" target = "_blank">
      <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;