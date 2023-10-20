export type Hobby = {
  imagePath: string;
  imageHeight: number;
  cardWidth: number;
  title: string;
  description: string;
};

const HobbyList: Hobby[] = [
  {
    imagePath: "tennis.jpg",
    imageHeight: 350,
    cardWidth: 350,
    title: "ソフトテニス",
    description: "中高ソフトテニス部。大学に入ってもクラブチームで活動中",
  },
  {
    imagePath: "conan.jpg",
    imageHeight: 200,
    cardWidth: 120,
    title: "コナン",
    description: "漫画を全巻持っていて毎日アニメを見ている。映画も映画も公開日に見に行くほどコナンファン",
  },
  {
    imagePath: "yamada.jpg",
    imageHeight: 350,
    cardWidth: 350,
    title: "プロ野球",
    description: "好きな選手は山田哲人。贔屓している球団はない",
  },
  {
    imagePath: "sauna.png",
    imageHeight: 350,
    cardWidth: 350,
    title: "サウナ",
    description: "サウナーとかではないため近所の温泉のサウナに入るくらい。ただ流すのが気持いいため週一ではサウナに行く",
  },
];

export default HobbyList;