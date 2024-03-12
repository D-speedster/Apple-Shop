import React, { useEffect, useState } from 'react'



export default function Header() {

    return (
        <header>
            <nav className="navbar  navbar-expand-lg bg-white navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src="img/Capture-removebg-preview.png"
                            width={120}
                            className="h-8"
                            alt="..."
                        />
                    </a>
                    <div className="mr-5 d-lg-block d-md-block d-none ">
                        <input
                            type="search "
                            placeholder="جستجو در آگهی ها "
                            style={{ width: 600, marginRight: 50, height: '50px' }}
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

            <nav className="navbar navbar-expand-lg bg-white " >
                <div className='container'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-second" style={{ color: 'red', marginRight: '-27px' }}>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    گوشی موبایل
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link pe-5">
                                    ساعت هوشمند
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link pe-5">
                                    مک بوک
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link pe-5">

                                    ایرتگ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link pe-5">

                                    هدفون و هندزفری
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link pe-5">

                                    آی مک
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link pe-5">

                                    هوم پاد
                                </a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: 'red' }} href="" className="nav-link pe-5">

                                    Vision Pro
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <hr />



        </header>

    )
}
