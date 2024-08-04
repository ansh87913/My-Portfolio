import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a href={project.github} className="project-duration">GitHub Link</a>
    </div>
  );
};

export default ProjectCard;
