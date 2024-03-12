
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
export default function IDNumber() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='Product'>
            <div className='Product-Info'>
                <div className='container'>
                    <div className='row gx-4'>
                        <div className='col-lg-3'>
                            <div className='Product-Slider'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img src="/img/1 (5).png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/1 (6).png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/1 (4).png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/1 (3).png" />
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={50}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src="/img/1 (5).png" style={{ height: '65px', }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/1 (6).png" style={{ height: '65px', }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/1 (4).png" style={{ height: '65px', }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/1 (3).png" style={{ height: '65px', }} />
                                    </SwiperSlide>



                                </Swiper>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='Product-Specifications'>
                                <h6>
                                    لپ تاپ 13.3 اینچی اپل مدل MacBook Air MGN63 2020-M1 8GB 256SSD

                                </h6>
                                <span>
                                    Apple MacBook Air MGN63 2020-M1 8GB 256SSD 13.3 inch Laptop

                                </span>
                                <br />
                                <ul className='text-end mt-4' >
                                    <li>پردازنده : core 4</li>
                                    <li>گرافیک : داخلی apple</li>
                                    <li
                                    >ظرفیت هارد : 256 گیگابایت

                                    </li>
                                    <li>
                                        ظرفیت ram : هشت گیگابایت


                                    </li>
                                    <li>
                                        صفحه نمایش : QHD|2560x1600


                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='Product-price'>
                                <div className='container'>
                                    <br />
                                    <i class="fa-solid fa-user fa-flip-horizontal fa-lg"></i>
                                    <span className='Seller'>ایران کالا</span>
                                    <br />
                                    <hr />
                                    <i class="fa-solid fa-certificate"></i>
                                    <span>
                                        گارانتی ۱۸ ماهه پیکسل

                                    </span>
                                    <hr />
                                    ارسال :موجود در انبار ( ارسال فوری )


                                    <hr />
                                    <div className='text-center'>
                                        <span>31,490,000 تومان</span>
                                        <br/> 
                                        <button className='btn rounded-3 btn-danger mt-3'>افزودن به سبد خرید</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
