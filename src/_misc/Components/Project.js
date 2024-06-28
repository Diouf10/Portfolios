import { useState } from "react";
import { Link } from "react-router-dom";
import './Projects.css';

const Project = ({project}) => {

    return (
        <article class="project_content" >
            <div class="infos">
              <h3>{project.type}</h3>
              <p>{project.shortDescription}</p>
              <p>Ce projet a été fait avec : {project.technologies.join(', ')}</p>

              <div class="app_utiliser">
                <div class="icon">
                  <i class="fa-brands fa-2xl fa-html5"></i>
                  <i class="fa-brands fa-2xl fa-css3-alt"></i>
                  <i class="fa-brands fa-2xl fa-js"></i>
                </div>
              </div>

              <p>Réalisé par : {project.author}</p>
              <Link to={`/projects/${project.id}`}>
                 <button className="btn">En savoir plus</button>
                </Link>
            </div>

            <div class="display">
              <h2>{project.name}</h2>
              <img src={project.image} alt={project.name} />
            </div>
        </article>
    )
}
    
export default Project;