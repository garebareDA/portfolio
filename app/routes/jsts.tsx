import React from "react";
import { Container, Row, Text } from "@nextui-org/react";
import { ProductCassette } from "~/components/products/ProductCassette";
import cassette from "~/assets/images/cassette/JSTSCassette.png";
import { Products } from "~/components/products/Products";
import type { ProductProps } from "~/components/products/Products";

export function Index():React.ReactElement {
  const details:string[] = [
    "ElectronやThree.js,Firebaseなどを使い作成したものです。",
    "フレームワークはVue.jsやReactをよく使います",
    "こちらは静的ページアプリのみです。",
  ];

  const products:ProductProps[] = [
    {
      title: "JSTS",
      content: {
        img: cassette,
        video: "",
      },
      details: details,
      buttons: [],
    },
  ];

  return (
    <Container>
      <Row>
        <ProductCassette name={"js/ts"} src={cassette} detail={details}></ProductCassette>
      </Row>
      <Row>

      </Row>
    </Container>
  );
};