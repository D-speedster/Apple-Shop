import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        
        if (data.success) {
          setProduct(data.data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>محصول یافت نشد</h3>
      </div>
    );
  }

  return (
    <div className='Product mt-5'>
      <div className='Product-Info'>
        <div className='container'>
          <div className='row gx-4'>
            {/* گالری تصاویر */}
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
                    <img src={product.IMG || '/img/placeholder.png'} height={200} alt={product.title} />
                  </SwiperSlide>
                  {product.Gallery && (
                    <SwiperSlide>
                      <img src={product.Gallery} height={200} alt={product.title} />
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>

            {/* مشخصات */}
            <div className='col-lg-6'>
              <div className='Product-Specifications'>
                <h6>{product.title}</h6>
                <span>{product.category}</span>
                <br />
                <ul className='text-end mt-4'>
                  {product.cpu && <li>پردازنده: {product.cpu}</li>}
                  {product.ram && <li>رم: {product.ram}</li>}
                  {product.Storage && <li>حافظه: {product.Storage}</li>}
                  {product.Display && <li>صفحه نمایش: {product.Display}</li>}
                  {product.Camera && <li>دوربین: {product.Camera}</li>}
                  {product.battery && <li>باتری: {product.battery}</li>}
                </ul>
                {product.description && (
                  <div className="mt-3">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* قیمت و خرید */}
            <div className='col-lg-3'>
              <div className='Product-price'>
                <div className='container'>
                  <br />
                  <i className="fa-solid fa-user fa-flip-horizontal fa-lg"></i>
                  <span className='Seller'>ایران کالا</span>
                  <br />
                  <hr />
                  <i className="fa-solid fa-certificate"></i>
                  <span>گارانتی ۱۸ ماهه پیکسل</span>
                  <hr />
                  ارسال: موجود در انبار (ارسال فوری)
                  <hr />
                  <div className='text-center'>
                    <span>{Number(product.price).toLocaleString()} تومان</span>
                    <br />
                    <button className='btn rounded-3 btn-danger mt-3'>افزودن به سبد خرید</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
