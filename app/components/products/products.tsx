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
    <Card>
      <Card.Header>
        <Text>{title}</Text>
      </Card.Header>
      <Card.Body>
        <Contents img={content.img} video={content.video} />
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            {details.map((detail, index) => {
              return <Text key={index}>{detail}</Text>;
            })}
          </Col>
        </Row>
        <Row>
            {buttons.map((button, index) => {
              return(
                <Buttons key={index} title={button.title} url={button.url} />
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

const Buttons:React.VFC<ButtonProps> = ({title, url}:ButtonProps) => {
  return (
    <Button onChange={() => {
      window.open(url, '_blank');
    }}>{title}</Button>
  );
}

type ContentsProps = {
  img: string,
  video: string,
};

const Contents: React.VFC<ContentsProps> = ({ img, video }: ContentsProps) => {
  return (
    <Container>
      {img !== "" &&
        <Row justify="center">
          <Card.Image src={img} />
        </Row>
      }
      {video !== "" &&
        <Row justify="center">
          <video src={video} controls />
        </Row>
      }
    </Container>
  );
};