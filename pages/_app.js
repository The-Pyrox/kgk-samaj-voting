import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider, getSession } from "next-auth/react";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
