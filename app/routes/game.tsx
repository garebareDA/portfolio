import React from "react";
import { ProductContents } from "~/components/products/productContents";
import { details, products } from "~/data/products/game";

export default function Index(): React.ReactElement {
  return (
    <ProductContents products={products} cassette={{
      name: "Game",
      src: "UnityCassette",
      detail: details,
    }} />
  );
};