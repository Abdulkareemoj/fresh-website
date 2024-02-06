export default function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.repo}>
          <a href={project.link}>{project.repo}</a>
          <p>{project.image}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
