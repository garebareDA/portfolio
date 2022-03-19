import { ProductProps } from "~/components/products/products";

const github = "otherImg";

export const details: string[] = [
  "その他ものです。"
];

export const products: ProductProps[] = [
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