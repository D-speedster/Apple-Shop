import Link from 'next/link'
import React from 'react'

export default function SideBar() {
    return (
        <div className="col-lg-2 SideBar d-md-block d-lg-block d-none">
            <div className="d-flex">
                <i className="fa-brands fa-apple mt-3 me-2" style={{ fontSize: '29px', color: '#77dd77' }} />
                <h5 className="pt-3 pb-3 text-end">مدیریت فروشگاه اپل</h5>
            </div>
            <hr />
            <div className="profile">
                <div className="profile-pic">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src="/img/a938df48cda441fba2f1459b37eed501.jpeg" />
                        </div>
                        <div className="col-lg-7 text-end" style={{ color: '#fff' }}>
                            <span>امیر قاجاری</span>
                            <br />
                            <small>مدیر اصلی</small>
                        </div>
                        <div className="col-lg-2 mt-2">
                            {/* <i style="color: #ff8800!important" class="fa-solid fa-plus"></i> */}
                            <i className="fa-solid  fa-ellipsis-vertical mt-1" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h5 className="text-end">
                مسیر ها
            </h5>
            <div className="Menu-SideBar">
                <ul>
                    <Link href='/' style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                        <li className="menu-item" >
                            <div className="box-circle">
                                <i style={{ color: '#00d25b' }} className="fa-solid fa-home" />
                            </div>
                            <span>صفحه اصلی</span>
                        </li>
                    </Link>
                    <div id="accordion">
                        <li className="menu-item" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="box-circle">
                                <i style={{ color: '#0099ff!important' }} className="fa-solid fa-plus" />
                            </div>
                            <span>افزودن محصول</span>
                        </li>
                        <div id="collapseOne" className="collapse text-end" aria-labelledby="headingOne" data-parent="#accordion">
                            <ul className='me-5 pt-2'>
                                <Link href='/NewProduct/mac' style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                                    <li>مک بوک</li>
                                </Link>

                                <Link href='/NewProduct/phone' style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                                    <li>گوشی اپل</li>
                                </Link>
                                <Link href='/NewProduct/watch' style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                                    <li>اپل واچ</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    {/* Dropdown Need  mac - watch - iphone */}
                    <Link href='products' style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                        <li className="menu-item" id="accordion">
                            <div className="box-circle" id="headingOne">
                                <i style={{ color: '#ff8800' }} className="fa-brands fa-product-hunt" />
                            </div>
                            <span>محصولات</span>
                        </li>
                    </Link>

                    {/* Dropdown Need  Delete & Edit */}
                    <Link href='comments' style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                        <li className="menu-item">
                            <div className="box-circle">
                                <i style={{ color: '#f2322!important' }} className="fa-regular fa-comments" />
                            </div>
                            <span> کامنت ها</span>
                        </li>
                    </Link>

                    <Link href={`ticket`} style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                        <li className="menu-item">
                            <div className="box-circle">
                                <i style={{ color: '#0090e7!important' }} className="fa-regular fa-life-ring" />
                            </div>
                            <span> تیکت ها</span>
                        </li>
                    </Link>
                    <Link href={`users`} style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                        <li className="menu-item">
                            <div className="box-circle">
                                <i style={{ color: '#8f5fe8!important' }} className="fa-solid fa-users" />
                            </div>
                            <span> یوزر ها</span>
                        </li>
                    </Link>
                    <Link href={`settings`} style={{ textDecoration: 'none !important', color: 'var(--Secondary-Text)' }}>
                        <li className="menu-item">
                            <div className="box-circle">
                                <i style={{ color: 'aquamarine!important' }} className="fa-solid fa-gear" />
                            </div>
                            <span> تنظیمات</span>
                        </li>
                    </Link>

                    <li className="menu-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="box-circle">
                            <i style={{ color: 'rgb(238, 6, 6)!important' }} className="fa-solid fa-arrow-right-from-bracket" />
                        </div>
                        <span> خروج</span>
                    </li>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}
