import { Button } from "../components/Button.tsx";
import IconSunFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/sun-filled.tsx";
import IconMoonFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/moon-filled.tsx";
import { useState } from "preact/hooks";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("light");
  //
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    // };

    return (
      <Button className="w-9 px-0" onClick={toggleTheme}>
        {theme === "dark"
          ? (
            <IconSunFilled className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          )
          : (
            <IconMoonFilled className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  };
}
