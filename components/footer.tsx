export default function Footer() {
  const menus = [
    {
      links: [
        {
          name: "RSS",
          href: "/rss.xml", //  icon: <Rss />
        },
        {
          name: "Sitemap",
          href: "/sitemap-index.xml", //  icon: <Map />
        },
        {
          name: "Email",
          href: "mailto:abdulkareemojerinde@gmail.com",
          //   icon: <Mail />,
        },
        {
          name: "GitHub",
          href: "https://github.com/abdulkareemoj",
          //   icon: <Github />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/",
          //   icon: <Linkedin />,
        },
        {
          name: "Twitter",
          href: "https://x.com/abdulkareemoj",
          //   icon: <Twitter />,
        },
      ],
    },
  ];

  return (
    <div className="prose">
      <hr />

      <footer className="flex justify-between m-2">
        <span>WiZtEk</span>

        <div className="flex gap-4">
          {menus.map((item, index) => (
            <div key={index}>
              <ul className="mt-2">
                {item.links.map((child) => (
                  <li className="mt-2" key={child.name}>
                    <a href={child.href}>
                      {child.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
