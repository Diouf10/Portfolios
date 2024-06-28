import './Projects.css'
import projectsData from '../data/data';
import Project from '../Components/Project';

/**
 * @return {jsx}
 */
function Projects() {
    return(
      <div className='projects-page'>
        <h1>Mes Projets</h1>
      <div className="projects-list">
        {projectsData.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
        
      </div>
    )
}

export default Projects;