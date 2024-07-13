import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { CSS, render } from "https://deno.land/x/gfm@0.6.0/mod.ts";
import { Head } from "$fresh/runtime.ts";
import { dirname, fromFileUrl, join } from "$std/path/mod.ts";

interface Page {
  description: string;
  markdown: string;
  data: Record<string, unknown>;
  title: string;
}

export const handler: Handlers<Page> = {
  async GET(_req, ctx) {
    let rawMarkdown = "";
    try {
      console.log("Attempting to read file...");
      const currentFilePath = fromFileUrl(import.meta.url);
      const currentDir = dirname(currentFilePath);
      const usesMdPath = join(currentDir, "../utils/uses.md");
      rawMarkdown = await Deno.readTextFile(usesMdPath);
      console.log("File read successfully.");
    } catch (error) {
      console.error("Failed to read file:", error);
      return ctx.render(undefined); // Consider rendering an error message or logging the error
    }
    const { attrs, body } = extract(rawMarkdown);
    return ctx.render({
      markdown: body,
      data: attrs,
      title: attrs.title as string,
      description: attrs.description as string,
    });
  },
};

export default function Uses({ data }: PageProps<Page | null>) {
  if (!data) {
    return <h1>File not found.</h1>;
  }
  console.log(data);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <title>WiZtEk • Uses</title>
      </Head>
      <main>
        <div class="text-5xl font-bold text-center pb-4">{data.title}</div>
        <div class="text-2xl pb-4">{data.description}</div>
        <div
          class="markdown-body"
          dangerouslySetInnerHTML={{ __html: render(data?.markdown) }}
        />
      </main>
    </>
  );
}
