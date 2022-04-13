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
    <Card css={
      {
        mw: "600px",
      }
    }>
      <Card.Header>
        <Text css={{
        }} size={24}>{title}</Text>
      </Card.Header>
      <Card.Body>
        < Contents img={content.img} video={content.video} url={content.url} />
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
    <a href={url} target="_blank">
      <Button>{title}</Button>
    </a>
  );
}

type ContentsProps = {
  img: string,
  video: string,
  url: string,
};

const contentImg: React.CSSProperties = {
  width: "700px",
  height: "100%",
};

const contentVideo: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const Contents: React.VFC<ContentsProps> = ({ img, video, url }: ContentsProps) => {
  return (
    <div>
      {img !== "" &&
        <Row justify="center">
          <img src={"https://garebareda.github.io/portfolio/app/assets/images/" + url + "/" + img + ".webp"} style={contentImg} />
        </Row>
      }
      {video !== "" &&
        <Row justify="center">
          <video
            controls
            muted
            loop
            autoPlay
            style={contentVideo}
          >
            <source src={"https://garebareda.github.io/portfolio/app/assets/images/" + url + "/" + video + ".webm"} type="video/webm"></source>
          </video>
        </Row>
      }
      {
        (img === "" && video === "") &&
        <Row justify="center" align="center">
          <Text h1 css={{}}>No Image</Text>
        </Row>
      }
    </div>
  );
};