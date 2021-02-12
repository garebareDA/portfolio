import * as React from 'react';

import { Product, Contents } from '../components/products/product';
import LinkButtons from '../components/products/linkButton';
import { Text } from '../components/products/textStyled';
import { FontSize } from '../styleType/fontSize';

import RustCassette from '../../images/cassette/RustCassette.webp';
import Zip from '../../images/rustImg/Zip.webm';
import Editor from '../../images/rustImg/Editor.webm';
import WebBrowser from '../../images/rustImg/WebBrowser.webm';
import Koto from '../../images/rustImg/Koto.webm';
import KotoWasm from '../../images/rustImg/KotoWasm.webm';
import NesEmurator from '../../images/rustImg/NESEmurator.webp'
import Umbrella from '../../images/rustImg/Umbrella.webm';
import SmallGit from '../..//images/rustImg/SmallGit.webm';
import GShell from '../../images/rustImg/GShell.webm';


function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>Rustは主にいろんな物を自作しています。</Text>
      <Text size={props.size}>プログラミング言語やGitなどを自作してきました。</Text>
    </div>
  );
}

function Rust() {
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, SettitleFontSize] = React.useState("30px");

  return (
    <div>
      <Product fontSize={fontSize} titleFontSize={titleFontSize} setFontsize={setFontsize} setTitleFontSize={SettitleFontSize} details={Details} cassette={{ url: RustCassette }} />
      <Contents titleFontSize={{ size: titleFontSize }} title="zip" image={{ url: "" }} video={{ url: Zip }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/zip"]} text={["GitHub"]} />
      <Text size={fontSize}>zipファイルを作成してくれるCLIツールです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="editor" image={{ url: "" }} video={{ url: Editor }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/editor"]} text={["GitHub"]} />
      <Text size={fontSize}>termionを使って作成しました。自作のテキストエディタです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="web-browser" image={{ url: "" }} video={{ url: WebBrowser }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/web-browser"]} text={["GitHub"]} />
      <Text size={fontSize}>HTMLパーサーをから作成した、簡易ブラウザです。</Text>
      <Text size={fontSize}>GUIにはGTKを使っています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="koto" image={{ url: "" }} video={{ url: Koto }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/koto"]} text={["GitHub"]} />
      <Text size={fontSize}>レクサー、パーサー、インタプリをフルスクラッチで作成した自作言語です。</Text>
      <Text size={fontSize}>関数や構文、インポートなどの基礎的な部分が完成しています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="koto" image={{ url: "" }} video={{ url: KotoWasm }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/koto/tree/wasm", "https://koto-e2f64.firebaseapp.com/"]} text={["GitHub", "Firebase"]} />
      <Text size={fontSize}>上の自作言語のWASM版です。ブラウザ内で動作します。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="koto" image={{ url: "" }} video={{ url: KotoWasm }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/koto/tree/wasm"]} text={["GitHub"]} />
      <Text size={fontSize}>上の自作言語のWASM版です。ブラウザ内で動作します。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="nes_emulator" image={{ url: NesEmurator }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/nes_emulator"]} text={["GitHub"]} />
      <Text size={fontSize}>Nintendo Entertainment Systemのエミュレータです。</Text>
      <Text size={fontSize}>CPU,PPUのエミュレートができます。</Text>
      <Text size={fontSize}>現在は背景画像の出力のみ可能です。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="umbrella" image={{ url: "" }} video={{ url: Umbrella }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/umbrella"]} text={["GitHub"]} />
      <Text size={fontSize}>Inkwellを使って作成しました。LLVM IR を出力する自作言語のコンパイラです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="smallgit" image={{ url: "" }} video={{ url: SmallGit }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/smallgit"]} text={["GitHub"]} />
      <Text size={fontSize}>自作のGitです。ステージング、コミットなどが実装されています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="g_shell" image={{ url: "" }} video={{ url: GShell }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/g_shell"]} text={["GitHub"]} />
      <Text size={fontSize}>自作のShellです。コマンド実行、多段パイプ、リダイレクトが実装されています。</Text>
    </div>
  )
}

export default Rust;