import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import { NextUIProvider } from "@nextui-org/react";
export const meta: MetaFunction = () => {
  return { title: "Garebare's Portfolio" };
};

export const links: LinksFunction = () => {
  return [{ rel: "shortcut icon", href: "https://garebareda.github.io/portfolio/app/assets/images/icon/garebare-pixel.png" }];
};

export default function App() {
  return (
    <html lang="ja" style={{ backgroundColor: "#003e80" }}>
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
      <body style={{ backgroundColor: "#003e80" }}>
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
