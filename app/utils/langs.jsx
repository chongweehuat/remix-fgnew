import { useLocation } from "@remix-run/react";

const languages = ["en","ms","zh","zh-cn","ta"]; // List of languages your app supports

const useCurrentLanguage = () => {
  const location = useLocation(); // Get info about the current webpage
  const currentPath = location.pathname; // Find out the current webpage address

  // Look for a language in the webpage address. If not found, use English.
  const currentLanguage =
    languages.find((lang) => currentPath.startsWith(`/${lang}`)) || "en";

  // Give back the webpage address and the language we found
  return { currentPath, currentLanguage };
};

const getCurrentLanguage = (request) => {
  let url = new URL(request.url);
  let pathParts = url.pathname.split("/");
  let language = pathParts[1];

  if (!languages.includes(language)) {
    language = "en";
  }
  if(language==="zh")language="zh-cn";

  return language;
}

const getTransLink = (slug, language) => {
  if (slug === "/") {
    return language === "en" ? slug : `/${language}`;
  }
  return language === "en" ? slug : `/${language}${slug}`;
}

export { getTransLink, languages, useCurrentLanguage, getCurrentLanguage };
