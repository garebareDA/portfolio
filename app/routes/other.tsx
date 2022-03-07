import React from "react";
import { ProductContents } from "~/components/products/productContents";
import { details, products } from "~/data/products/other";

export default function Index(): React.ReactElement {
  return (
    <ProductContents products={products} cassette={{
        name: "Other",
        src: "OtherCassette",
        detail: details,
      }} />
  );
};