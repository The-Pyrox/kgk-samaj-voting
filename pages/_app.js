import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider , getSession} from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default MyApp;
