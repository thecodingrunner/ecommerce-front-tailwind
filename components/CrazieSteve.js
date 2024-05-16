import Link from "next/link";
import { CrazieSteve } from "@/content/Items";

export default function Hero() {
    console.log(CrazieSteve[8].image.src)
    return (
        <article className="hero relative">
            <div className="z-10 text-center background">
                <h1 className="h1 text-white">Crazy Steve</h1>
                <Link className="btn-primary text-2xl" href={'/crazie-steve'}>Explore</Link>
            </div>
            <img src={CrazieSteve[0].image.src} className="crazy-hero crazy-1"/>
            <img src={CrazieSteve[7].image.src} className="crazy-hero crazy-2"/>
            <img src={CrazieSteve[8].image.src} className="crazy-hero crazy-3"/>
            <img src={CrazieSteve[9].image.src} className="crazy-hero crazy-4"/>
        </article>
    )
}