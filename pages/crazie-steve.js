import Header from "@/components/Header";
import {CrazieSteve} from '../content/Items'
import FeaturedDisplay from "@/components/FeaturedDisplay";
import PageItems from '@/components/PageItems'
import NewProducts from "@/components/NewProducts";
import PreloadSteveImages from "@/components/PreloadImages";

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