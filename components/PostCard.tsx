import { Post } from "../utils/post.ts";

export function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <article class="flex justify-between">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {post.title}
        </h3></a>

        <div class="mt-4 text-gray-900">
          {post.snippet}
        </div>
        <time class="text-gray-500">
          {new Date(post.publishDate).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      
    </article>
  );
}
