import React from "react";
import { ProductContents } from "~/components/products/productContents";
import { details, products } from "~/data/products/go";

export default function Index(): React.ReactElement {
  return (
    <ProductContents products={products} cassette={{
      name: "Go",
      detail: details,
      src: "GOCassette",
    }} />
  );
};