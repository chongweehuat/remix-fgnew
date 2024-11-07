import { useLoaderData } from "@remix-run/react";
import getData from "../utils/getData";
import HomePage from "../components/HomePage";
import Generic from "../components/Generic";
import { languages, getCurrentLanguage } from "../utils/langs";

export const loader = async ({ params, request }) => {

  let slug = params["*"] ?? "home";


  // Extract the language from the URL
  let url = new URL(request.url);
  let pathParts = url.pathname.split("/");
  const language = getCurrentLanguage(request);

  // If the language is not one of the supported languages, it's 'en' and the first part of the URL is part of the slug

  if (languages.includes(language)) {
    // Remove the language part from the slug
    if (pathParts[0] === "") {
      pathParts.shift(); // Remove the first empty string from the array
    }
    pathParts.shift(); // Remove the language part from the array
  }

  slug = pathParts.join("/") || slug;
  slug = slug === "/" || slug === "/home" || slug === language ? "home" : slug;

  // console.log("route loader language slug:",language,slug);

  const data = await getData(slug, language);
  switch (slug) {
    case 'home':
      const newsHighlights = await getData('/news/highlights', language);
      data.sections.forEach(item => {
        if (item.name === "highlights") {
          item.newsHighlights = newsHighlights;
        }
      });
  }
  return { language, slug, data };
}

export default function Index() {
  const { slug, data } = useLoaderData();
  
  switch (slug) {
    case 'home':
      return <HomePage blok={{ content: data }} />;
    default:
      return <Generic content={{ content: data }} />;
  }

}  