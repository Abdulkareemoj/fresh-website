import { signal } from "@preact/signals";

const links = [
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Uses", href: "/uses" },
];

export default function MobileNav() {
    const isOpen = signal(false);

    const toggleMenu = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        isOpen.value = !isOpen.value;
    };

    return (
        <>
            <div class="flex justify-between px-10 pt-6 md:hidden">
                <a href="/" class="text-2xl font-bold">
                    ~
                </a>
                <div>
                    <button
                        onClick={toggleMenu}
                        className="fixed right-2 top-2.5 z-50 p-2 hover:bg-gray-200"
                        aria-expanded={isOpen.value}
                    >
                        {isOpen.value ? "Close" : "Menu"}
                    </button>
                </div>
                <nav
                    className={`fixed inset-0 z-20 ${
                        isOpen.value ? "block" : "hidden"
                    } bg-white p-5 md:hidden`}
                >
                    <ul className="space-y-4">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => isOpen.value = false}
                                    className="block text-black no-underline hover:underline"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
