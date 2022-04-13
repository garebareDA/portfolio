import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";
import { Container, Text, Card, Row, Spacer, Button } from "@nextui-org/react";
import React, { CSSProperties } from "react";
import backGround from "~/assets/images/backGround.svg";

export const meta: MetaFunction = () => {
  return {
    title: "Garebare's Portfolio",
    charset: "utf-8",
    "viewport": "width=device-width, initial-scale=1",
    "og:title": "Garebare's Portfolio",
    "og:description": "Garebare's Portfolio",
    "og:url": "https://www.garebare.net",
    "og:image": "https://garebareda.github.io/portfolio/app/assets/images/Thumbnail.webp",
    "twitter:card": "summary_large_image",
  };
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

export default function App(): React.ReactElement {
  return (
    <html lang="ja" style={backgroundColor}>
      <head>
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
