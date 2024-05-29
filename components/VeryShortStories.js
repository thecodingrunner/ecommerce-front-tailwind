import Link from "next/link";
import {VeryShortStories} from '../content/Items'
import fury from '../public/fury_nobg.png'
import dream from '../public/dream_nobg.png'
import follower from '../public/follower_nobg.png'
import Image from "next/image";

export default function Hero() {
    console.log(VeryShortStories[6].image.src)
    console.log(VeryShortStories[1].image.src)
    return (
        <article className="hero relative overflow-hidden">
            <h1 className="h1 z-10 text-center">Very Short Stories</h1>
            <Link className="btn-primary z-10 text-2xl" href={'/very-short-stories'}>Explore</Link>
            <Image src={dream.src} alt='dream' className="h-full absolute left-3/4 -bottom-6 lg:block hidden"/>
            <Image src={follower.src} alt="follower" className="h-full absolute left-2/6 -bottom-3 lg:block hidden"/>
            <Image src={fury.src} alt="fury" className="h-full absolute lg:left-3 -bottom-0"/>
            {/* <Image src={VeryShortStories[1].image.src} className="h-full absolute left-3/4 -bottom-6 lg:block hidden"/>
            <Image src={VeryShortStories[3].image.src} className="h-full absolute left-2/6 -bottom-3 lg:block hidden"/>
            <Image src={VeryShortStories[6].image.src} className="h-full absolute lg:left-3 -bottom-0"/> */}
        </article>
    )
}