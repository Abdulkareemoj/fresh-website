// import { Button } from "./Button.tsx";
// import { asset } from "$fresh/runtime.ts";
// import Toggle from "../components/Toggle.tsx";
// export default function Header() {
//   // const [isOpen, setIsOpen] = useState(false);
//   const menus = [
//     { name: "Blog", href: "/blog" },
//     { name: "Projects", href: "/projects" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <div className="mx-auto w-full max-w-5xl py-3 px-3  md:py-3.5 md:px-4 dark:bg-slate-800">
//       <div className="flex  flex-row   justify-between">
//         {/* <LemonIcon aria-hidden="true" /> */}
//         <div className="text-2xl dark:text-white ml-1 font-bold">
//           <a href="/">Home</a>
//         </div>

//         <div class="flex dark:text-white px-4 py-2">
//           {menus.map((menu) => (
//             <div>
//               <a
//                 href={menu.href}
//                 class="justify-center p-4 text-gray-500 hover:text-black py-1 border-gray-500 [aria-current]:text-green-600"
//               >
//                 {menu.name}
//               </a>
//             </div>
//           ))}
//         </div>
//         <div>
//           <Button>
//             <a class="dark:text-white " href={asset("/resume.pdf")}>Resume</a>
//           </Button>
//           <Toggle />
//         </div>
//       </div>
//     </div>
//   );
// }

import { asset } from "$fresh/runtime.ts";
import Theme from "../islands/Theme.tsx";
import MobileHeader from "../islands/MobileHeader.tsx";
// import { T } from "../state.ts";

type Menu = { name: string; href: string };
export type HeaderProps = {
  active: string;
  sticky?: boolean;
  left?: Menu[];
  right?: Menu[];
  lang: State["lang"];
};

function LargeHeader(props: Omit<HeaderProps, "sticky">) {
  return (
    <div class="text-md hidden h-14 flex-row flex-wrap gap-6 px-4 font-bold text-gray-700 dark:text-gray-300 sm:flex">
      <ul class="flex flex-1 items-center gap-6">
        {props.active !== "/" && (
          <li>
            <div class="flex items-center gap-2">
              <img
                class="h-8 w-8 rounded-full"
                src={asset("avatar-small.webp")}
                alt="avatar"
              />
              <a
                href="/"
                class="hover:(text-transparent dark:(from-cyan-400 to-teal-400)) bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text"
              >
                Guillaume Comte
              </a>
            </div>
          </li>
        )}
        {props.left &&
          props.left.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"hover:(text-gray-900 dark:text-gray-100) border-gray-500 py-1 dark:border-gray-300" +
                  (menu.href === props.active ? " border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
      </ul>
      <ul class="flex items-center gap-6">
        {props.right &&
          props.right.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"hover:(text-gray-900 dark:text-gray-100) border-gray-500 py-1 dark:border-gray-300" +
                  (menu.href === props.active ? " border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
      </ul>
      <div class="flex items-center gap-6">
        <Theme />
      </div>
    </div>
  );
}

export default function Header(props: HeaderProps) {
  const menus: { name: string; href: string }[] = [
    // { name: T.value!.titles.home, href: "/" },
    // { name: "Blog", href: "/blog" },
  ];
  props.right = props.right ?? menus;
  return (
    <header
      class={`w-full bg-gray-100 dark:bg-gray-700 ${
        props.sticky ?? "sticky top-0 z-10 -mb-12 sm:-mb-14"
      }`}
    >
      <LargeHeader {...props} />
      <MobileHeader {...props} />
    </header>
  );
}
