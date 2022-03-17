import React from "react";
import { Container, Row, Text, Spacer, Card } from "@nextui-org/react";
import { name, handleName } from "~/data/profile/profile";
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
      bgBlur:"#ffffff"
    }}>
      <Row justify="center">
        <img src={icon} style={Icon}/>
      </Row>
      <Spacer y={1} />
      <Row justify="center">
        <Container justify="center">
          <Row justify="center">
            <Text size={16} css={{
              color: "white",
            }}>HandleName:{handleName}</Text>
          </Row>
          <Row justify="center">
            <Text css={{
              color: "white",
            }} size={16}>Name:{name}</Text>
          </Row>
        </Container>
      </Row>
    </Card>
  );
};