import { useState } from "preact/hooks";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl py-3 px-3 md:flex md:justify-between md:py-3.5 md:px-4">
      <div className="flex items-center flex-1">
        <LemonIcon aria-hidden="true" />
        <div className="text-2xl ml-1 font-bold">
          Fresh
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`flex flex-col md:flex-row items-center gap-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              className={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
