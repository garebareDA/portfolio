import React from "react";
import { Card, Text, Row, Spacer, Link } from "@nextui-org/react";
import { Profile } from "~/data/profile/profile";

type Props = {
 name: string;
  list: Profile[];
};

export const Profiles: React.VFC<Props> = ({ name, list }: Props) => {
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
