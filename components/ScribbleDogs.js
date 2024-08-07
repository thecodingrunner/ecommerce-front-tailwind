import Link from "next/link";
// import dog from '../public/dogs/goggi45.jpg'
import dog from '../public/dog1-nobg-test1-min.png'

export default function Hero() {
    console.log(dog.src)
    return (
        <article className="hero-large mt-10 relative">
            <img src={dog.src} className="h-4/5 sm:h-full absolute right-0 bottom-0 z-0 bg-transparent" fetchpriority="high" />
            <h1 className="h2 text-center z-10 mb-2 text-white p-2 bg-black bg-opacity-50 sm:text-black sm:bg-transparent">Scribble Dogs</h1>
            <Link className="btn-primary text-2xl z-10" href={'/scribble-dogs'}>Explore</Link>
        </article>
    )
}