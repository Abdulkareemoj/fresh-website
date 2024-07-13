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
      <main className="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <div className="flex flex-wrap mt-8">
          {projects.map((project) => (
            <div className="w-full md:w-1/2 px-2 mb-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
