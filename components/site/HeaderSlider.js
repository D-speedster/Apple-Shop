import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function HeaderSlider() {
    return (
        <div className=''>
            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='Slider-Header-Item'>
                        <img src='img/iphone-15-pro-wallpaper-2.webp' alt="iPhone 15 Pro" />
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='Slider-Header-Item'>
                        <img src='img/1686071360352.jpg' alt="Vision Pro" />
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='Slider-Header-Item'>
                        <img src='img/macbook-pro-13-inch-banner.jpeg' alt="MacBook Pro" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
