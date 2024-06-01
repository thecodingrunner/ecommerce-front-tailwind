import Link from "next/link";
import dog from '../public/dogs/goggi45.jpg'

export default function Hero() {
    return (
        <article className="hero background-image-dog">
            <h1 className="h2 text-center">Scribble Dogs</h1>
            <Link className="btn-primary text-2xl" href={'/scribble-dogs'}>Explore</Link>
        </article>
    )
}