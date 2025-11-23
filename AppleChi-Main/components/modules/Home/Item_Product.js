import React, { useEffect, useState } from 'react'
import db from "@/utils/data";
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export default function Item_Product({ bg, type }) {
    const [Listing, setListing] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/products');
            const json = await response.json();
            let result = json.data.filter(item => item.type == type)
            setListing(result);

        };

        fetchData();

    }, [])
    let Values = [
        { en: 'phone', fa: 'گوشی' },
        { en: 'mac', fa: 'مک بوک' },
        { en: 'watch', fa: 'ساعت هوشمند' },
        { en: 'airpod', fa: 'ایرپاد' }
    ]
    let translator = () => {
        let res = Values.find((item => {
            return item.en == type
        }))
        return res.fa

    }
    translator()
    return (

        <div>

            <section className='Category-Type' style={{ backgroundColor: `${bg}` }}>
                <div className="container ">
                    <div className="Header-Title">
                        <h3>{translator()}</h3>
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
                            {Object.entries(Listing).map(item => {
                                return <SwiperSlide>
                                    <Link href={`/product/${item['1']._id}`} style={{ textDecoration: 'none' }}>
                                        <div className="card" style={{ border: "none" }}>
                                            <div
                                                className="card-header text-center"
                                                style={{ border: "none", backgroundColor: "white" }}
                                            >
                                                <img src={item['1'].IMG} height={'200px'} />
                                                <button className="btn btn-sm btn-danger">جدید</button>
                                                <br />
                                                <br />
                                                <h6 className="card-title ">

                                                    {translator()} {item['1'].title}
                                                </h6>
                                            </div>
                                            <div className="card-body">
                                                <span>{Number(item['1'].price).toLocaleString()} تومان </span>
                                            </div>
                                        </div>
                                    </Link>

                                </SwiperSlide>

                            })}

                        </Swiper>
                    </>
                </div>

            </section >


        </div >
    )
}
