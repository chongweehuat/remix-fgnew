import { useLoaderData } from "@remix-run/react";
import getData from "../utils/getData";
import HomePage from "../components/HomePage";

export const loader = async ({ params, request }) => {
    let slug = params["*"] ?? "home";
    
    const data=await getData(slug,'en');
    const news=await getData('/news/2024','en');
    const newsSettings=await getData('/news/settings','en');
    
    return {data, news, newsSettings};
}

export default function Index() {
    const { data } = useLoaderData();
    // console.log('routes',data);
    return (
      <HomePage blok={{content: data}} />
    );
  }  