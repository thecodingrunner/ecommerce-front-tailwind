import Header from "@/components/Header";
import {Letters} from '../content/Items'
import FeaturedDisplay from "@/components/FeaturedDisplay";
import PageItems from '@/components/PageItems'
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import About from "@/components/About"

export default function ScribbleDogsPage() {
    console.log(Letters[0])
    return (
        <div>
          <Header />
          <About />
          <FeaturedDisplay product={Letters[0]}/>
          <PageItems products={Letters.slice(1)}/>
          <Footer />
        </div>
    )
}