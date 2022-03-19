import React from "react";
import { Container, Spacer, Row, Text } from "@nextui-org/react";

import { First } from "~/components/index/first";
import { Profiles } from "~/components/index/profile";
import { profiles } from "~/data/profile/profile";
import { Products } from "~/components/index/product";
import { Form } from "~/components/mail/form";

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
      {
        profiles.map((p, i) => {
          return (
            <div key={i}>
              <Spacer y={2} />
              <Row justify="center">
                <Profiles name={p.title} list={p.profiles} />
              </Row>
            </div>
          );
        })
      }

      <Spacer y={4} />
      <Row justify="center">
        <Text size={40} css={{
          color: "white",
        }}>
          Products
        </Text>
      </Row>
      <Row justify="center">
        <Text size={16} css={{
          color: "white",
        }}>
          見たいカセットをクリックしてください
        </Text>
      </Row>
      <Spacer y={4} />
      <Products />

      <Spacer y={4} />
      <Row justify="center">
        <Text size={40} css={{
          color: "white",
        }}
        >
          Contact
        </Text>
      </Row>
      <Spacer y={1} />
      <Row justify="center">
        <Form />
      </Row>
      <Spacer y={1} />
    </Container>
  );
}
