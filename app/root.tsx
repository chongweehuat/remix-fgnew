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

import Header from "./components/Header";
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

const getData = async(path:any,lang:any) =>{
  const {data} = await getStoryblokApi()
  .get(`cdn/stories/${path}`,{
    version: "draft",
    resolve_relations: "default",
    language: lang
  })
  .catch((e) => {
    console.log("e", e);
    return { data: null };
  });

  return data.story.content;
}

export const loader = async ({ params }:any) => {
  
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

export const links: LinksFunction = () => [
  
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { lang, settings, header }:any = useLoaderData();
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <XTag css="text-center" data={settings.class} dataRef="setting_Class">
          <Header blok={{content:header,settings:settings.grid[0]} }/>
          {children}
          <ScrollRestoration />
          <Scripts />
        </XTag>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
