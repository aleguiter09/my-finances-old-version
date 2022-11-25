import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/heebo/600.css";
import "@fontsource/noto-sans-mono/300.css";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

/*const fonts = {
  heading: `'Heebo', sans-serif`,
  body: `'Noto Sans Mono', monospace`,
};*/

const theme = extendTheme({ config /*, fonts*/ });

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut  icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
