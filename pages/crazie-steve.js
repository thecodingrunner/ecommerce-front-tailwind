import Header from "@/components/Header";
import {CrazieSteve} from '../content/SteveContent'
import FeaturedDisplay from "@/components/FeaturedDisplay";
import PageItems from '@/components/PageItems'
import NewProducts from "@/components/NewProducts";

export default function ScribbleDogsPage() {
    function checkTarget(e) {
        console.log(e.target.innerText)
    }
    return (
        <>
            <div>
            <Header />
            <FeaturedDisplay product={CrazieSteve[0]}/>
            <PageItems products={CrazieSteve.slice(1)} onClick={checkTarget}/>
            </div>
        </>
    )
}