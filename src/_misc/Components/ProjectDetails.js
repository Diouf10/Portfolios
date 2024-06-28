// src/pages/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/data';
import './Projects.css';


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return( 
        <h1>Project nn trouvé</h1>
    )
  }
  else {

  return (
    <div className='project-details'>
      <h1>{project.name}</h1>
      <img src={project.image} alt={`${project.name} screenshot`} />
      <p>{project.longDescription}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <p><strong>Auteur:</strong> {project.author}</p>
      <a className='btn' href={project.link} target="_blank" rel="noopener noreferrer">
        Voir Projet
      </a>
    </div>
  );
  }
};

export default ProjectDetails;
