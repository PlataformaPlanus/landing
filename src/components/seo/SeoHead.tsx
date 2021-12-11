import Head from "next/head";
import React, { PropsWithChildren } from "react";

type SeoHeadProps = PropsWithChildren<{
  title?: string;
  description?: string;
  image?: string;
  robots?: string;
}>;

export default function SeoHead(props: SeoHeadProps) {
  const { title, description, robots } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" name="title" content={title} key="title" />
      <meta name="robots" content={robots} />
      <meta property="og:locale" content="pt_br" />
      <meta
        property="og:description"
        name="description"
        content={description}
        key="description"
      />
      {props.children}
    </Head>
  );
}

SeoHead.defaultProps = {
  robots: "none", // TODO: robots are disabled during development
  title: "Plataforma Planus",
  description: "Solução inteligênte para gestão de equipes externa",
  keywords: "planus, plataforma planus, gestao de taregas",
};
