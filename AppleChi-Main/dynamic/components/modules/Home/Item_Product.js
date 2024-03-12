import React from 'react'
import db from "@/utils/data";
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export default function Item_Product({ bg }) {


    return (

        <div>

            <section className='Category-Type' style={{ backgroundColor: `${bg}` }}>
                <div className="container ">
                    <div className="Header-Title">
                        <h3>ایرپاد</h3>
                        <span />
                    </div>
                    <>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 25,
                                },
                            }}

                            className="mySwiper"
                        >
                            {db.iphone.map(item => {
                                return <SwiperSlide>
                                    <Link href='/product/24' style={{textDecoration : 'none'}}>
                                        <div className="card" style={{ border: "none" }}>
                                            <div
                                                className="card-header text-center"
                                                style={{ border: "none", backgroundColor: "white" }}
                                            >
                                                <img src={item.IMG} className="img-fluid" />
                                                <button className="btn btn-sm btn-danger">{item.type}</button>
                                                <br />
                                                <br />
                                                <h6 className="card-title ">
                                                    گوشی موبایل اپل مدل    {item.title} |  دوربین {item?.Camera}
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <span>{item.price} تومان </span>
                                            </div>
                                        </div>
                                    </Link>

                                </SwiperSlide>

                            })}

                        </Swiper>
                    </>
                </div>

            </section>


        </div>
    )
}
