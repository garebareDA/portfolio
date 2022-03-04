import React from "react";
import { Container, Row, Text, Spacer, Link, Card } from "@nextui-org/react";
import icon from "~/assets/images/icon/garebare-pixel.png";

const Icon:React.CSSProperties ={
  borderRadius: "50%",
  width: "200px",
  height: "200px",
};

export const First: React.VFC = () => {
  return (
    <Card css={{
      mw: "600px",
    }}>
      <Row justify="center">
        <img src={icon} style={Icon}/>
      </Row>
      <Spacer y={1} />
      <Row justify="center">
        <Container justify="center">
          <Row justify="center">
            <Text size={16}>HandleName:ガレバレ</Text>
          </Row>
          <Row justify="center">
            <Text size={16}>Name:田中 大貴</Text>
          </Row>
        </Container>
      </Row>
    </Card>
  );
};