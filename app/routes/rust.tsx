import React from "react";
import type { ProductProps } from "~/components/products/products";

import { ProductContents } from "~/components/products/productContents";
const github = "rustImg";
const cassette = "RustCassette";

export default function Index(): React.ReactElement {
  const details: string[] = [
    "Rustは主にいろんな物を自作しています。",
    "プログラミング言語やGitなどを自作してきました。"
  ];

  const products: ProductProps[] = [
    {
      title: "zip",
      content: { img: "", video: "Zip", url: github },
      details: ["zipファイルを作成してくれるCLIツールです。"],
      buttons: [
        { url: "https://github.com/garebareDA/zip", title: "GitHub", }
      ]
    },

    {
      title: "editor",
      content: { img: "", video: "Editor", url: github },
      details: ["termionを使って作成しました。", "自作のテキストエディタです。"],
      buttons: [
        { url: "https://github.com/garebareDA/editor", title: "GitHub", }
      ]
    },

    {
      title: "web_browser",
      content: { img: "", video: "WebBrowser", url: github },
      details: ["HTMLパーサーをから作成した、簡易ブラウザです。", "GUIにはGTKを使っています。"],
      buttons: [
        { url: "https://github.com/garebareDA/web_browser", title: "GitHub", }
      ]
    },

    {
      title: "koto",
      content: { img: "", video: "Koto", url: github },
      details: [
        "レクサー、パーサー、インタプリをフルスクラッチで作成した自作言語です。",
        "関数や構文、インポートなどの基礎的な部分が完成しています。"
      ],
      buttons: [
        { url: "https://github.com/garebareDA/koto", title: "GitHub", }
      ]
    },

    {
      title: "koto-wasm",
      content: { img: "", video: "KotoWasm", url: github },
      details: [
        "koto自作言語のWASM版です。ブラウザ内で動作します。"
      ],
      buttons: [
        { url: "https://github.com/garebareDA/koto/tree/wasm", title: "GitHub", },
        { url: "https://koto-e2f64.web.app/", title:"firebase"}
      ]
    },

    {
      title: "nes_emulator",
      content: { img: "NESEmulator", video: "", url: github },
      details: [
        "Nintendo Entertainment Systemのエミュレータです。",
        "CPU,PPUのエミュレートが動作します。",
        "現在は背景画像の出力のみ可能です。"
      ],
      buttons: [
        { url: "https://github.com/garebareDA/nes_emulator", title: "GitHub", }
      ],
    },

    {
      title: "umbrella",
      content: { img: "", video: "Umbrella", url: github },
      details: [
        "Inkwellを使って作成しました。",
        "LLVM IR を出力する自作言語のコンパイラです。"
      ],
      buttons: [
        {url: "https://github.com/garebareDA/umbrella", title: "GitHub", }
      ]
    },

    {
      title: "smallgit",
      content: { img: "", video: "SmallGit", url: github },
      details: [
        "自作のGitです。",
        "ステージング、コミットなどが実装されています。",
      ],
      buttons: [
        { url: "https://github.com/garebareDA/smallgit", title: "GitHub", }
      ]
    },

    {
      title:"g_shell",
      content: { img: "", video: "GShell", url: github },
      details: [
        "自作のShellです。",
        "多段パイプ、リダイレクトが実装されています。"
      ],
      buttons: [
        {url: "https://github.com/garebareDA/g_shell", title: "GitHub", }
      ]
    },

    {
      title: "rekoto",
      content: { img: "", video: "Rekoto", url: github },
      details: [
        "自作言語のインタプリタです。上記のkotoのインタプリタや構文を見直し改善したものです",
        "レクサーのみ流用されています。"
      ],
      buttons: [
        { url: "https://github.com/garebareDA/rekoto", title: "GitHub", }
      ]
    }
  ];

  return (
    <ProductContents products={products} cassette={{
      name: "Rust",
      src: cassette,
      detail: details,
    }} />
  );
}