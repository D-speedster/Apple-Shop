import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import Header from "@/components/template/Home/Header"
import Footer from "@/components/template/Home/Footer"
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

    <Header></Header>
    <Component {...pageProps} />
    <br />  <br />  <br />  <br />  <br />  <br />
    <Footer></Footer>
  </>
}
