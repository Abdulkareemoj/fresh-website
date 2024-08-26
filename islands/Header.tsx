import { useState } from "preact/hooks";
import ToggleMenu from "../components/ToggleMenu.tsx";
import CTA from "../components/CTA.tsx";
import ToggleDarkMode from "./ToggleDarkMode.tsx";

type Icon = string;

type HeaderProps = {
    links?: Array<MenuLink>;
    actions?: Array<CallToActionType>;
    // actions?: Array<ActionLink>;
    isSticky?: boolean;
    showToggleTheme?: boolean;
    showRssFeed?: boolean;
    position?: "center" | "right" | "left";
};
interface MenuLink extends Link {
    links?: Array<Link>;
}
type CallToActionType = {
    text?: string;
    href: string;
    icon?: Icon;
    targetBlank?: boolean;
};
// interface CallToAction {
//     text: string;
//     href: string;
//     icon?: Icon;
//     targetBlank?: boolean;
//     btnText?: "uppercase" | "capitalize";
//     btnType?: "primary" | "secondary";
// }

interface Link {
    label?: string;
    href?: string;
    ariaLabel?: string;
    icon?: Icon;
}

export const headerData: HeaderProps = {
    links: [
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
    ],
    actions: [
        {
            text: "Download CV",
            href: "/static/resume.pdf",
            targetBlank: true,
        },
    ],
    isSticky: true,
    showToggleTheme: true,
    showRssFeed: false,
    position: "right",
};
export default function Header() {
    const { links, actions, isSticky, showToggleTheme, position } = headerData;

    const updatedIsDropdownOpen = links && links.map(() => false);

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
        <header
            className={`top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in md:bg-white/90 md:backdrop-blur-sm dark:bg-gray-900 dark:md:bg-gray-800/90 dark:md:backdrop-blur-sm ${
                isSticky ? "sticky" : "relative"
            }`}
            id="header"
        >
            <div className="mx-auto w-full max-w-full py-3 px-3 md:flex md:justify-between md:py-3.5 md:px-4">
                <div className="flex justify-between">
                    <a
                        className="flex items-center"
                        href="/"
                        onClick={() =>
                            isToggleMenuOpen
                                ? handleToggleMenuOnClick()
                                : setIsDropdownOpen(
                                    updatedIsDropdownOpen as boolean[],
                                )}
                    >
                        <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
                            Welcome
                        </span>
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
                    } w-auto overflow-y-auto md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`}
                    aria-label="Main navigation"
                >
                    <ul className="flex w-full flex-col pt-8 text-xl dark:text-white md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
                        {links &&
                            links.map(({ label, href, links }, index) => (
                                <li
                                    key={`item-link-${index}`}
                                    className={links?.length ? "dropdown" : ""}
                                >
                                    {links && links.length
                                        ? (
                                            <>
                                                <button
                                                    className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-gray-300"
                                                    onClick={() =>
                                                        handleDropdownOnClick(
                                                            index,
                                                        )}
                                                >
                                                    {label}
                                                    {" "}
                                                </button>
                                                <ul
                                                    className={`${
                                                        isDropdownOpen[index]
                                                            ? "block"
                                                            : "md:hidden"
                                                    } rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-gray-800/90`}
                                                >
                                                    {links.map((
                                                        {
                                                            label: label2,
                                                            href: href2,
                                                        },
                                                        index2,
                                                    ) => (
                                                        <li
                                                            key={`item-link-${index2}`}
                                                        >
                                                            <a
                                                                className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b md:hover:bg-gray-200 dark:md:hover:bg-gray-700"
                                                                href={href2 as string}
                                                                onClick={() =>
                                                                    isToggleMenuOpen
                                                                        ? handleToggleMenuOnClick()
                                                                        : handleCloseDropdownOnClick(
                                                                            index,
                                                                        )}
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
                                                className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-gray-300"
                                                href={href as string}
                                                onClick={() =>
                                                    isToggleMenuOpen
                                                        ? handleToggleMenuOnClick()
                                                        : handleDropdownOnClick(
                                                            index,
                                                        )}
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
                        {showToggleTheme && <ToggleDarkMode />}

                        {actions && actions.length > 0 && (
                            <div className="ml-4 rtl:ml-0 rtl:mr-4 flex w-max flex-wrap justify-end">
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
