import { useState } from "preact/hooks";
// import LemonIcon from "https://deno.land/x/tabler_minor stufficons_tsx@0.0.3/tsx/lemon-2.tsx";
import { Button } from "./Button.tsx";
import { asset } from "$fresh/runtime.ts";
export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  const menus = [
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl py-3 px-3  md:py-3.5 md:px-4">
      <div className="flex  flex-row   justify-between">
        {/* <LemonIcon aria-hidden="true" /> */}
        <div className="text-2xl ml-1 font-bold">
          <a href="/">Home</a>
        </div>

        <div>
          {menus.map((menu) => (
            <div>
              <a
                href={menu.href}
                class="flex justify-center p-4 text-gray-500  hover:text-black py-1 border-gray-500 [aria-current]:text-green-600"
              >
                {menu.name}
              </a>
            </div>
          ))}
        </div>
        <div>
          <Button>
            <a href={asset("/resume.pdf")}>Resume</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
