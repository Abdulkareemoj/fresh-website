import {
  createExtractor,
  Parser,
} from "https://deno.land/std@0.219.0/front_matter/mod.ts";
import { join } from "https://deno.land/std@0.211.0/path/join.ts";
import { parse as parseYAML } from "https://deno.land/std@0.219.0/yaml/parse.ts";

const extractYAML = createExtractor({ yaml: parseYAML as Parser });
const directory = `${Deno.cwd()}./posts`;

export interface Post {
  slug: string;
  title: string;
  publishDate: Date;
  content: string;
  description: string;
  image: string;
}

export interface FrontMatter {
  title: string;
  publishDate: string;
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
  const posts = (await Promise.all(promises)) as Post[];
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
  const { attrs, body } = extractYAML(text);

  if (typeof attrs !== "object" || attrs === null) {
    throw new Error("Invalid front matter");
  }

  const frontMatter = attrs as unknown as FrontMatter;

  return {
    ...frontMatter,
    slug,
    content: body,
    publishDate: new Date(frontMatter.publishDate),
  } as Post;
}
