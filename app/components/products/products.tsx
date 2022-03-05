import React from "react";
import { Text, Row, Card, Col, Button, Grid } from "@nextui-org/react";

export type ProductProps = {
  title: string;
  content: ContentsProps;
  details: string[];
  buttons: ButtonProps[];
};

export const Products: React.VFC<ProductProps> = ({ title, content, details, buttons }: ProductProps) => {
  return (
    <Card css={{
      mw: "600px",
    }}>
      <Card.Header>
        <Text size={24}>{title}</Text>
      </Card.Header>
      <Card.Body>
        < Contents img={content.img} video={content.video} />
      </Card.Body>
      <Card.Footer>
        <Grid.Container gap={1} justify="flex-end">
          <Grid xs={12}>
            <Row justify="center">
              <Col>
                {details.map((detail, index) => {
                  return <Text key={index}>{detail}</Text>;
                })}
              </Col>
            </Row>
          </Grid>

          <Grid>
            <Row>
              {buttons.map((button, index) => {
                return (
                  <Button.Group key={index}>
                    <Button>↑</Button>
                    <Buttons title={button.title} url={button.url} />
                  </Button.Group>
                );
              })}
            </Row>
          </Grid>
        </Grid.Container>
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
  width: "700px",
  height: "100%",
};

const Contents: React.VFC<ContentsProps> = ({ img, video }: ContentsProps) => {
  return (
    <div>
      {img !== "" &&
        <Row justify="center">
          <img src={img}  style={contentStyle}/>
        </Row>
      }
      {video !== "" &&
        <Row justify="center">
          <video
            controls
            muted
            loop
            autoPlay
            >
              <source src={video} type="video/webm"></source>
          </video>
        </Row>
      }
    </div>
  );
};