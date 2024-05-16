import React from "react";
import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import { FloatingButton } from "@/components/FloatingButton";
import firebase from "firebase/app"; // Import firebase

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Counter = dynamic(() => import("@/components/Counter"), { ssr: false });
const Links = dynamic(() => import("@/components/Links"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });


const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

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

export default function Home() {

  const firebaseConfig = {
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_UCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };

  firebase?.initializeApp(firebaseConfig);


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

      </Head>
      <main className={`${notoSansKR.className}`}>
        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <Counter data={JsonData} />
        <Links data={JsonData} />
        <Gallery />
        <Footer>{'Eres una persona muy importante para nosotros ❤️'}</Footer>
        {/* Floating button */}
        <FloatingButton />
      </main>

    </>
  );
}
