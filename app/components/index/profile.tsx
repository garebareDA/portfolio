import React from "react";
import { Card, Text, Row, Spacer, Link } from "@nextui-org/react";

type Props = {
 name: string;
  list: Link[];
};

type Link = {
  link?: string;
  title: string;
};

export const Profile: React.VFC<Props> = ({ name, list }: Props) => {
  return (
    <Card css={{ mw: "600px" }}>
      <Text size={24}>{name}</Text>
      <Spacer y={1} />
      {list.map((l, i) => {
        return (
          <Row key={i} justify="center">
            {
              l.link != null &&
              <Link href={l.link} target="blank">
                <Text size={16} color="primary">{l.title}</Text>
              </Link>
            }

            {
              l.link == null &&
              <Text size={16}>{l.title}</Text>
            }
          </Row>
        );
      })}
      <Spacer y={1} />
    </Card>
  );
};

export const Links: React.VFC = () => {
  const list: Link[] = [
    { link: "https://github.com/garebareDA", title: "GitHub" },
    { link: "https://twitter.com/garebare521", title: "Twitter" },
    { link: "https://zenn.dev/garebare", title: "Zenn" },
    { link: "https://qiita.com/DA_garebare", title: "Qiita" },
    { link: "https://speakerdeck.com/garebareda", title: "Speaker Deck" },
    { link: "https://www.youtube.com/channel/UCswsDUmDhE96PxKj8hN4rcA", title: "Youtube" },
  ];
  return (
    <Profile list={list} name={"Links"}></Profile>
  );
};

export const Education: React.VFC = () => {
  const list: Link[] = [
    { title: "2017-N高等学校" },
    { title: "2020-サイバー大学" }
  ];
  return (
    <Profile list={list} name={"Education"}></Profile>
  );
};

export const Language: React.VFC = () => {
  const language: Link[] = [
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
  return (
    <Profile list={language} name={"Programing Language"}></Profile>
  );
};

export const ParticipantEvent: React.VFC = () => {
  const event: Link[] = [
    { title: "NEW DEBUG(身内LT大会)", link: "https://caspur.wintu.dev/front/lives/56" },
    { title: "NEW DEBUG!! #2 (身内LT大会)", link: "https://caspur.wintu.dev/front/lives/104" },
    { title: "【技術?LT】NEW DEBUG!! #3.0 (身内LT大会)", link: "https://caspur.wintu.dev/front/lives/167" },
    { title: "DeNAオータムハッカソン2021" }
  ];
  return (
    <Profile list={event} name={"Participant Event"}></Profile>
  );
};