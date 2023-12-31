import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navigation";
import Footer from "./Footer";

export default function MetaContainer({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "FullStack Developer",
    description: ` Looking forward to solve your problems and  bring you more clarity to your online goals`,
    image: "/public/bruceMarsUnsplash.jpg",
    type: "website",
    date: new Date().toDateString(),
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta
          property="og:url"
          content={`https://www.paulknulst.de${router.asPath}`}
        /> */}
        {/* <link
          rel="canonical"
          href={`https://www.paulknulst.de${router.asPath}`}
        /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="DevSpectrum" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@paulknulst" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
