import React from 'react'

export default function Blog() {
    return (
        <section className="Blog d-block ">
            <div className="container">
                <h4 className="mb-4">Blog</h4>
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-12">
                        <div className="card mb-0 col-12">
                            <div className="card-header">
                                <img src="/img/blog-2.jpg" className="img-fluid " />
                            </div>
                            <div className="card-body">
                                <p>اپل احتمالا برای تولید خودرو هوشمند با ال جی همکاری می‌کند</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src="/img/blog-1.jpg" className="img-fluid " />
                            </div>
                            <div className="card-body">
                                <p>ایلان ماسک: اپل بزرگ‌ترین مشتری تبلیغاتی توییتر است</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 center-Side">
                        <img src="/img/blog-big.jpg" />
                        <div className="datalist-img">
                            <div className="container">
                                <h4>بررسی آی مک ۲۴ اینچی M1 اپل [با بررسی ویدئویی]</h4>
                                <br />
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <img
                                            src="/img/photo_2020-09-10_21-33-39.jpg"
                                            style={{ height: 30, width: 30, borderRadius: "50%" }}
                                        />
                                        حامد نجاری
                                    </div>
                                    <div>
                                        <i className="fas fa-clock ps-1" />
                                        خواندن ۱ دقیقه
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="card mb-0">
                            <div className="card-header">
                                <img src="/img/blog-3.jpg" className="img-fluid " />
                            </div>
                            <div className="card-body">
                                <p>اپل سرویس تعمیر در خانه را به هشت کشور دیگر گسترش داد</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src="/img/blog-4.jpg" className="img-fluid " />
                            </div>
                            <div className="card-body">
                                <p>
                                    سهم اپل از بازار جهانی هدفون‌های بی‌سیم TWS اکنون سه‌برابر سهم
                                    سامسونگ است
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
