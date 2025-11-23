import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductSection({ bg, type, title }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false);
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

    if (loading) {
        return (
            <section className='Category-Type' style={{ backgroundColor: bg || '#fff', minHeight: '400px' }}>
                <div className="container">
                    <div className="Header-Title">
                        <h3>{displayTitle}</h3>
                        <span />
                    </div>
                    <div className="text-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">در حال بارگذاری...</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (products.length === 0) {
        return (
            <section className='Category-Type' style={{ backgroundColor: bg || '#fff', minHeight: '300px' }}>
                <div className="container">
                    <div className="Header-Title">
                        <h3>{displayTitle}</h3>
                        <span />
                    </div>
                    <div className="text-center py-5">
                        <i className="fa-solid fa-box-open" style={{ fontSize: '60px', color: '#ccc' }}></i>
                        <p className="mt-3" style={{ color: '#999' }}>محصولی در این دسته‌بندی یافت نشد</p>
                    </div>
                </div>
            </section>
        );
    }

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
                    {products.map((product, index) => (
                        <SwiperSlide key={product._id}>
                            <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                                <div className="card" style={{ border: "none", transition: 'transform 0.2s' }} 
                                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div className="card-header text-center position-relative" style={{ border: "none", backgroundColor: "white" }}>
                                        <img 
                                            src={product.IMG} 
                                            style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
                                            alt={product.title}
                                            loading="lazy"
                                        />
                                        {index < 3 && (
                                            <span className="position-absolute top-0 start-0 m-2 badge bg-danger">
                                                جدید
                                            </span>
                                        )}
                                        <br /><br />
                                        <h6 className="card-title">{product.title}</h6>
                                    </div>
                                    <div className="card-body">
                                        <span style={{ fontWeight: 'bold', color: '#e72323' }}>
                                            {Number(product.price).toLocaleString()} تومان
                                        </span>
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
