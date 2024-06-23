import Body from "../components/Body.tsx";
import Projects from "../components/Project.tsx";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "../utils/post.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};
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
          <h2>Projects</h2>

          <Projects />
          <span>
            <a href="/projects">All projects →</a>
          </span>

          <div className="mt-12"></div>
          <h2>Blog</h2>

          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`}>
                {post.title}
              </a>
            ))}
          </div>
          <span>
            <a href="/blog">All posts →</a>
          </span>
        </section>
      </div>
    </>
  );
}
