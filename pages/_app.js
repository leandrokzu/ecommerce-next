import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { StoreProdiver } from "../utils/Store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProdiver>
        <Component {...pageProps} />
      </StoreProdiver>
    </SessionProvider>
  );
}

export default MyApp;
