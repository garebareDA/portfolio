import React from "react";
import { Container, Row, Spacer, Grid } from "@nextui-org/react";
import { ProductCassette } from "~/components/products/productCassette";
import { Products } from "~/components/products/products";
import type { ProductProps } from "~/components/products/products";
import type { CassetteProps } from "~/components/products/productCassette";

import background from "~/assets/images/backGround.svg";

type Props = {
  cassette: CassetteProps;
  products: ProductProps[];
}

export const ProductContents:React.VFC<Props> = ({
  cassette,
  products,
}) => {
  return(
    <Container>
    <Spacer y={3} />
    <Row>
      <ProductCassette {...cassette}></ProductCassette>
    </Row>
    <hr />
    <Spacer y={3} />
    <Grid.Container justify="center" gap={2}>
      {products.map((product, index) => {
        return (
          <Grid key={index}>
            <Products key={index} {...product}></Products>
          </Grid>
        );
      })}
    </Grid.Container>
    <Spacer y={3} />
  </Container>
  );
};