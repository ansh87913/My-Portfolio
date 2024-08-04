import ProjectCard from './ProjectCard';
import projectsData from './projectsData';
import "./Project.css"

function Project() {
  return (
    <div className="custom">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Project;
