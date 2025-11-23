import React from 'react'
import Link from 'next/link'

export default function CategoryStore() {
    return (
        <div className='category-store'>
            <div className='container'>
                <h5 className='mb-5'>اپلچی. بهترین راه برای خرید محصولاتی که دوست دارید.</h5>
                <div className='row'>
                    <div className='col-lg-2'>
                        <Link href="/products?type=visionpro" style={{ textDecoration: 'none' }}>
                            <div className='card text-center'>
                                <img src='img/store/store-card-13-vision-pro-nav-202401.png' alt="Vision Pro" />
                                <br />
                                <h6 className='card-title pb-3'>Vision Pro</h6>
                            </div>
                        </Link>
                    </div>
                    
                    <div className='col-lg-2'>
                        <Link href="/products?type=phone" style={{ textDecoration: 'none' }}>
                            <div className='card text-center'>
                                <img src='img/store/store-card-13-iphone-nav-202309_GEO_US.png' alt="iPhone" />
                                <br />
                                <h6 className='card-title pb-3'>iPhone</h6>
                            </div>
                        </Link>
                    </div>
                    
                    <div className='col-lg-2'>
                        <Link href="/products?type=ipad" style={{ textDecoration: 'none' }}>
                            <div className='card text-center'>
                                <img src='img/store/store-card-13-ipad-nav-202210.png' alt="iPad" />
                                <br />
                                <h6 className='card-title pb-3'>iPad</h6>
                            </div>
                        </Link>
                    </div>
                    
                    <div className='col-lg-2'>
                        <Link href="/products?type=airtag" style={{ textDecoration: 'none' }}>
                            <div className='card text-center'>
                                <img src='img/store/store-card-13-airtags-nav-202108.png' alt="AirTag" />
                                <br />
                                <h6 className='card-title pb-3'>AirTag</h6>
                            </div>
                        </Link>
                    </div>
                    
                    <div className='col-lg-2'>
                        <Link href="/products?type=airpods" style={{ textDecoration: 'none' }}>
                            <div className='card text-center'>
                                <img src='img/store/store-card-13-airpods-nav-202209.png' alt="AirPods" />
                                <br />
                                <h6 className='card-title pb-3'>AirPods</h6>
                            </div>
                        </Link>
                    </div>
                    
                    <div className='col-lg-2'>
                        <Link href="/products?type=mac" style={{ textDecoration: 'none' }}>
                            <div className='card text-center'>
                                <img src='img/store/1-min-6-250x230-removebg-preview.png' alt="Mac" />
                                <br />
                                <h6 className='card-title pb-3'>Mac</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
