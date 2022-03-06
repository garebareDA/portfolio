import React from 'react';
import { Container, Text, Row, Spacer } from '@nextui-org/react';

export type CassetteProps = {
  name: string;
  detail: string[];
  src: string;
};

export const ProductCassette: React.VFC<CassetteProps> = ({ name, detail, src }: CassetteProps) => {
  return (
    <Container gap={3}>
      <Row justify='center'>
        <img src={"https://garebareda.github.io/portfolio/app/assets/images/cassette/" +  src + ".webp"} />
      </Row>
      <Spacer y={2}></Spacer>
      <Row justify='center'>
        <Text size={32} css={{
          color: 'white',
        }}>{name}</Text>
      </Row>
      {detail.map((text, index) => {
        return (
          <Row key={index} justify='center'>
            <Text css={{
              color: 'white',
            }}>{text}</Text>
          </Row>
        );
      })}
    </Container>
  );
};