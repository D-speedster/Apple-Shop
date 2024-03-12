import Header from "@/components/template/Home/Header"
import Footer from "@/components/template/Home/Footer"
import Blog from "@/components/template/Home/Blog"
import Item_Product from "@/components/modules/Home/Item_Product"
import Ads from "@/components/modules/Home/Ads"
import HeaderSlider from "@/components/template/Home/HeaderSlider"
import Category_Store from "@/components/template/Home/Category_Store"


export default function Home() {

  return (
    <>
      <article>
        <Header></Header>
        <HeaderSlider />
        <br />
        <Category_Store></Category_Store>
        <Item_Product bg={'#eee'}></Item_Product>
        <Ads></Ads>
        <Item_Product ></Item_Product>
        <Item_Product></Item_Product>
        <Blog></Blog>
      </article>

      <br /><br /><br /><br /><br /><br /><br />
      <Footer></Footer>
    </>
  )
}
export async function getStaticProps() {
  let posts = ''
  return {
    props: {
      posts,
    },
  }
}