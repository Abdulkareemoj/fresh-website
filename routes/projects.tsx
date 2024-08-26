import { Handlers, PageProps } from "$fresh/server.ts";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { getProjects, Project } from "../utils/projects.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Project[]> = {
  async GET(_req, ctx) {
    const project = await getProjects();
    return ctx.render(project);
  },
};

export default function Projects(props: PageProps<Project[]>) {
  const projects = props.data;
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WiZtEk • Projects</title>
      </Head>
      <main className="max-w-screen-md px-4 pt-16 mx-auto dark:bg-gray-900 dark:text-white">
        <h1 className="text-5xl font-bold text-center dark:text-white">
          Projects
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard project={project} />)}
        </div>
      </main>
    </>
  );
}
