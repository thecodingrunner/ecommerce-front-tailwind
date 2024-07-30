import Link from "next/link";
import {VeryShortStories} from '../content/Items'
// import fury from '../public/fury_nobg.png'
// import dream from '../public/dream_nobg.png'
// import follower from '../public/follower_nobg.png'
// import Image from "next/image";

export default function Hero() {
    // console.log(dream)
    // console.log(VeryShortStories[1].image.src)
    return (
        <article className="hero relative overflow-hidden my-10">
            <h1 className="h2 z-10 mb-2 text-center text-white p-2 bg-black bg-opacity-50 sm:text-black sm:bg-transparent">Very Short Stories</h1>
            <Link className="btn-primary z-10 text-2xl" href={'/very-short-stories'}>Explore</Link>
            {/* <Image src={dream.src} alt='dream' height={dream.height} width={dream.width/2.2} className="h-full absolute left-2/3 -bottom-6 lg:block hidden"/>
            <Image src={follower.src} alt="follower" height={follower.height} width={follower.width} className="h-full absolute left-2/6 -bottom-3 lg:block hidden"/>
            <Image src={fury.src} alt="fury" height={fury.height} width={fury.width} className="h-full absolute lg:left-3 -bottom-0"/> */}
            {/* <img src={VeryShortStories[1].image.src} height={VeryShortStories[1].image.src.height} width={VeryShortStories[1].image.src.width} className="h-full absolute left-3/4 -bottom-6 lg:block hidden"/> */}
            <img src={VeryShortStories[3].image.src} height={VeryShortStories[3].image.src.height} width={VeryShortStories[3].image.src.width} className="h-full absolute left-[70vw] -bottom-3 lg:block hidden"/>
            <img src={VeryShortStories[6].image.src} height={VeryShortStories[6].image.src.height} width={VeryShortStories[6].image.src.width} className="h-full absolute lg:left-32 -bottom-0"/>
        </article>
    )
}