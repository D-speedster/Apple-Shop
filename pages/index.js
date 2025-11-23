import Head from 'next/head';
import Link from 'next/link';
import HeaderSlider from '@/components/site/HeaderSlider';
import CategoryStore from '@/components/site/CategoryStore';
import ProductSection from '@/components/site/ProductSection';
import Ads from '@/components/site/Ads';
import Blog from '@/components/site/Blog';

export default function Home() {
  return (
    <>
      <Head>
        <title>فروشگاه اپل | خرید محصولات اصل Apple</title>
        <meta name="description" content="خرید آنلاین محصولات اصل اپل شامل آیفون، مک بوک، آیپد، اپل واچ و ایرپاد با گارانتی معتبر و ارسال سریع" />
        <meta name="keywords" content="خرید آیفون, مک بوک, اپل واچ, ایرپاد, محصولات اپل" />
        <meta property="og:title" content="فروشگاه اپل | خرید محصولات اصل Apple" />
        <meta property="og:description" content="خرید آنلاین محصولات اصل اپل با بهترین قیمت" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yoursite.com" />
      </Head>
      
      <article>
        <HeaderSlider />
        
        <section className="py-4 text-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <div className="container">
            <h2 className="mb-3">محصولات اصل اپل با بهترین قیمت</h2>
            <p className="mb-4">گارانتی معتبر | ارسال سریع | پشتیبانی ۲۴ ساعته</p>
            <Link href="/products" className="btn btn-light btn-lg">
              <i className="fa-solid fa-shopping-bag me-2"></i>
              مشاهده همه محصولات
            </Link>
          </div>
        </section>
        
        <CategoryStore />
        <ProductSection type="phone" bg={'#eee'} />
        <Ads />
        <ProductSection type="mac" />
        <ProductSection type="watch" />
        <Blog />
      </article>
    </>
  );
}
