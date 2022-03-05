import React from "react";
import { Container, Text, Row, Card, Col, Button } from "@nextui-org/react";

export type ProductProps = {
  title: string;
  content: ContentsProps;
  details: string[];
  buttons: ButtonProps[];
};

export const Products: React.VFC<ProductProps> = ({ title, content, details, buttons }: ProductProps) => {
  return (
    <Card css={{
      mw: "700px",
    }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 0, bgColor: "white" }}>
        <Text size={24}>{title}</Text>
      </Card.Header>
      <Card.Body>
        < Contents img={content.img} video={content.video}/>
      </Card.Body>
      <Card.Footer>
        <Row justify="center">
          <Col>
            {details.map((detail, index) => {
              return <Text key={index}>{detail}</Text>;
            })}
          </Col>
        </Row>
        <Row justify="flex-end">
          {buttons.map((button, index) => {
            return (
              <Button.Group key={index}>
                <Button>↑</Button>
                <Buttons title={button.title} url={button.url} />
              </Button.Group>
            );
          })}
        </Row>
      </Card.Footer>
    </Card>
  );
};

type ButtonProps = {
  title: string;
  url: string;
}

const Buttons: React.VFC<ButtonProps> = ({ title, url }: ButtonProps) => {
  return (
    <Button onClick={() => {
      window.open(url, '_blank');
    }}>{title}</Button>
  );
}

type ContentsProps = {
  img: string,
  video: string,
};

const contentStyle: React.CSSProperties = {
  width: "800px",
  height: "auto",
};

const Contents: React.VFC<ContentsProps> = ({ img, video }: ContentsProps) => {
  return (
    <div>
      {img !== "" &&
        <img src={img} />
      }
      {video !== "" &&
        <Row justify="center">
          <video src={video} controls style={contentStyle} />
        </Row>
      }
    </div>

  );
};