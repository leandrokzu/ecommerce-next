import "../styles/globals.css";
import { StoreProdiver } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProdiver>
      <Component {...pageProps} />
    </StoreProdiver>
  );
}

export default MyApp;
