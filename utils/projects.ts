export interface Project {
  repo: string;
  link: string;
  description: string;
  image?: string;
}

export function getProjects() {
  return [
    {
      repo: "Lorem Ipsum Project",
      link: "https://example.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://placeholder.pics/svg/300x200",
    },
    {
      repo: "Dolor Sit Amet",
      link: "https://example.com",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placeholder.pics/svg/300x200",
    },
    {
      repo: "Consectetur Adipiscing",
      link: "https://example.com",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      image: "https://placeholder.pics/svg/300x200",
    },
    {
      repo: "Elit Eiusmod Tempor",
      link: "https://example.com",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: "https://placeholder.pics/svg/300x200",
    },
    {
      repo: "Labore Magna",
      link: "https://example.com",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      image: "https://placeholder.pics/svg/300x200",
    },
    {
      repo: "Aliqua Nostrud",
      link: "https://example.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://placeholder.pics/svg/300x200",
    },
    {
      repo: "Reprehenderit Voluptate",
      link: "https://example.com",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placeholder.pics/svg/300x200",
    },
    {
      repo: "Cillum Dolore",
      link: "https://example.com",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      image: "https://placeholder.pics/svg/300x200",
    },
  ];
}

export const projects = [
  {
    repo: "Lorem Ipsum Project",
    link: "https://example.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://placeholder.pics/svg/300x200",
  },
  {
    repo: "Dolor Sit Amet",
    link: "https://example.com",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placeholder.pics/svg/300x200",
  },
  {
    repo: "Consectetur Adipiscing",
    link: "https://example.com",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "https://placeholder.pics/svg/300x200",
  },
  {
    repo: "Elit Eiusmod Tempor",
    link: "https://example.com",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: "https://placeholder.pics/svg/300x200",
  },
  {
    repo: "Labore Magna",
    link: "https://example.com",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    image: "https://placeholder.pics/svg/300x200",
  },
];
