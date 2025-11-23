import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleLogin = () => {
        // TODO: پیاده‌سازی لاگین
        alert('صفحه ورود به زودی اضافه می‌شود');
    };

    const handleContact = () => {
        // TODO: پیاده‌سازی تماس
        alert('برای تماس: 021-12345678');
    };

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

                    <div className="mr-5 d-lg-block d-md-block d-none" style={{ flex: 1, maxWidth: '600px' }}>
                        <form onSubmit={handleSearch} className="position-relative">
                            <input
                                type="search"
                                placeholder="جستجو در محصولات..."
                                className="form-control pe-5"
                                style={{ height: '50px', borderRadius: '25px', border: '2px solid #e0e0e0' }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="جستجو در محصولات"
                            />
                            <button 
                                type="submit" 
                                className="btn position-absolute top-50 end-0 translate-middle-y me-2"
                                style={{ border: 'none', background: 'transparent' }}
                                aria-label="جستجو"
                            >
                                <i className="fa-solid fa-search" style={{ color: '#999' }}></i>
                            </button>
                        </form>
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
                                className="btn w-full w-lg-auto login-button" 
                                style={{ padding: 14 }}
                                onClick={handleLogin}
                            >
                                <i className="fa-solid fa-user me-2"></i>
                                ورود به حساب
                            </button>
                        </div>
                        <div className="navbar-nav pe-3">
                            <button 
                                className="btn w-full w-lg-auto order-button" 
                                style={{ padding: 14 }}
                                onClick={handleContact}
                            >
                                <i className="fa-solid fa-phone me-2"></i>
                                تماس با ما
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg bg-white">
                <div className='container'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-second">
                            <li className="nav-item">
                                <Link className="nav-link" href='/products?type=phone'>
                                    <i className="fa-solid fa-mobile-screen-button me-1"></i>
                                    گوشی موبایل
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=watch' className="nav-link">
                                    <i className="fa-solid fa-clock me-1"></i>
                                    ساعت هوشمند
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=mac' className="nav-link">
                                    <i className="fa-solid fa-laptop me-1"></i>
                                    مک بوک
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=ipad' className="nav-link">
                                    <i className="fa-solid fa-tablet-screen-button me-1"></i>
                                    آیپد
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=airpod' className="nav-link">
                                    <i className="fa-solid fa-headphones me-1"></i>
                                    ایرپاد
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/products?type=visionpro' className="nav-link nav-link-special">
                                    <i className="fa-solid fa-vr-cardboard me-1"></i>
                                    Vision Pro
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
