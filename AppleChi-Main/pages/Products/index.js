import React from 'react'

export default function index() {
  return (
    <div className="container">
      <header>
        <nav className="navbar fixed-top navbar-expand-lg bg-white  navbar-light  px-0 py-3  ">
          <div className="container-xl">
            <a className="navbar-brand" href="#">
              <img
                src="..//img/Capture-removebg-preview.png"
                width={120}
                className="h-8"
                alt="..."
              />
            </a>
            <div className="mr-5 d-lg-block d-md-block d-none ">
              <input
                type="search "
                placeholder="جستجو در آگهی ها "
                style={{ width: 600, marginRight: 70 }}
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-lg-auto"></div>
              <div className="navbar-nav ms-lg-2">
                <button
                  href="#"
                  className="btn  w-full w-lg-auto login-button "
                  style={{ padding: 14 }}
                >
                  ورود به حساب
                </button>
              </div>
              <div className="navbar-nav pe-3">
                <button
                  href="#"
                  className="btn   w-full w-lg-auto order-button"
                  style={{ padding: 14 }}
                >
                  ثبت آگهی
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="Information-Device">
        <div className="row justify-content-between mt-3">
          <div className="col-lg-8 Information-Device-Pics me-2 ">
            <div className="row mt-3">
              <div className="col-lg-4">
                <img
                  style={{ cursor: "pointer" }}
                  src="..//img/apple7-removebg-preview.png"
                  className="img-fluid"
                />
                <br />
                <div className="row">
                  {/* <img style="cursor: pointer" src="..//img/apple7-removebg-preview.png">
                        <img style="cursor: pointer" src="..//img/apple7-removebg-preview.png">
                        <img style="cursor: pointer" src="..//img/apple7-removebg-preview.png">
                        <img style="cursor: pointer" src="..//img/apple7-removebg-preview.png"> */}
                </div>
              </div>
              <div className="col-lg-6 title">
                <h1>موبایل iPhone 7 | آیفون 7 کارکرده </h1>
                <small>Apple iPhone 7 smartphone 128G </small>
                <h6>نظرات : 24 نفر</h6>
                <br />
                <ul>
                  <li>رام : 4 گیگ </li>
                  <li> حافظه : 128 گیگ </li>
                  <li> صفحه نمایش : 5.4اینج </li>
                  <li>سیستم عامل : IOS </li>
                  <li>دوربین : 40 مگاپیکسل </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div className="d-flex mt-3">
                  <i className="bi bi-share ms-3" />
                  <i className="bi bi-suit-heart ms-3" />
                  <i className="bi bi-grip-horizontal" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 Information-Device-Price">
            <i style={{ color: "goldenrod" }} className="bi bi-person-circle" />
            <span>فروشنده</span>
            <br />
            <hr />
            <i style={{ color: "green" }} className="bi bi-patch-check" />
            گارانتی : سلامت و تست 7 روزه
            <hr />
            <i className="bi bi-truck" style={{ color: "red" }} />
            ارسال رایگان در تهران
            <hr />
            <div className="area-price">
              <del>
                <spa className="offer">12,440,000 تومان</spa>
              </del>
              <br />
              <span>12,000,000 تومان</span>
            </div>
            <div className="add-basket">
              <button className="btn btn-success">افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </section>
      <section className="instruction-product">
        <div className="container">
          <div className="d-flex justify-content-start">
            <a className="nav-link">مشخصات</a>
            <a className="nav-link">نقد و برسی</a>
            <a className="nav-link">نظرات </a>
          </div>
          <div className="Section-Data" />
        </div>
      </section>
    </div>

  )
}
