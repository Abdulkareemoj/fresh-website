// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $blog_slug_ from "./routes/blog/[slug].tsx";
import * as $blog_404 from "./routes/blog/_404.tsx";
import * as $blog_feed from "./routes/blog/feed.ts";
import * as $blog_index from "./routes/blog/index.tsx";
import * as $contact from "./routes/contact.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $projects from "./routes/projects.tsx";
import * as $uses from "./routes/uses.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Dropdown from "./islands/Dropdown.tsx";
import * as $ToggleTheme from "./islands/ToggleTheme.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/joke.ts": $api_joke,
    "./routes/blog/[slug].tsx": $blog_slug_,
    "./routes/blog/_404.tsx": $blog_404,
    "./routes/blog/feed.ts": $blog_feed,
    "./routes/blog/index.tsx": $blog_index,
    "./routes/contact.tsx": $contact,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/projects.tsx": $projects,
    "./routes/uses.tsx": $uses,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/Dropdown.tsx": $Dropdown,
    "./islands/ToggleTheme.tsx": $ToggleTheme,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
