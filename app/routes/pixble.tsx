import { Container, Spacer, Row, Grid } from "@nextui-org/react";
import React from "react";
import { ProductCassette } from "~/components/products/productCassette";
import { Image } from "~/components/pixble/image";
import { images, details } from "~/data/products/pixble";

export default function Index(): React.ReactElement {
  return (
    <Container justify="center">
      <Spacer y={3} />
      <Row justify="center">
        <ProductCassette name="Pix/Ble/Magi" src="PIXBLECassette" detail={details}></ProductCassette>
      </Row>
      <hr />
      <Spacer y={3} />
      <Grid.Container justify="center" gap={2}>
        {images.map((image, index) => {
          return (
            <Image src={image} key={index}></Image>
          );
        })}
      </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
};