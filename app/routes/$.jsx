import { useLoaderData } from "@remix-run/react";
import getData from "../utils/getData";
import HomePage from "../components/HomePage";
import Generic from "../components/Generic";

export const loader = async ({ params, request }) => {
    let slug = params["*"] ?? "home";
    
    const data=await getData(slug,'en');
    switch (slug) {
      case 'home':
        const newsHighlights=await getData('/news/highlights','en'); 
        data.sections.forEach(item => {
          if (item.name === "highlights") {
            item.newsHighlights = newsHighlights;
          }
        }); 
    }
    return {slug,data};
}

export default function Index() {
    const { slug,data } = useLoaderData();
    // console.log(slug,data);
    switch (slug) {
      case 'home':
        return <HomePage blok={{content:data}} />;
      default:
        return <Generic content={{content:data}} />;
    }
    
  }  