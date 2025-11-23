import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductSection({ bg, type, title }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products');
                const json = await response.json();
                if (json.success) {
                    const filtered = json.data.filter(item => item.type === type);
                    setProducts(filtered);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [type]);

    const typeNames = {
        'phone': 'گوشی',
        'mac': 'مک بوک',
        'watch': 'ساعت هوشمند',
        'airpod': 'ایرپاد',
        'ipad': 'آیپد'
    };

    const displayTitle = title || typeNames[type] || type;

    return (
        <section className='Category-Type' style={{ backgroundColor: bg || '#fff' }}>
            <div className="container">
                <div className="Header-Title">
                    <h3>{displayTitle}</h3>
                    <span />
                </div>
                
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 5, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 25 }
                    }}
                    className="mySwiper"
                >
                    {products.map(product => (
                        <SwiperSlide key={product._id}>
                            <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                                <div className="card" style={{ border: "none" }}>
                                    <div className="card-header text-center" style={{ border: "none", backgroundColor: "white" }}>
                                        <img src={product.IMG} height={'200px'} alt={product.title} />
                                        <button className="btn btn-sm btn-danger">جدید</button>
                                        <br /><br />
                                        <h6 className="card-title">{product.title}</h6>
                                    </div>
                                    <div className="card-body">
                                        <span>{Number(product.price).toLocaleString()} تومان</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
