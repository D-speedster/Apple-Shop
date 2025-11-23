import HeaderSlider from '@/components/site/HeaderSlider';
import CategoryStore from '@/components/site/CategoryStore';
import ProductSection from '@/components/site/ProductSection';
import Ads from '@/components/site/Ads';
import Blog from '@/components/site/Blog';

export default function Home() {
  return (
    <article>
      <HeaderSlider />
      <br />
      <CategoryStore />
      <ProductSection type="phone" bg={'#eee'} />
      <Ads />
      <ProductSection type="mac" />
      <ProductSection type="watch" />
      <Blog />
    </article>
  );
}
