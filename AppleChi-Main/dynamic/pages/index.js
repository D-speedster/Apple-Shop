import Header from "@/components/template/Home/Header";
import Footer from "@/components/template/Home/Footer";
import Blog from "@/components/template/Home/Blog";
import Item_Product from "@/components/modules/Home/Item_Product"
import Ads from "@/components/modules/Home/Ads";



export default function Home() {

  return (
    <>
      <article>
        <Header></Header>
        <Item_Product></Item_Product>
        <Ads></Ads>
        <Item_Product></Item_Product>
        <Item_Product></Item_Product>
        <Blog></Blog>
      </article>

      <br /><br /><br /><br /><br /><br /><br />
      <Footer></Footer>
    </>
  );
}
export async function getStaticProps() {
  let posts = ''
  return {
    props: {
      posts,
    },
  }
}