export type About = {
  date: string;
  title: string;
  subtitle: string;
};

const AboutList: About[] = [
  {
    date: "2013-2016",
    title: "川通中学校入学",
    subtitle: "ソフトテニスを始める(県大会出場)",
  },
  {
    date: "2016-2019",
    title: "大宮国際(大宮西)高校に在籍",
    subtitle: "ソフトテニス部部長、個人戦県大会ベスト32,さいたま市選抜、団体戦ベスト16",
  },
  {
    date: "2020",
    title: "宇都宮大学工学部入学",
    subtitle: "塾講師のアルバイト/コロナが本格的になる",
  },
  {
    date: "2022/02",
    title: "プログラミングを始める",
    subtitle: "コナンの映画をきっかけにプログラミングに興味を持つ",
  },
  {
    date: "2022/07",
    title: "長期インターンを始める",
    subtitle:
      "株式会社cloudQでインターンを始める",
  },
  {
    date: "2023/1",
    title: "請求自動化作成",
    subtitle: "googleAPIを用いて社内の給料計算を自動化",
  },
  {
    date: "2023/3-now",
    title: "自社開発が始まる",
    subtitle: "PLとして自社開発を始める",
  },
  {
    date: "2023/6~7",
    title: "reactに興味を持つ",
    subtitle:
      "reactに興味を持ちtrelloクローンをつくる",
  },
  {
    date: "2023/9",
    title: "受託開発を行う",
    subtitle: "3人で受託開発を行い、設計からあデプロイまで一通り行う",
  },
];

export default AboutList;