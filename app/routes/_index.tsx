import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Finexus Group" },
    { name: "description", content: "Welcome to Finexus Group" },
  ];
};

export default function Index() {
  return (
    <></>
  );
}

