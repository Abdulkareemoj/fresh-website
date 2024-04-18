import { Button } from "./Button.tsx";
import { asset } from "$fresh/runtime.ts";
import ToggleTheme from "./ToggleTheme.tsx";
import ToggleMenu from "./ToggleMenu.tsx";
import { useState } from "preact/hooks";
import Logo from "./Logo.tsx";
import CTA from "./CTA.tsx";
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-down.tsx";
import { ComponentType, JSX } from "preact";
type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

type Icon = ComponentType<JSX.HTMLAttributes<SVGElement>>;

type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: "center" | "right" | "left";
};

export default function Header() {
  const headerData: HeaderProps = {
    links: [
      {
        label: "Pages",
        icon: IconChevronDown,
        links: [
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "Pricing",
            href: "/pricing",
          },
          {
            label: "About us",
            href: "/about",
          },
          {
            label: "Contact us",
            href: "/contact",
          },
          {
            label: "FAQs",
            href: "/faqs",
          },
          {
            label: "Terms & Conditions",
            href: "/terms",
          },
          {
            label: "Privacy Policy",
            href: "/privacy",
          },
        ],
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    actions: [
      {
        text: "Download",
        href: "https://github.com/onwidget/tailnext",
        targetBlank: true,
      },
    ],
    isSticky: true,
    showToggleTheme: true,
    showRssFeed: false,
    position: "right",
  };
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } =
    headerData;

  const updatedIsDropdownOpen = links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(
    updatedIsDropdownOpen as boolean[],
  );

  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    // <div className="mx-auto w-full max-w-5xl py-3 px-3  md:py-3.5 md:px-4 dark:bg-slate-800">
    //   <div className="flex  flex-row   justify-between">
    //     {/* <LemonIcon aria-hidden="true" /> */}
    //     <div className="text-2xl dark:text-white ml-1 font-bold">
    //       <a href="/">Home</a>
    //     </div>

    //     <div class="flex dark:text-white px-4 py-2">
    //       {menus.map((menu) => (
    //         <div>
    //           <a
    //             href={menu.href}
    //             class="justify-center p-4 text-gray-500 hover:text-black py-1 border-gray-500 [aria-current]:text-green-600"
    //           >
    //             {menu.name}
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //     <div>
    //       <Button>
    //         <a class="dark:text-white " href={asset("/resume.pdf")}>Resume</a>
    //       </Button>
    //       <Toggle />
    //     </div>
    //   </div>
    // </div>

    <header
      className={`top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 ${
        isSticky ? "sticky" : "relative"
      }`}
      id="header"
    >
      <div className="mx-auto w-full max-w-7xl py-3 px-3 md:flex md:justify-between md:py-3.5 md:px-4">
        <div className="flex justify-between">
          <a
            className="flex items-center"
            href="/"
            onClick={() =>
              isToggleMenuOpen
                ? handleToggleMenuOnClick()
                : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])}
          >
            <Logo />
          </a>
          <div className="flex items-center md:hidden">
            <ToggleMenu
              handleToggleMenuOnClick={handleToggleMenuOnClick}
              isToggleMenuOpen={isToggleMenuOpen}
            />
          </div>
        </div>
        <nav
          className={`${
            isToggleMenuOpen ? "block" : "hidden"
          } h-screen md:w-full ${
            position === "right"
              ? "justify-end"
              : position === "left"
              ? "justify-start"
              : "justify-center"
          } w-auto overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul className="flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
            {links &&
              links.map(({ label, href, icon: Icon, as }, index) => (
                <li
                  key={`item-a-${index}`}
                  className={as?.length ? "dropdown" : ""}
                >
                  {as && as.length
                    ? (
                      <>
                        <button
                          className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                          onClick={() => handleDropdownOnClick(index)}
                        >
                          {label}{" "}
                          {Icon && (
                            <Icon className="ml-0.5 hidden h-3.5 w-3.5 md:inline" />
                          )}
                        </button>
                        <ul
                          className={`${
                            isDropdownOpen[index] ? "block" : "md:hidden"
                          } rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90`}
                        >
                          {links.map((
                            { label: label2, href: href2 },
                            index2,
                          ) => (
                            <li key={`item-link-${index2}`}>
                              <a
                                className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200"
                                href={href2 as string}
                                onClick={() =>
                                  isToggleMenuOpen
                                    ? handleToggleMenuOnClick()
                                    : handleCloseDropdownOnClick(index)}
                              >
                                {label2}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )
                    : (
                      <a
                        className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                        href={href as string}
                        onClick={() => (isToggleMenuOpen
                          ? handleToggleMenuOnClick()
                          : handleDropdownOnClick(index))}
                      >
                        {label}
                      </a>
                    )}
                </li>
              ))}
          </ul>
        </nav>
        <div
          className={`${
            isToggleMenuOpen ? "block" : "hidden"
          } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0`}
        >
          <div className="flex w-full items-center justify-between md:w-auto">
            {showToggleTheme && <ToggleTheme />}

            {actions && actions.length > 0 && (
              <div className="ml-4 flex w-max flex-wrap justify-end">
                {actions.map((callToAction, index) => (
                  <CTA
                    key={`item-action-${index}`}
                    callToAction={callToAction as CallToActionType}
                    linkClass="btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
