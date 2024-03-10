import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function SideBar() {
 
    return (
        <>

            <div className="d-flex">
                <i
                    className="fa-brands fa-apple mt-3 me-2"
                    style={{ fontSize: 29, color: "#77dd77" }}
                />
                <h5 className="pt-3 pb-3 text-start">مدیریت فروشگاه اپل</h5>
            </div>
            <hr />
            <>
                <div className="profile">
                    <div className="profile-pic">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="img/a938df48cda441fba2f1459b37eed501.jpeg" />
                            </div>
                            <div className="col-lg-7 text-start" style={{ color: "#fff" }}>
                                <span>امیر قاجاری</span>
                                <br />
                                <small>مدیر اصلی</small>
                            </div>
                            <div className="col-lg-2 mt-2">
                                <i style={{ color: "#ff8800!important" }} className="fa-solid fa-plus" />


                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h5 className="text-end">مسیر ها</h5>
                <div className="Menu-SideBar">
                    <ul >
                        <div id="accordion">
                            <li
                                className="menu-item"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <div className="box-circle ">
                                    <i
                                        style={{ color: "#0099ff!important" }}
                                        className="fa-solid fa-plus"
                                    />
                                </div>
                                <span>افزودن محصول</span>
                            </li>
                            <div
                                id="collapseOne"
                                className="collapse text-start"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                            >
                                <ul>
                                    <li>مک بوک</li>
                                    <li>گوشی اپل</li>
                                    <li>اپل واچ</li>
                                </ul>
                            </div>
                        </div>
                        {/* Dropdown Need  mac - watch - iphone */}
                        <li className="menu-item" id="accordion">
                            <div className="box-circle" id="headingOne">
                                <i
                                    style={{ color: "#ff8800" }}
                                    className="fa-brands fa-product-hunt"
                                />
                            </div>
                            <span>محصولات</span>
                        </li>
                        {/* Dropdown Need  Delete & Edit */}
                        <li className="menu-item">
                            <div class="box-circle">
                                <i style={{ color: '#77dd77' }} className="fa-regular fa-comments"></i>

                            </div>
                            <span> کامنت ها</span>

                        </li>
                    
                            <Link href='/amin/ticket'>
                                <li className="menu-item">
                                    <div className="box-circle">
                                        <i
                                            style={{ color: "#0090e7!important" }}
                                            className="fa-regular fa-life-ring"
                                        />
                                    </div>
                                    <span> تیکت ها</span>
                                </li>
                            </Link>

                    
                        <li className="menu-item">
                            <div className="box-circle">
                                <i
                                    style={{ color: "#8f5fe8!important" }}
                                    className="fa-solid fa-users"
                                />
                            </div>
                            <span> یوزر ها</span>
                        </li>
                        <li className="menu-item">
                            <div className="box-circle">
                                <i
                                    style={{ color: "aquamarine!important" }}
                                    className="fa-solid fa-gear"
                                />
                            </div>
                            <span> تنظیمات</span>
                        </li>
                        <li
                            className="menu-item"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            <div className="box-circle">
                                <i
                                    style={{ color: "rgb(238, 6, 6)!important" }}
                                    className="fa-solid fa-arrow-right-from-bracket"
                                />
                            </div>
                            <span> خروج</span>
                        </li>
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Modal title
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">...</div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </>

        </>

    )
}
