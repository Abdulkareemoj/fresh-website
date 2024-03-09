import { createExtractor } from "https://deno.land/std@0.215.0/front_matter/mod.ts";
import { join } from "https://deno.land/std@0.211.0/path/join.ts";

const directory = `${Deno.cwd()}/posts`;
export interface Post {
  slug: string;
  title: string;
  publishDate: Date;
  snippet: string;
  content: string;
  description: string;
  image: string;
}

// Get posts
export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir(directory);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  return posts;
}

// Get post
export async function getPost(slug: string): Promise<Post | null> {
  // Validate the slug
  if (slug.includes("..") || slug.includes("/")) {
    throw new Error("Invalid slug");
  }

  const text = await Deno.readTextFile(join(directory, `${slug}.md`));
  const { data, content } = parseFrontMatter({
    content: text,
    data: { yaml: (str) => JSON.parse(str) },
  });

  if (typeof data !== "object" || data === null) {
    throw new Error("Invalid front matter");
  }

  // const frontMatter = data as FrontMatter;

  return {
    ...data,
    slug,
    content,
    publishDate: new Date(data.publishDate),
  } as Post;
}
