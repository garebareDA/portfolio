import React from "react";
import { ProductContents } from "~/components/products/productContents";
import { details, products } from "~/data/products/rust";

export default function Index(): React.ReactElement {
  return (
    <ProductContents products={products} cassette={{
      name: "Rust",
      src: "RustCassette",
      detail: details,
    }} />
  );
}