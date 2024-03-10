import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="navbar  navbar-expand-lg bg-white  navbar-light  px-0 py-3  ">
                <div className="container-xl">
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-xl">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <img src="img/menu_16.png" alt="" />
                                    دستهه بندی
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <img src="img/fire_.png" alt="" />
                                    تخفیفات روز
                                </a>{" "}
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <img src="img/top-arrow_.png" alt="" />
                                    برترین ها
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <img src="img/call_.png" alt="" />
                                    ارتباط باما
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}
