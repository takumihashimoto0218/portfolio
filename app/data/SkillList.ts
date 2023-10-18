export type Skill = {
  imageHeight: number;
  cardWidth: number;
  imagePath: string;
  title: string;
  sourcePath: string;
};

export const SkillList: Skill[] = [
  {
    imagePath: "html.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "html",
    sourcePath: "https://developer.mozilla.org/ja/docs/Web/HTML",
  },
  {
    imagePath: "css.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "css",
    sourcePath:
      "https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/CSS_basics",
  },
  {
    imagePath: "ruby.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "ruby",
    sourcePath:
      "https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/CSS_basics",
  },
  {
    imagePath: "ruby on rails.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "ruby on rails",
    sourcePath: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
  },
  {
    imagePath: "react.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "react",
    sourcePath: "https://react.dev/",
  },
  {
    imagePath: "next.js.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "next.js",
    sourcePath: "https://nextjs.org/",
  },
  {
    imagePath: "typescript.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "typescript",
    sourcePath: "https://www.typescriptlang.org/",
  },
  {
    imagePath: "python.png",
    imageHeight: 225,
    cardWidth: 350,
    title: "python",
    sourcePath: "https://www.python.org/",
  },
];