import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function SideBar() {
    const router = useRouter();
    const [userName, setUserName] = useState('مدیر سیستم');
    
    useEffect(() => {
        // دریافت نام کاربر از localStorage یا API
        const storedName = localStorage.getItem('adminName');
        if (storedName) setUserName(storedName);
    }, []);
    
    const loggedFunction = async () => {
        const result = await Swal.fire({
            title: 'خروج از حساب کاربری',
            text: 'آیا می‌خواهید از پنل مدیریت خارج شوید؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'بله، خروج',
            cancelButtonText: 'انصراف',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6'
        });
        
        if (result.isConfirmed) {
            localStorage.removeItem('adminToken');
            router.push('/');
        }
    }
    
    const isActive = (path) => {
        return router.pathname === path;
    }
    
    return (
        <div className="col-lg-2 SideBar d-md-block d-lg-block d-none">
            <div className="d-flex">
                <i className="fa-brands fa-apple mt-3 me-2" style={{ fontSize: '29px', color: '#77dd77' }} />
                <h5 className="pt-3 pe-2 text-end">مدیریت فروشگاه اپل</h5>
            </div>
            <hr />
            
            <div className="profile">
                <div className="profile-pic">
                    <div className="row">
                        <div className="col-lg-3">
                            <div style={{ 
                                width: '40px', 
                                height: '40px', 
                                borderRadius: '50%', 
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '18px'
                            }}>
                                {userName.charAt(0)}
                            </div>
                        </div>
                        <div className="col-lg-7 text-end" style={{ color: '#fff' }}>
                            <span>{userName}</span>
                            <br />
                            <small>مدیر سیستم</small>
                        </div>
                        <div className="col-lg-2 mt-2">
                            <i className="fa-solid fa-ellipsis-vertical mt-1" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            
            <h5 className="text-end">مسیر ها</h5>
            
            <div className="Menu-SideBar">
                <ul>
                    <Link href='/admin' style={{ textDecoration: 'none', color: 'var(--Secondary-Text)' }}>
                        <li className={`menu-item ${isActive('/admin') ? 'active' : ''}`}>
                            <div className="box-circle">
                                <i style={{ color: '#00d25b' }} className="fa-solid fa-home" />
                            </div>
                            <span>داشبورد</span>
                        </li>
                    </Link>
                    
                    <Link href='/admin/products' style={{ textDecoration: 'none', color: 'var(--Secondary-Text)' }}>
                        <li className={`menu-item ${isActive('/admin/products') ? 'active' : ''}`}>
                            <div className="box-circle">
                                <i style={{ color: '#ff8800' }} className="fa-brands fa-product-hunt" />
                            </div>
                            <span>محصولات</span>
                        </li>
                    </Link>
                    
                    <Link href='/admin/products/new' style={{ textDecoration: 'none', color: 'var(--Secondary-Text)' }}>
                        <li className={`menu-item ${isActive('/admin/products/new') ? 'active' : ''}`}>
                            <div className="box-circle">
                                <i style={{ color: '#0099ff' }} className="fa-solid fa-plus" />
                            </div>
                            <span>افزودن محصول</span>
                        </li>
                    </Link>
                    
                    <Link href='/admin/comments' style={{ textDecoration: 'none', color: 'var(--Secondary-Text)' }}>
                        <li className={`menu-item ${isActive('/admin/comments') ? 'active' : ''}`}>
                            <div className="box-circle">
                                <i style={{ color: '#f2322' }} className="fa-regular fa-comments" />
                            </div>
                            <span>کامنت ها</span>
                        </li>
                    </Link>
                    
                    <Link href='/admin/users' style={{ textDecoration: 'none', color: 'var(--Secondary-Text)' }}>
                        <li className={`menu-item ${isActive('/admin/users') ? 'active' : ''}`}>
                            <div className="box-circle">
                                <i style={{ color: '#8f5fe8' }} className="fa-solid fa-users" />
                            </div>
                            <span>کاربران</span>
                        </li>
                    </Link>
                    
                    <li onClick={loggedFunction} className="menu-item" style={{ cursor: 'pointer' }}>
                        <div className="box-circle">
                            <i style={{ color: 'rgb(238, 6, 6)' }} className="fa-solid fa-arrow-right-from-bracket" />
                        </div>
                        <span>خروج</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
