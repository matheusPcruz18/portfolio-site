import '../../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matheus Pereira</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600&display=swap" rel="stylesheet" />  
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
