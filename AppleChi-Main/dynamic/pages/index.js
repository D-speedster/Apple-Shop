

import Blog from "@/components/template/Home/Blog"
import Item_Product from "@/components/modules/Home/Item_Product"
import Ads from "@/components/modules/Home/Ads"
import HeaderSlider from "@/components/template/Home/HeaderSlider"
import Category_Store from "@/components/template/Home/Category_Store"


export default function Home() {

  return (
    <>
      <article>

        <HeaderSlider />
        <br />
        <Category_Store></Category_Store>
        <Item_Product type="phone" bg={'#eee'}></Item_Product>
        <Ads></Ads>
        <Item_Product type="mac" ></Item_Product>
        <Item_Product type="watch"></Item_Product>
        <Blog></Blog>
      </article>

      <br /><br /><br /><br /><br /><br /><br />

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