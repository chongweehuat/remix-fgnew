import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Generic from "./components/Generic";

import "./tailwind.css";
import { json } from "@remix-run/node";

import { storyblokInit, apiPlugin, getStoryblokApi  } from "@storyblok/react";
import { isPreview } from "~/utils/isPreview";
import getData from "~/utils/getData";

import Header from "./components/Header";
import Footer from "./components/Footer";
import XTag from "./components/XTag";
import asset from "./blocks/asset";
import menu from "./blocks/menu";
import blocks from "./blocks/blocks";

const components = {asset,menu,blocks};

storyblokInit({
  accessToken: "9pCgOUNA8hs00g1hKG8V9wtt",
  use: [apiPlugin],
  components,
  bridge: isPreview(),
});

export const loader = async ({ params }:any) => {
  // console.log("root loader");
  let lang = params['*'] || "en";
  lang = lang.substr(0,2);

  const settings=await getData('settings',lang);
  const header=await getData('header',lang);
  const footer=await getData('footer',lang);


  return json({
    lang,
    settings,
    header,
    footer
  });
};


export function Layout({ children }: { children: React.ReactNode }) {
  const { lang, settings, header, footer }:any = useLoaderData();
  // console.log("Layout");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={settings.grid[0].favicon150.filename} sizes="32x32" type="image/png" />
        <link rel="icon" href={settings.grid[0].favicon300.filename} sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href={settings.grid[0].favicon300.filename.filename} sizes="180x180" />
        <Meta />
        <Links />
      </head>
      <body>
        <XTag data={settings.class} dataRef="setting_Class"> 
          <Header blok={{content:header,settings:settings.grid[0]} }/>
          {children}
          <ScrollRestoration />
          <Scripts />
          <Footer blok={{content:footer,settings:settings.grid[0]}} />
        </XTag>
      </body>
    </html>
  );
}

export default function App() {
  // console.log("App");
  return <Outlet />;
}
