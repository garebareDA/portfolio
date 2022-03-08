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
  { title: "Unity C#" }
];

const events: Profile[] = [
  { title: "NEW DEBUG(身内LT大会)", link: "https://caspur.wintu.dev/front/lives/56" },
  { title: "NEW DEBUG!! #2 (身内LT大会)", link: "https://caspur.wintu.dev/front/lives/104" },
  { title: "【技術?LT】NEW DEBUG!! #3.0 (身内LT大会)", link: "https://caspur.wintu.dev/front/lives/167" },
  { title: "DeNAオータムハッカソン2021" }
];

export const profiles: Profiles[] = [
  { title: "Links", profiles: links },
  { title: "Education", profiles: educations },
  { title: "Programing Languages", profiles: language },
  { title: "Participant Event", profiles: events }
];