// components/ToggleDarkMode.tsx
import { useEffect, useState } from "preact/hooks";
import IconMoonFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/moon-filled.tsx";
import IconSunFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/sun-filled.tsx";

const ToggleDarkMode = () => {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            const prefersDark =
                window.matchMedia("(prefers-color-scheme: dark)").matches;
            const defaultTheme = prefersDark ? "dark" : "light";
            setTheme(defaultTheme);
            document.documentElement.classList.add(defaultTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="inline-block rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            aria-label="Toggle Dark Mode"
        >
            {theme === "dark"
                ? <IconSunFilled className="h-5 w-5" />
                : <IconMoonFilled className="h-5 w-5" />}
        </button>
    );
};

export default ToggleDarkMode;
