import React from "react";
import { ProductContents } from "~/components/products/productContents";
import { details, products } from "~/data/products/jsts";

export default function Index(): React.ReactElement {
  return (
    <ProductContents products={products} cassette={{
      name: "js/ts",
      src: "JSTSCassette",
      detail: details,
    }} />
  );
};