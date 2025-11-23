import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Chart from '@/components/template/chart'

import ChartLine from '@/components/template/ChartLine'
import ChartBar from './ChartBar';


export default function Main() {



    return (
        <div className="mt-3">
            <div className="static-boxes">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className="container-fluid">
                                <div className="row justify-content-start">
                                    <div className="col-lg-9 static-info">
                                        <strong>24,000,000 تومان</strong>
                                        <br />
                                        <span>فروش ماهانه</span>
                                    </div>
                                    <div className="col-lg-3 static-icon">
                                        <i style={{ color: 'aquamarine!important' }} className="fa-solid fa-arrow-up-right-dots" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className>
                                <div className="row justify-content-start">
                                    <div className="col-lg-9 static-info">
                                        <strong>1,000,000 تومان</strong>
                                        <br />
                                        <span>نسبت درآمد</span>
                                    </div>
                                    <br />
                                    <div className="col-lg-3 static-icon">
                                        <i className="fa-solid fa-arrow-up-right-dots fa-flip-both" style={{ color: '#e72323' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className>
                                <div className="row justify-content-start">
                                    <div className="col-lg-9 static-info">
                                        <strong>4,000,000 تومان</strong>
                                        <br />
                                        <span>درآمد بازاریاب ها</span>
                                    </div>
                                    <br />
                                    <div className="col-lg-3 static-icon">
                                        <i style={{ color: 'aquamarine!important' }} className="fa-solid fa-arrow-up-right-dots" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className>
                                <div className="row justify-content-start">
                                    <div className="col-lg-9 static-info">
                                        <strong>14,000,000 تومان</strong>
                                        <br />
                                        <span>سود کسب شده</span>
                                    </div>
                                    <br />
                                    <div className="col-lg-3 static-icon">
                                        <i className="fa-solid fa-arrow-up-right-dots fa-flip-both" style={{ color: '#e72323' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <section>
                <div className="row gx-4 justify-content-between ">
                    <div className="col-lg-3">
                        <div className="Product-Available p-3 pt-3">
                            <div className="d-flex mr-5">
                                <i className="fa-solid fa-chart-simple" style={{ color: '#00d25b', fontSize: '26px', marginLeft: '10px' }} />
                                <h5 className="card-title mb-0">وضعیت فروش</h5>
                            </div>
                            <div className="pt-2">
                                <Chart />

                            </div>
                            <div className="text-center mt-4">
                                <span style={{ color: 'var(--Secondary-Text)' }}>مشاهده وضعیت فروش </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-3 Top-Sold text-start pt-3">
                            <div className="d-flex mr-5">
                                <i className="fa-solid fa-chart-simple" style={{ color: '#00d25b', fontSize: '26px', marginLeft: '10px' }} />
                                <span style={{ fontSize: '20px' }}>پر فروش ترین ها <span>
                                </span></span></div>
                            <div className="mt-3">
                                <ul style={{ listStyle: 'none' }} className="mt-2">

                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="card">
                                                <div className="card-title mt-3 ">
                                                    <span>Apple MacBook
                                                        Pro 14</span>
                                                </div>
                                                <div className="card-header">
                                                    <img src="img/macbock1.png" className="card-img" />
                                                </div>
                                                <div className="card-footer">
                                                    <li className="card-text bg-success rounded-3 " style={{ color: 'black' }}>
                                                        فروش کلی : 774
                                                    </li>
                                                    <li className="card-text bg-danger rounded-3 mt-2" style={{ color: 'black' }}>
                                                        موجودی : 24
                                                    </li>
                                                </div>
                                            </div></SwiperSlide>
                                        <SwiperSlide>    <div className="card">
                                            <div className="card-title mt-3 ">
                                                <span className>Apple Iphone
                                                    13</span>
                                            </div>
                                            <div className="card-header">
                                                <img src="img/iphone13.png" className="card-img" />
                                            </div>
                                            <div className="card-footer">
                                                <li className="card-text bg-success rounded-3" style={{ color: 'black' }}>
                                                    فروش کلی : 514
                                                </li>
                                                <li className="card-text bg-danger rounded-3 mt-2" style={{ color: 'black' }}>
                                                    موجودی : 47
                                                </li>
                                            </div>
                                        </div></SwiperSlide>
                                        <SwiperSlide>    <div className="card">
                                            <div className="card-title mt-3">
                                                <span>Apple Watch Hermès</span>
                                            </div>
                                            <div className="card-header">
                                                <img src="img/watch.png" className="card-img" />
                                            </div>
                                            <div className="card-footer">
                                                <li className="card-text bg-success rounded-3" style={{ color: 'black' }}>
                                                    فروش کلی : 367
                                                </li>
                                                <li className="card-text bg-danger rounded-3 mt-2" style={{ color: 'black' }}>
                                                    موجودی : 99
                                                </li>
                                            </div>
                                        </div></SwiperSlide>
                                        <SwiperSlide>Slide 4</SwiperSlide>

                                    </Swiper>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="p-3 General_Statistics-item-2 text-start pt-3 pb-4">
                            <div className="d-flex mr-3">
                                <i className="fa-solid fa-thumbtack" style={{ color: '#00d25b', fontSize: '26px', marginLeft: '10px' }} />
                                <span style={{ fontSize: '20px' }}>آمار کلی <span>
                                </span></span></div>
                            <div>
                                <ul className="row justify-content-between me-2" style={{ listStyle: 'none' }}>
                                    <li className="item-staticAll mt-4 ">
                                        <div className="item-State">
                                            <strong style={{ display: 'block' }}>5K </strong>
                                            <small>کاربران</small>
                                        </div>
                                    </li>
                                    <li className="item-staticAll mt-4">
                                        <div className="item-State">
                                            <strong style={{ display: 'block' }}>240</strong>
                                            <small>سفارشات</small>
                                        </div>
                                    </li>
                                    <li className="item-staticAll mt-4 ">
                                        <div className="item-State">
                                            <strong style={{ display: 'block' }}>6</strong>
                                            <small>دسته بندی ها</small>
                                        </div>
                                    </li>
                                    <li className="item-staticAll mt-4 ">
                                        <div className="item-State">
                                            <strong style={{ display: 'block' }}>401</strong>
                                            <small>محصولات</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="charts">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="Right-Chart p-4">
                            <div className="d-flex ">
                                <i className="fa-solid fa-chart-simple" style={{ color: '#00d25b', fontSize: '26px', marginLeft: '10px' }} />
                                <span style={{ fontSize: '20px' }}>عملکرد ماهانه <span>
                                </span></span></div>
                            <ChartLine></ChartLine>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Left-Chart pt-3">
                            <div className="container">
                                <i className="fa-solid fa-chart-simple" style={{ color: '#00d25b', fontSize: '26px', marginLeft: '10px' }} />
                                <span style={{ fontSize: '20px' }}>عملکرد سالانه <span>
                                </span></span>
                                <ChartBar />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        props: {

        }
    }

}