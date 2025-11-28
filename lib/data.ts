export const projects = [
  {
    slug: "BlockTrackEd",
    title: "BlockTrackEd",
    description:
      "A Decentralized scholarship tracking web app based on Ethereum blockchain network.",
    tech: ["React.js", "Tailwind CSS", "Ether.js", "Solidity"],
    image: "/blocktracked.png",
    link: "https://github.com/subhamsahoo2024/BlockTrackEd",
  },
  {
    slug: "mini-game-website",
    title: "Mini Games Website ",
    description:
      "A web app to to play classic games like Rock-Paper-Scissors, Tic-Tac-Toe, etc.",
    tech: ["HTML", "CSS", "Javascript", "Express.js"],
    image: "/mini-game.png",
    link: "https://github.com/subhamsahoo2024/Mini-game-website",
  },
  {
    slug: "think-book",
    title: "Think-Book",
    description:
      "A lightweight React application for capturing, organizing, and revisiting ideas. It helps you quickly note down thoughts, organize them into notebooks and tags, and search or filter entries to support focused thinking and learning.",
    tech: ["MongoDB", "Express.js", "React.js", "Tailwind CSS"],
    image: "/think-book.png",
    link: "https://github.com/subhamsahoo2024/Think-Book",
  },
];

export const getProject = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};
