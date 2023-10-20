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
    imageHeight: 350,
    cardWidth: 350,
    title: "portfolioサイト",
    description:
      "このサイトです。nextjsで初めての制作物",
    tips: ["Next.js", "TypeScript"],
  },
  {
    imagePath: "collection.png",
    imageHeight: 350,
    cardWidth: 350,
    title: "hanatane-collection",
    description:
      "長期インターンで作成中のアプリ。何を作るかのハッカソン、上流仮定から自分で行いました。第一段階まで作成済み",
    tips: ["Ruby on Rails", "javascript",],
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
    imagePath: "Ainavi.png",
    imageHeight: 350,
    cardWidth: 350,
    title: "ainavi",
    description:
      "AI勉強をしている友達と作りました。の情報を情報を共有情報を共有できるサイトです",
    tips: ["Ruby on Rails"],
  },
];

export default WorkList;

