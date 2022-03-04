import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { NextUIProvider } from "@nextui-org/react";
import { createGlobalStyle } from "styled-components";
import font from "~/assets/font/x12y16pxMaruMonica.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:'pixleFont';
    src: url(${font});
  }
  body {
    font-family: 'pixleFont', sans-serif;
    background-color:#003e80;
  }
`;

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
       <GlobalStyle />
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
