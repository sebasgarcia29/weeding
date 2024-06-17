import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Bartender',
      src: 'url(../styles/Bartender.ttf) format("ttf")',
    },
    {
      fontFamily: 'Dancing',
      src: 'url(../styles/Dancing.ttf) format("ttf")',
    },
    {
      fontFamily: 'England',
      src: 'url(../styles/England.ttf) format("ttf")',
    },
  ],
  body: {
    fontFamily: 'Rellydon, sans-serif',
  },
});


export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Component {...pageProps} />
  );
}
