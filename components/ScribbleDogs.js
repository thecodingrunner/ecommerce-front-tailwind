import Link from "next/link";
import dog from '../public/dogs/goggi45.jpg'

export default function Hero() {
    return (
        <article className="hero background-image-dog">
            <h1 className="h1">Scribble Dogs</h1>
            <Link className="btn-primary" href={'/scribble-dogs'}>Explore</Link>
        </article>
    )
}