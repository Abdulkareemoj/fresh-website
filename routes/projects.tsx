import { Handlers, PageProps } from "$fresh/server.ts";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { getProjects, Project } from "../utils/projects.ts";

export const handler: Handlers<Project[]> = {
  async GET(_req, ctx) {
    const project = getProjects();
    return ctx.render(project);
  },
};

export default function Projects(props: PageProps<Project[]>) {
  const projects = props.data;
  return (
    <div>
      {projects.map((project) => <ProjectCard project={project} />)}
    </div>
  );
}
