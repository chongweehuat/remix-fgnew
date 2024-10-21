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

import Menus from "./components/Menus";

import asset from "./blocks/asset";
import menu from "./blocks/menu";

const components = {asset,menu};

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

  const header=await getData('header',lang);
  const footer=await getData('footer',lang);


  return json({
    lang,
    header,
    footer
  });
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { lang, header }:any = useLoaderData();
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <Generic content={header} customSectionMap={{Menus}} />
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
