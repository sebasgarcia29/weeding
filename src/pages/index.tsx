import React from "react";
import Head from "next/head";
import localFont from 'next/font/local'
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import { FloatingButton } from "@/components/FloatingButton";
import { db } from "@/config/firebaseConfig";
require('dotenv').config();

const Title = dynamic(() => import("@/components/FirstSection/FirstSection"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Counter = dynamic(() => import("@/components/Counter"), { ssr: false });
const Links = dynamic(() => import("@/components/Links"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Share = dynamic(() => import("@/components/Share"), { ssr: false });


const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

const bartenderFont = localFont({ src: '../styles/Bartender.ttf' });
const dancingFont = localFont({ src: '../styles/Dancing.ttf' });
const englandFont = localFont({ src: '../styles/England.ttf' });

export default function Home() {

  db;

  React.useEffect(() => {
    const disablePinchZoom = () => {
      document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
      });
    };

    disablePinchZoom();

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('gesturestart', disablePinchZoom);
    };
  }, []);


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:type" content="website" />
        <meta content="Johana❤Sebastian" name="Title" />
        <meta
          content=""
          name="Description"
        />
        <meta content="" name="Keyword" />
        <meta property="og:title" content="Johana❤Sebastian" />
        <meta
          property="og:description"
          content=""
        />
        <meta
          property="og:url"
          content=""
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Johana❤Sebastian</title>
        <link rel="icon" href="./assets/couple.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

      </Head>
      <main>
        <Title data={JsonData} className={dancingFont.className} />
        <Gretting data={JsonData} className={dancingFont.className} />
        <Counter data={JsonData} className={bartenderFont.className} />
        <Links data={JsonData} className={dancingFont.className} />
        <Gallery data={JsonData} className={dancingFont.className} />
        <Share data={JsonData} className={dancingFont.className} />
        <Footer className={dancingFont.className}>{'Eres una persona muy importante para nosotros ❤️'}</Footer>
        <FloatingButton />
      </main>

    </>
  );
}
