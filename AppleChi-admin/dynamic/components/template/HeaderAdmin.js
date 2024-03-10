import React from 'react'

export default function HeaderAdmin() {
    return (
        <div className="header-admin ">
            <div className="container-fluid">
                <div className="row ">
                    <div className="search col">
                        <input className="form-control w-100" placeholder="محصولات ..." type="search" name id />
                    </div>
                    <div className="col" />
                    <div className="col">
                        {/* <button class="btn btn-success btn-sm">
                                        <i style="color: #12000a!important" class="fa-solid fa-plus"></i>
                                        محصول جدید
                                    </button> */}
                    </div>
                    <div className="manage col">
                        <div className="mr-4 mt-1 pe-4 " style={{ cursor: 'pointer' }}>
                            <i className="fa-solid fa-bell" />
                        </div>
                        <div className="mr-4 mt-1 pe-4" style={{ cursor: 'pointer' }}>
                            <i className="fa-solid fa-envelope" />
                        </div>
                        <div className="mr-4 mt-1 pe-4" style={{ cursor: 'pointer' }}>
                            <i className="fa-brands fa-windows" />
                        </div>
                        <img className="me-4" src="/img/a938df48cda441fba2f1459b37eed501.jpeg" width="36px" height="36px" />
                        <h6 className="mt-2 me-3">امیر قاجاری</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
