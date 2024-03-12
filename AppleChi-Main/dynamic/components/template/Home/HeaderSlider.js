import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function HeaderSlider() {
    return (
        <div className=''>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='Slider-Header-Item'>

                        {/* <div className='Slider-Header-Content'>
                            <h4 className='mt-4'>شگفت انگیز ترین سخت افزار</h4>
                            <h3 className='mt-4'>بدنه ای جنس تیتانیوم</h3>
                            <h5 className='mt-4'>دوربین فوق العاده</h5>
                        </div> */}


                        <img src='img/iphone-15-pro-wallpaper-2.webp' />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slider-Header-Item'>

                        {/* <div className='Slider-Header-Content'>
                            <h4 className='mt-4'>دنیای واقعی غیر قابل تشخیص میشود !</h4>
                            <h3 className='mt-4'>وارد دنیای مجازی شوید</h3>

                            <h5 className='mt-4'>محدودیت ها را بشکافید</h5>

                        </div> */}

                        <img src='img/1686071360352.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slider-Header-Item'>

                        {/* <div className='Slider-Header-Content'>
                            <h4 className='mt-4'>بی همتای واقعی </h4>
                            <h3 className='mt-4'>تاپ ترین متریال</h3>
                            <h5 className='mt-4'>محدودیت ها را بشکافید</h5>
                        </div> */}

                        <img src='img/macbook-pro-13-inch-banner.jpeg' />
                    </div>

                </SwiperSlide>                <SwiperSlide>
                    <div className='Slider-Header-Item'>

                        <div className='Slider-Header-Content'>
                            <h4 className='mt-4'>بی همتای واقعی </h4>
                            <h3 className='mt-4'>تاپ ترین متریال</h3>
                            <h5 className='mt-4'>محدودیت ها را بشکافید</h5>
                        </div>

                        <img src='img/macbook-pro-13-inch-banner.jpeg' />
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    )
}
