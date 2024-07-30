import Header from "@/components/Header";
import {CrazySteve} from '../content/SteveContent'
import FeaturedDisplay from "@/components/FeaturedDisplay";
import PageItems from '@/components/PageItems'
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";

export default function ScribbleDogsPage() {
    function checkTarget(e) {
        console.log(e.target.innerText)
    }
    return (
        <>
            <div>
            <Header />
            <FeaturedDisplay product={CrazySteve[0]}/>
            <PageItems products={CrazySteve.slice(1)} onClick={checkTarget}/>
            <Footer />
            </div>
        </>
    )
}