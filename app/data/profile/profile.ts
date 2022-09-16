export type Profile = {
  link?: string;
  title: string;
};

type Profiles = {
  title: string;
  profiles: Profile[];
}

export const name: string = "田中 大貴";
export const handleName: string = "ガレバレ";

const links: Profile[] = [
  { link: "https://github.com/garebareDA", title: "GitHub" },
  { link: "https://twitter.com/garebare521", title: "Twitter" },
  { link: "https://zenn.dev/garebare", title: "Zenn" },
  { link: "https://qiita.com/DA_garebare", title: "Qiita" },
  { link: "https://speakerdeck.com/garebareda", title: "Speaker Deck" },
  { link: "https://www.youtube.com/channel/UCswsDUmDhE96PxKj8hN4rcA", title: "Youtube" },
];

const educations: Profile[] = [
  { title: "2017-N高等学校" },
  { title: "2020-サイバー大学" }
];

const language: Profile[] = [
  { title: "HTML" },
  { title: "CSS" },
  { title: "JavaScript" },
  { title: "TypeScript" },
  { title: "Node.js" },
  { title: "Python" },
  { title: "Go" },
  { title: "Rust" },
  { title: "Unity C#" },
  { title: "Haxe" },
];

const events: Profile[] = [
  { title: " NEW DEBUG(身内LT大会) 2020年5月16日", link: "https://caspur.wintu.dev/front/lives/56" },
  { title: "NEW DEBUG!! #2 (身内LT大会) 2020年8月1日", link: "https://caspur.wintu.dev/front/lives/104" },
  { title: "【技術?LT】NEW DEBUG!! #3.0 (身内LT大会) 2021年3月20日", link: "https://caspur.wintu.dev/front/lives/167" },
  {title: "NEW DEBUG!!!!身内LT-WWDC- 2022年6月17日", link: "https://caspur.wintu.dev/front/lives/264"},
  { title: "DeNAオータムハッカソン2021 2021年9月16日~19日" },
  {title: "株式会社Re-ere 長期インターンシップ 2022年5月1日~現在"},
  {title: "株式会社バイセルテクノロジーズ 短期インターンシップ 2022年8月22日~26日"},
  {title: "ヘイ株式会社 短期インターンシップ 2022年9月6日~16日"},
  {title: "スマートキャンプ株式会社 長期インターンシップ参加予定"}
];

export const profiles: Profiles[] = [
  { title: "Links", profiles: links },
  { title: "Education", profiles: educations },
  { title: "Programing Languages", profiles: language },
  { title: "Participant Event", profiles: events }
];