import Head from "@modules/common/components/head"
import { Carousel } from "@modules/custom/components/carousel"
import { FAQ } from "@modules/custom/components/faq"
import { HomeProducts } from "@modules/custom/components/HomeProducts"
import {  Hero } from "@modules/custom/components/HomeProductsReversed"
import { Subscription } from "@modules/custom/components/subscribtion"
import FeaturedProducts from "@modules/home/components/featured-products"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Товари від вітчизняних виробників. Доставка по Україні, Києву та Київській області"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      {/* <Hero /> */}
      <Hero/>
      {/* <Carousel/> */}
      <FeaturedProducts />
      {/* <HomeProducts/> */}
      <FAQ/>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
