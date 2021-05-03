import '../../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const title = "Matheus Pereira - Portifólio"
  const description = "Desenvolvedor web e mobile, formado em Informática para Internet e a procura da primeira oportunidade na área de desenvolvimento!";
  const previewImage = "site-preview-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600&display=swap" rel="stylesheet" />

        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="ogtitle" />
+       <meta property="og:description" content={title} key="ogdesc" />

        {/* Open Graph */}
        <meta property="og:url" content="https://matheus-pereira.vercel.app/" key="ogurl" />
        <meta property="og:image" content="https://i.ibb.co/cyQVGW9/site-preview-image.png" key="ogimage" />
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:locale" content="_ptBR"></meta>

      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
