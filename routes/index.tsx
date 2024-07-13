import Body from "../components/Body.tsx";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "../utils/post.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};
const projects = [{
  repo: "SalesManApp",
  link: "https://github.com/Abdulkareemoj/SalesManApp",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}, {
  repo: "Node-React-TS-Docker Template",
  link: "https://github.com/Abdulkareemoj/node-react-ts-docker",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}, {
  repo: "DonationsApp",
  link: "https://github.com/Abdulkareemoj/DonationsApp",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}, {
  repo: "EasyBank Landing Page",
  link: "https://github.com/Abdulkareemoj/easybank-landing-page",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}, {
  repo: "Strmr",
  link: "https://github.com/Abdulkareemoj/Strmr",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}, {
  repo: "React Native Todo",
  link: "https://github.com/Abdulkareemoj/rn-todo",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}, {
  repo: "Strmr-rn",
  link: "https://github.com/Abdulkareemoj/Strmr-rn",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}, {
  repo: "REST API",
  link: "https://github.com/Abdulkareemoj/REST-API",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  image: "",
}];
export default function Home(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WiZtEk • Home</title>
      </Head>
      <div className="mx-auto max-w-container px-4 transition-all duration-100 ease-in  md:bg-white/90 md:backdrop-blur-sm ">
        <main className="prose">
          <Body />
        </main>
        <section>
          <div className="mt-12"></div>
          <h2 class="text-xl font-bold py-4">Projects</h2>
          <div className="py-3 grid grid-cols-2 gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.repo}>
                <a href={project.link}>{project.repo}</a>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <span>
            <a class=" font-semibold" href="/projects">All projects →</a>
          </span>
        </section>
        <div className="mt-12"></div>
        <section>
          <h2 class="text-xl font-bold py-4">Blog</h2>

          <div className="py-3 flex flex-col gap-4">
            {posts.map((post) => (
              <div class="flex justify-between">
                <a key={post.slug} href={`/blog/${post.slug}`}>
                  {post.title}
                </a>
                <time class="text-gray-500">
                  {new Date(post.publishDate).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            ))}
          </div>
          <span>
            <a class=" font-semibold" href="/blog">All posts →</a>
          </span>
        </section>
      </div>
    </>
  );
}
