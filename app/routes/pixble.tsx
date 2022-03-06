import { Container, Spacer, Row, Grid } from "@nextui-org/react";
import React from "react";
import { ProductCassette } from "~/components/products/productCassette";
import { Image } from "~/components/pixble/image";

export default function Index(): React.ReactElement {
  const details: string[] = [
    "ドット絵や3DCGなどの作品です。",
    "ドット絵はAceprite、3DCGはBlender、ボクセルアートはMagicaVoxelで作成しています。"
  ];

  const images: string[] = [
    "Crane",
    "Desk",
    "Garebare",
    "NIT",
    "Oni",
    "Piano",
    "WarWolf",
    "Airship",
    "bin",
    "Controler",
    "Dice",
    "Train",
    "ambllera",
    "animation",
    "bloom",
    "coffee",
    "lookup",
    "radio",
    "radio3",
    "radio5",
    "radio8",
    "riceball",
    "tree"
  ];


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