import React from 'react';
import { Container, Text, Row } from '@nextui-org/react';

type Props = {
  name: string;
  detail: string[];
  src: string;
};

export const ProductCassette: React.VFC<Props> = ({ name, detail, src }: Props) => {
  return (
    <Container>
      <Row>
        <img src={src} />
      </Row>
      <Row justify='center'>
        <Text>{name}</Text>
      </Row>
      {detail.map((text, index) => {
        <Row key={index}>
          <Text>{text}</Text>
        </Row>
      })}

    </Container>
  );
};