import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-white navbar-light">
                <div className="container">
                    <Link className='navbar-brand' href='/'>
                        <img
                            src="/img/62dec0259f18b71442a15966_Apple-Logo.png"
                            width={130}
                            height={60}
                            className="h-8"
                            alt="Apple Logo"
                            style={{ marginRight: '-10px' }}
                        />
                        <span className='d-flex mt-1' style={{ color: '#999', textShadow: '1px 1px 2px #CCC' }}>Apple Shop</span>
                    </Link>

                    <div className="mr-5 d-lg-block d-md-block d-none">
                        <input
                            type="search"
                            placeholder="جستجو در آگهی ها"
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
                            <button className="btn w-full w-lg-auto login-button" style={{ padding: 14 }}>
                                ورود به حساب
                            </button>
                        </div>
                        <div className="navbar-nav pe-3">
                            <button className="btn w-full w-lg-auto order-button" style={{ padding: 14 }}>
                                ثبت آگهی
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg bg-white">
                <div className='container'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-second" style={{ color: 'red', marginRight: '-27px' }}>
                            <li className="nav-item">
                                <Link className="nav-link" href='/products?type=phone'>گوشی موبایل</Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=watch' className="nav-link pe-5">ساعت هوشمند</Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=mac' className="nav-link pe-5">مک بوک</Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=airtag' className="nav-link pe-5">ایرتگ</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link pe-5">هدفون و هندزفری</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link pe-5">آی مک</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link pe-5">هوم پاد</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: 'red' }} href="#" className="nav-link pe-5">Vision Pro</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
