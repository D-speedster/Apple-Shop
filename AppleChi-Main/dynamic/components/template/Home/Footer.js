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
                    <div className="col-lg-2 col-md-4">
                        <h5>لینک ها </h5>
                        <ul>
                            <li className='col'>قوانین و مقررات</li>
                            <li className='col'>درباره اپلچی</li>
                            <li className='col'>محصولات جدید</li>
                            <li className='col'>حریم خصوصی</li>
                            <li className='col'>راهنمای خرید</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h5>دسترسی سریع</h5>
                        <ul>
                            <li className='col'>خرید مک بوک</li>
                            <li className='col'>خرید اپل واچ</li>
                            <li className='col'>خرید آیفون</li>
                            <li className='col'>خرید ایرپاد</li>
                            <li className='col'>خرید آیپد</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h5>حساب من</h5>
                        <ul>
                            <li className='col'>ورود به حساب</li>
                            <li className='col'>سفارش های من</li>
                            <li className='col'>اطلاعات شخصی </li>
                            <li className='col'>تماس باما</li>
                            <li className='col'>نقشه سایت</li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h5>شبکه های اجتماعی</h5>
                        <ul>
                            <li className='col'>
                                <i className="pe-2 fab fa-instagram" />
                                اینستاگرام
                            </li>
                            <li className='col'>
                                <i className="pe-2 fab fa-telegram" />
                                تلگرام
                            </li>
                            <li className='col'>
                                <i className="pe-2 fab fa-youtube" />
                                یوتیوب
                            </li>
                            <li className='col'>
                                <i className="pe-2 fab fa-facebook" />
                                فیسبوک
                            </li>
                            <li className='col'>
                                <i className="pe-2 fab fa-whatsapp" />
                                واتس اپ
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 d-lg-block d-md-blcok d-none">
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
                <div className="row ">
                    <div className="col-lg-4  text-center">
                        <strong style={{ color: '#FFF' }}> ⚡️ طراحی شده توسط speedster ⚡️</strong>
                    </div>
                    <div className="col-lg-4 d-lg-block d-md-block d-none"></div>
                    <div className="col-lg-4 d-blcok ">
                        <ul className='nav justify-content-between mt-3'>
                            <li className="" style={{ color: "#c6c6cc" }}>
                                اپلچی{" "}
                            </li>
                            <li className="" style={{ color: "#c6c6cc" }}>
                                مقررات
                            </li>
                            <li className="" style={{ color: "#c6c6cc" }}>
                                حریم خصوصی
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
