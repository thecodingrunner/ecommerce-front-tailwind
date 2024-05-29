import Header from "@/components/Header";
import {Letters} from '../content/Items'
import FeaturedDisplay from "@/components/FeaturedDisplay";
import PageItems from '@/components/PageItems'
import NewProducts from "@/components/NewProducts";

export default function ScribbleDogsPage() {
    console.log(Letters[0])
    return (
        <div>
          <Header />
          <FeaturedDisplay product={Letters[0]}/>
          <PageItems products={Letters.slice(1)}/>
        </div>
    )
}