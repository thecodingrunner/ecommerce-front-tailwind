import PreloadSteveImages from "@/components/PreloadImages";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <PreloadSteveImages/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
