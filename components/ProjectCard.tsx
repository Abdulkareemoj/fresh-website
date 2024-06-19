import { Project } from "../utils/projects.ts";

export function ProjectCard(props: { project: Project }) {
  const { project } = props;
  return (
    <article class="flex justify-between">
      <div key={project.repo}>
        <a href={project.link}>{project.repo}</a>
        <p>{project.image}</p>
        <p>{project.description}</p>
      </div>
    </article>
  );
}
