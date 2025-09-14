import {
  createExtractor,
  Parser,
} from "https://deno.land/std@0.224.0/front_matter/mod.ts";
import { join } from "https://deno.land/std@0.224.0/path/join.ts";
import { parse as parseYAML } from "https://deno.land/std@0.224.0/yaml/parse.ts";

const extractYAML = createExtractor({ yaml: parseYAML as Parser });
// Updated path construction
const directory = join(Deno.cwd(), "posts");

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
  const promises = [];
  try {
    // Use an array to accumulate all files
    for await (const file of Deno.readDir(directory)) {
      const slug = file.name.replace(".md", "");
      promises.push(getPost(slug));
    }
  } catch (e) {
    console.error(`Error reading directory: ${e.message}`);
    throw e;
  }

  const posts = (await Promise.all(promises)) as Post[];
  posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime()); // Changed the sorting order
  return posts;
}

// Get post
export async function getPost(slug: string): Promise<Post | null> {
  // Decode the slug to handle URL-encoded characters
  const decodedSlug = decodeURIComponent(slug);

  // Validate the slug
  if (decodedSlug.includes("..") || decodedSlug.includes("/")) {
    throw new Error("Invalid slug");
  }

  const filePath = join(directory, `${decodedSlug}.md`);
  let text: string;

  try {
    text = await Deno.readTextFile(filePath);
  } catch (e) {
    console.error(`Error reading file ${filePath}: ${e.message}`);
    throw e;
  }

  const { attrs, body } = extractYAML(text);

  if (typeof attrs !== "object" || attrs === null) {
    throw new Error("Invalid front matter");
  }

  const frontMatter = attrs as unknown as FrontMatter;

  return {
    ...frontMatter,
    slug: decodedSlug,
    content: body,
    publishDate: new Date(frontMatter.publishDate),
  } as Post;
}
