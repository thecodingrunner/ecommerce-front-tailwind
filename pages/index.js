import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ScribbleDogs from "@/components/ScribbleDogs";
import VeryShortStories from "@/components/VeryShortStories";
import CrazySteve from "@/components/CrazySteve";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Footer from "@/components/Footer";

export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <CrazySteve />
      <ScribbleDogs />
      <VeryShortStories />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '663cba8663ecd304fa6cc608'
  await mongooseConnect()
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({},null,{sort:{'_id':-1}, limit:10})
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },
  }
}