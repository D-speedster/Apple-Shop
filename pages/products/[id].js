import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Swal from 'sweetalert2';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);

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

  const handleAddToCart = async () => {
    setAddingToCart(true);
    
    // شبیه‌سازی افزودن به سبد خرید
    setTimeout(() => {
      // ذخیره در localStorage
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find(item => item.id === product._id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: product._id,
          title: product.title,
          price: product.price,
          image: product.IMG,
          quantity: 1
        });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      
      Swal.fire({
        title: 'موفق!',
        text: 'محصول به سبد خرید اضافه شد',
        icon: 'success',
        confirmButtonText: 'باشه',
        timer: 2000
      });
      
      setAddingToCart(false);
    }, 500);
  };

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
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">خانه</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/products">محصولات</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product.title}
              </li>
            </ol>
          </nav>
          
          <div className='row gx-4'>
            {/* گالری تصاویر */}
            <div className='col-lg-3'>
              <div className='Product-Slider'>
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  loop={product.Gallery ? true : false}
                  spaceBetween={10}
                  navigation={product.Gallery ? true : false}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img 
                      src={product.IMG || '/img/placeholder.png'} 
                      style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                      alt={product.title}
                      loading="lazy"
                    />
                  </SwiperSlide>
                  {product.Gallery && product.Gallery.split(',').map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img 
                        src={img.trim()} 
                        style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                        alt={`${product.title} - تصویر ${idx + 2}`}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
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
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-store me-2" style={{ color: '#667eea' }}></i>
                    <span className='Seller'>فروشگاه اپل</span>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-certificate me-2" style={{ color: '#00d25b' }}></i>
                    <span>گارانتی ۱۸ ماهه معتبر</span>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-truck-fast me-2" style={{ color: '#ff8800' }}></i>
                    <span>ارسال سریع (۱-۲ روز کاری)</span>
                  </div>
                  <hr />
                  <div className='text-center'>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#e72323' }}>
                      {Number(product.price).toLocaleString()} تومان
                    </span>
                    <br />
                    <button 
                      className='btn rounded-3 btn-danger mt-3 w-100' 
                      onClick={handleAddToCart}
                      disabled={addingToCart}
                    >
                      {addingToCart ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          در حال افزودن...
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-cart-plus me-2"></i>
                          افزودن به سبد خرید
                        </>
                      )}
                    </button>
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
