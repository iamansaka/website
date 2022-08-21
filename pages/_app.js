import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/fonts.css";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Ansaka | Développeur web</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
