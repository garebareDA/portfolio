import React from 'react';
import { Container, Text, Row, Spacer } from '@nextui-org/react';

type Props = {
  name: string;
  detail: string[];
  src: string;
};

export const ProductCassette: React.VFC<Props> = ({ name, detail, src }: Props) => {
  return (
    <Container gap={3}>
      <Row justify='center'>
        <img src={src} />
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