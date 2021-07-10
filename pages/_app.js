import Head from 'next/head';

import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>CoPro</title>
        <meta
          name="description"
          content="Connecting projects with developers"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
