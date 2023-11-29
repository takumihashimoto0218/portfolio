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
    imagePath: "my-portfolio.png",
    imageHeight: 450,
    cardWidth: 450,
    title: "portfolioサイト",
    description:
      "このサイトです。nextjsで初めての制作物",
    tips: ["Next.js", "TypeScript"],
  },
  {
    imagePath: "hanatane-collection.png",
    imageHeight: 450,
    cardWidth: 450,
    title: "hanatane-collection",
    description:
      "長期インターンで作成中のアプリ。何を作るかのハッカソン、上流仮定から自分で行いました。第一段階まで作成済み",
    tips: ["Ruby on Rails", "javascript",],
  },
  {
    imagePath: "navi_ai.png",
    imageHeight: 450,
    cardWidth: 450,
    title: "ainavi",
    description:
      "AI勉強をしている友達と作りました。AIの情報を共有できるサイトです",
    tips: ["Ruby on Rails"],
  },
];

export default WorkList;

