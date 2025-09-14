import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail.tsx";
import IconRss from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/rss.tsx";
import IconSitemap from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/sitemap.tsx";
import IconBrandXFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-x-filled.tsx";

export default function Footer() {
  const menus = [
    {
      links: [
        {
          name: "RSS",
          href: "/rss.xml",
          icon: <IconRss className="w-5 h-5" />,
        },
        {
          name: "Sitemap",
          href: "/sitemap.xml",
          icon: <IconSitemap className="w-5 h-5" />,
        },
        {
          name: "Email",
          href: "mailto:example@example.com",
          icon: <IconMail className="w-5 h-5" />,
        },
        {
          name: "GitHub",
          href: "https://github.com/example",
          icon: <IconBrandGithub className="w-5 h-5" />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/example",
          icon: <IconBrandLinkedin className="w-5 h-5" />,
        },
        {
          name: "X",
          href: "https://x.com/example",
          icon: <IconBrandXFilled className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <div className="prose">
      <hr />

      <footer className="flex justify-between items-center m-2">
        <span className="font-semibold">
          Lorem ipsum dolor sit amet
        </span>

        <nav className="flex gap-2">
          {menus.map((item, index) => (
            <div key={index} className="flex gap-3">
              {item.links.map((child) => (
                <a
                  href={child.href}
                  key={child.name}
                  aria-label={child.name}
                  className="px-1"
                >
                  {child.icon}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </footer>
    </div>
