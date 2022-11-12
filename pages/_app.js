import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Layout from '../component/Layout';

function MyApp({ Component, pageProps }) {
 
  return <>
    <Head>
      <title>Packers</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
