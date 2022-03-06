import React from "react";
import { Container, Spacer, Row, Text } from "@nextui-org/react";

import { First } from "~/components/index/first";
import { Education, Language, ParticipantEvent, Links } from "~/components/index/profile";
import { Products } from "~/components/index/product";

export default function Index(): React.ReactElement {
  return (
    <Container>
      <Spacer y={3} />
      <Row justify="center">
        <Text size={40} css={{
          color: "white",
        }}>Portfolio</Text>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <First />
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Links />
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Education />
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Language />
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <ParticipantEvent />
      </Row>
      <Spacer y={4} />
      <Row justify="center">
        <Text size={40} css={{
          color:"white",
        }}>
          Products
        </Text>
      </Row>
      <Row justify="center">
        <Text size={16} css={{
          color:"white",
        }}>
          見たいカセットをクリックしてください
        </Text>
      </Row>
      <Spacer y={4} />
      <Products />
      <Spacer y={5} />
    </Container>
  );
}
