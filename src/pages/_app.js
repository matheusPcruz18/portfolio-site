import '../../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const title = "Matheus Pereira - Portifólio"
  const description = "Desenvolvedor web e mobile, a procura da primeira oportunidade na área de desenvolvimento!";

  return (
    <>
      <Head>

          <title>Matheus Pereira - Portifólio</title >
          <meta name="title" content="Matheus Pereira - Portifólio" />
          <meta name="description" content="Desenvolvedor web e mobile, a procura da primeira oportunidade na área de desenvolvimento!" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://matheus-pereira.vercel.app/" />
          <meta property="og:title" content="Matheus Pereira - Portifólio" />
          <meta property="og:description" content="Desenvolvedor web e mobile, a procura da primeira oportunidade na área de desenvolvimento!" />
          <meta property="og:image" content="https://i.ibb.co/cyQVGW9/site-preview-image.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://matheus-pereira.vercel.app/" />
          <meta property="twitter:title" content="Matheus Pereira - Portifólio" />
          <meta property="twitter:description" content="Desenvolvedor web e mobile, a procura da primeira oportunidade na área de desenvolvimento!" />
          <meta property="twitter:image" content="https://i.ibb.co/cyQVGW9/site-preview-image.png" />


      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
