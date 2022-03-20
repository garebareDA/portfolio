import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import { NextUIProvider } from "@nextui-org/react";
import { Container, Text, Card, Row, Spacer, Button } from "@nextui-org/react";
import React, { CSSProperties } from "react";
import backGround from "~/assets/images/backGround.svg";

export const meta: MetaFunction = () => {
  return { title: "Garebare's Portfolio" };
};

export const links: LinksFunction = () => {
  return [{ rel: "shortcut icon", href: "https://garebareda.github.io/portfolio/app/assets/images/icon/garebare-pixel.png" }];
};

const backgroundColor: CSSProperties = {
  backgroundImage: `url(${backGround})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  position: "absolute",
  width: "100vw",
  height: "100vh",
};

export default function App() {
  return (
    <html lang="ja" style={backgroundColor}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="garebare's portfolio" />
        <meta property="og:site_name" content="garebare's portfolio" />
        <meta property="og:url" content="https://www.garebare.net" />
        <meta property="og:description" content="ガレバレのポートフォリオです" />
        <meta property="og:image" content="https://garebareda.github.io/portfolio/app/assets/images/Thumbnail.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="garebare's portfolio" />
        <meta name="twitter:site" content="https://www.garebare.net" />
        <meta name="twitter:image" content="https://www.garebareda.github.io/portfolio/app/assets/images/Thumbnail.webp" />

        <Meta />
        <Links />
      </head>
      <body style={backgroundColor}>
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

export function CatchBoundary(): React.ReactElement {
  const caught = useCatch();
  return (
    <html lang="ja" style={backgroundColor}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="garebare's portfolio" />
        <meta property="og:site_name" content="garebare's portfolio" />
        <meta property="og:url" content="https://www.garebare.net" />
        <meta property="og:description" content="ガレバレのポートフォリオです" />
        <meta property="og:image" content="https://garebareda.github.io/portfolio/app/assets/images/Thumbnail.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="garebare's portfolio" />
        <meta name="twitter:site" content="https://www.garebare.net" />
        <meta name="twitter:image" content="https://www.garebareda.github.io/portfolio/app/assets/images/Thumbnail.webp" />

        <Meta />
        <Links />
        <title> {caught.status}  </title>
      </head>
      <body style={backgroundColor}>
        <NextUIProvider>
          <Container justify="center">
            <Spacer y={3} />
            <Row justify="center">
              <Card css={{
                mw: "50%",
              }}>
                <Row justify="center">
                  <Text size={40}>{caught.status}</Text>
                </Row>
                <Row justify="center">
                  <Text size={32}>{caught.statusText}</Text>
                </Row>
                <Spacer y={3} />
                <Row justify="center">
                  <Button onClick={() => {
                    location.href = "/";
                  }}>メインページに戻る</Button>
                </Row>
              </Card>
            </Row>
          </Container>
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
};
