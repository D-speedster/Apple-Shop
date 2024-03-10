import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="FooterBox justify-content-center">
                    <div className="FooterBoxText container ">
                        <div className="col pe-5">
                            <div className="d-flex">
                                <i
                                    className="fab fa-apple"
                                    style={{ fontSize: 35, paddingLeft: 10, color: "#FFF" }}
                                />
                                <h5>فروش تمامی محصولات اپل </h5>
                            </div>
                        </div>
                        <div className="col" />
                        <div className="col ps-5" style={{ textAlign: "end" }}>
                            <button className="btn btn-dark btn-lg">ثبت سفارش</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h5 style={{ paddingTop: 6, paddingRight: 10, color: "#FFFF" }}>
                        اپلجی مرکز خرید و فروش محصولات اپل
                    </h5>
                </div>
                <div className="row list-footer mt-5 mb-5 ">
                    <div className="col-lg-2">
                        <h5>لینک ها </h5>
                        <ul>
                            <li>قوانین و مقررات</li>
                            <li>درباره اپلچی</li>
                            <li>محصولات جدید</li>
                            <li>حریم خصوصی</li>
                            <li>راهنمای خرید</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5>دسترسی سریع</h5>
                        <ul>
                            <li>خرید مک بوک</li>
                            <li>خرید اپل واچ</li>
                            <li>خرید آیفون</li>
                            <li>خرید ایرپاد</li>
                            <li>خرید آیپد</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5>حساب من</h5>
                        <ul>
                            <li>ورود به حساب</li>
                            <li>سفارش های من</li>
                            <li>اطلاعات شخصی من</li>
                            <li>تماس باما</li>
                            <li>نقشه سایت</li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5>شبکه های اجتماعی</h5>
                        <ul>
                            <li>
                                <i className="pe-2 fab fa-instagram" />
                                اینستاگرام
                            </li>
                            <li>
                                <i className="pe-2 fab fa-telegram" />
                                تلگرام
                            </li>
                            <li>
                                <i className="pe-2 fab fa-youtube" />
                                یوتیوب
                            </li>
                            <li>
                                <i className="pe-2 fab fa-facebook" />
                                فیسبوک
                            </li>
                            <li>
                                <i className="pe-2 fab fa-whatsapp" />
                                واتس اپ
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul className="d-flex namad-Footer">
                            <li>
                                <img src="/img/namad.png" />
                            </li>
                            <li>
                                <img src="/img/samandehi.png" />
                            </li>
                            <li>
                                <img src="/img/download-removebg-preview.png" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{ height: 2, backgroundColor: "#c6c6cc" }} />
            <div className="container">
                <div className="row align-content-end justify-content-between">
                    <div className="col">
                        <button className="btn btn-outline-secondary rounded-3">
                            ALL SYSTEM OPRATION
                        </button>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <ul className="nav">
                            <li className="ps-5" style={{ color: "#c6c6cc" }}>
                                اپلچی{" "}
                            </li>
                            <li className="ps-5" style={{ color: "#c6c6cc" }}>
                                مقررات
                            </li>
                            <li className="ps-5" style={{ color: "#c6c6cc" }}>
                                حریم خصوصی
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
