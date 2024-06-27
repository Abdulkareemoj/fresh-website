import { Button } from "./Button.tsx";
import { asset } from "$fresh/runtime.ts";

const links = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Uses",
    href: "/uses",
  },
];

export default function Header() {
  return (
    <div className="mx-auto w-full max-w-5xl py-3 px-3  md:py-3.5 md:px-4 ">
      <div className="flex  flex-row   justify-between">
        {/* <LemonIcon aria-hidden="true" /> */}
        <div className="text-2xl  ml-1 font-bold">
          <a href="/">Home</a>
        </div>

        <div class="flex px-4 py-2">
          {links.map((link) => (
            <div>
              <a
                href={link.href}
                class="justify-center p-4 text-gray-500 hover:text-black py-1 border-gray-500 [aria-current]:text-green-600"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
        <div>
          <Button>
            <a class="" href={asset("/resume.pdf")}>Download CV</a>
          </Button>
          {/* <ToggleTheme /> */}
        </div>
      </div>
    </div>
  );
}
