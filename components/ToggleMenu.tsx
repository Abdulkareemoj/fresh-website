import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/x.tsx";
import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/menu-2.tsx";
import { JSX } from "preact";

interface ToggleMenuProps {
    handleToggleMenuOnClick: JSX.MouseEventHandler<HTMLButtonElement>;
    isToggleMenuOpen: boolean;
}
const ToggleMenu = ({
    handleToggleMenuOnClick,
    isToggleMenuOpen,
}: ToggleMenuProps) => (
    <button
        type="button"
        className="ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
        aria-label="Toggle Menu"
        onClick={handleToggleMenuOnClick}
    >
        {isToggleMenuOpen
            ? <IconX className="h-6 w-6" />
            : <IconMenu2 className="h-6 w-6" />}
    </button>
);

export default ToggleMenu;
