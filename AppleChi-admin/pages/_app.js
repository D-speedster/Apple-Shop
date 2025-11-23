
import HeaderAdmin from "@/components/template/HeaderAdmin";

import SideBar from "@/components/template/SideBar";
import "@/styles/globals.css";

import 'bootstrap/dist/css/bootstrap.css'
export default function App({ Component, pageProps }) {
  return <div class="container-fluid">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"></script>
    <div className="main-content" >
      <div className="row justify-content-between">
   
          <SideBar></SideBar>
       
        <div className="col-lg-10 content">
          <HeaderAdmin />

          <div className="ms-lg-5">
            <Component {...pageProps} ></Component>
          </div>

        </div>


      </div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
  </div>

}
