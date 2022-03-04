import React from "react";
import { Row, Text, Link, Card, Spacer } from "@nextui-org/react";

type Link = {
  href: string;
  name: string;
};

export const Links: React.VFC = () => {
  const link:Link[] = [
    { href: "https://github.com/garebareDA", name: "GitHub" },
    { href: "https://twitter.com/garebare521", name: "Twitter" },
    { href: "https://zenn.dev/garebare", name: "Zenn" },
    { href: "https://qiita.com/DA_garebare", name: "Qiita" },
    { href: "https://speakerdeck.com/garebareda", name: "Speaker Deck" },
    { href: "https://www.youtube.com/channel/UCswsDUmDhE96PxKj8hN4rcA", name: "Youtube" },
  ];

  return (
    <Card css={{
      mw: "600px",
    }}>
      <Text size={24}>Links</Text>
      <Spacer y={1}/>
      {link.map((l, i) => {
        return (
          <Row justify="center" key={i}>
            <Link href={l.href} target="blank">
              <Text size={16} color="primary">{l.name}</Text>
            </Link>
          </Row>
        );
      })}
      <Spacer y={1}/>
    </Card>
  );
};