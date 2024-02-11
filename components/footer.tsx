import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-instagram.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx";
import IconRss from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/rss.tsx";
import IconSitemap from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/sitemap.tsx";
import IconBrandXFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-x-filled.tsx";

export default function Footer() {
  const menus = [
    {
      links: [
        {
          name: "RSS",
          href: "/rss.xml",
          icon: <IconRss className="w-4 h-4" />,
        },
        {
          name: "Sitemap",
          href: "/sitemap-index.xml",
          icon: <IconSitemap className="w-4 h-4" />,
        },
        {
          name: "Email",
          href: "mailto:abdulkareemojerinde@gmail.com",
          icon: <IconMail className="w-4 h-4" />,
        },
        {
          name: "GitHub",
          href: "https://github.com/abdulkareemoj",
          icon: <IconBrandGithub className="w-4 h-4" />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/",
          icon: <IconBrandLinkedin className="w-4 h-4" />,
        },
        {
          name: "Twitter",
          href: "https://x.com/abdulkareemoj",
          icon: <IconBrandXFilled className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <div className="prose">
      <hr />

      <footer className="flex justify-between m-2">
        <span>WiZtEk</span>

        <div className="flex ">
          {menus.map((item, index) => (
            <div key={index}>
              <div className="flex mt-2">
                {item.links.map((child) => (
                  <div className="px-2" key={child.name}>
                    <a href={child.href}>
                      {child.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
