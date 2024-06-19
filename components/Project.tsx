export default function Projects() {
  const projects = [
    {
      repo: "app1",
      link: "https://github.com/",
      description: "",
      image: "",
    },
    {
      repo: "app2",
      link: "https://github.com/",
      description: "",
      image: "",
    },
    {
      repo: "app3",
      link: "https://github.com/",
      description: "",
      image: "",
    },
    {
      repo: "app4",
      link: "https://github.com/",
      description: "",
      image: "",
    },
    {
      repo: "app5",
      link: "https://github.com/",
      description: "",
      image: "",
    },
    {
      repo: "app6",
      link: "https://github.com/",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {projects.map((project) => (
        <div key={project.repo}>
          <a href={project.link}>{project.repo}</a>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
