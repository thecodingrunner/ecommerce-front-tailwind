import Header from "@/components/Header";
import {ScribbleDogs} from '../content/Items'
import FeaturedDisplay from "@/components/FeaturedDisplay";
import PageItems from '@/components/PageItems'
import NewProducts from "@/components/NewProducts";

export default function ScribbleDogsPage() {
    console.log(ScribbleDogs[0])
    return (
        <div>
          <Header />
          <FeaturedDisplay product={ScribbleDogs[0]}/>
          <PageItems products={ScribbleDogs.slice(1)}/>
        </div>
    )
}