import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Head>
        <link rel="shortcut  icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
