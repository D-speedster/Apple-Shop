import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
export default function App({ Component, pageProps }) {

  return <>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

    <Component {...pageProps} />;
  </>
}
