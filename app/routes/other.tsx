import React from "react";
import type { ProductProps } from "~/components/products/products";

import { ProductContents } from "~/components/products/productContents";

const github = "otherImg";
const cassette = "OtherCassette";

export default function Index(): React.ReactElement {
  const details: string[] = [
    "その他ものです。"
  ];

  const products: ProductProps[] = [
    {
      title: "todo-list",
      content: { img: "", video: "TodoList", url: github },
      details: [
        "Flutterで作成しました。",
        "TODOリストです。"
      ],
      buttons: [
        { url: "https://github.com/garebareDA/todo_list", title: "GitHub", }
      ]
    },
  ];

  return(
    <ProductContents products={products} cassette={
      {
        name: "Other",
        src: cassette,
        detail: details,
      }
    }/>
  );
};