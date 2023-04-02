import { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/mainpage.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
