export type Work = {
  imagePath: string;
  imageHeight: number;
  cardWidth: number;
  title: string;
  description: string;
  tips: string[];
};

const WorkList: Work[] = [
  {
    imagePath: "portfolio.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "portfolioサイト",
    description:
      "このサイトです。\nDBをsupabaseに格納したい \n https://github.com/yusei53/yusei53-portfolio",
    tips: ["Next.js", "TypeScript"],
  },
  {
    imagePath: "asap.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "trello",
    description:
      "trello",
    tips: ["React"],
  },
  {
    imagePath: "zundamon.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "atorie",
    description:
      "atorie",
    tips: ["React", "flask", "ChatGPT API"],
  },
  {
    imagePath: "typro.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "ainavi",
    description:
      "ainavi",
    tips: ["React", "TypeScript"],
  },
];

export default WorkList;

