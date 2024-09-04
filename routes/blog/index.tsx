import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { PostCard } from "../../components/PostCard.tsx";
import { getPosts, Post } from "../../utils/post.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WiZtEk • Blog</title>
      </Head>
      <main className="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 className="text-5xl font-bold text-center">Blog</h1>
        <section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">
          <div className="mb-8 md:mb-20 ">
            {posts.map((post) => <PostCard post={post} />)}
          </div>
        </section>
      </main>
    </>
  );
}
