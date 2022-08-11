import { useLoaderData } from "@remix-run/react";
import * as React from "react";

export function loader() {
  const rand = Math.random();
  const test = "This is a test: " + Math.floor(Math.random() * 100);
  return [rand, test];
}

export default function Index() {
  let [yo, test] = useLoaderData();
  return (
    <h1>
      {yo} - {test}
    </h1>
  );
}
