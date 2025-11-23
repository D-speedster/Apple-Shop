import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ChartLine from '@/components/admin/ChartLine'
import ChartBar from '@/components/admin/ChartBar';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalSales: '24,000,000',
        revenue: '1,000,000',
        profit: '14,000,000'
    });

    useEffect(() => {
        // دریافت تعداد محصولات
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setStats(prev => ({ ...prev, totalProducts: data.data.length }));
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="mt-3">
            <div className="static-boxes">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className="container-fluid">
                                <div className="row justify-content-start">
                                    <div className="col-lg-9 static-info">
                                        <strong>{stats.totalSales} تومان</strong>
                                        <br />
                                        <span>فروش ماهانه</span>
                                    </div>
                                    <div className="col-lg-3 static-icon">
                                        <i style={{ color: 'aquamarine' }} className="fa-solid fa-arrow-up-right-dots" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className="row justify-content-start">
                                <div className="col-lg-9 static-info">
                                    <strong>{stats.revenue} تومان</strong>
                                    <br />
                                    <span>نسبت درآمد</span>
                                </div>
                                <div className="col-lg-3 static-icon">
                                    <i className="fa-solid fa-arrow-up-right-dots fa-flip-both" style={{ color: '#e72323' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className="row justify-content-start">
                                <div className="col-lg-9 static-info">
                                    <strong>{stats.totalProducts}</strong>
                                    <br />
                                    <span>تعداد محصولات</span>
                                </div>
                                <div className="col-lg-3 static-icon">
                                    <i style={{ color: 'aquamarine' }} className="fa-solid fa-box" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="static-item">
                            <div className="row justify-content-start">
                                <div className="col-lg-9 static-info">
                                    <strong>{stats.profit} تومان</strong>
                                    <br />
                                    <span>سود کسب شده</span>
                                </div>
                                <div className="col-lg-3 static-icon">
                                    <i className="fa-solid fa-arrow-up-right-dots fa-flip-both" style={{ color: '#e72323' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <section className="charts">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="Right-Chart p-4">
                            <div className="d-flex">
                                <i className="fa-solid fa-chart-simple" style={{ color: '#00d25b', fontSize: '26px', marginLeft: '10px' }} />
                                <span style={{ fontSize: '20px' }}>عملکرد ماهانه</span>
                            </div>
                            <ChartLine />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="Left-Chart pt-3">
                            <div className="container">
                                <i className="fa-solid fa-chart-simple" style={{ color: '#00d25b', fontSize: '26px', marginLeft: '10px' }} />
                                <span style={{ fontSize: '20px' }}>عملکرد سالانه</span>
                                <ChartBar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
