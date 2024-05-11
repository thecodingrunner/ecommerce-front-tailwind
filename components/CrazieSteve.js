import Link from "next/link";
import steve1 from '../public/steve/alway in the wrong queue.JPG'

export default function Hero() {
    return (
        <article className="hero">
            <h1 className="h1">Crazy Steve</h1>
            <Link className="btn-primary" href={'/crazie-steve'}>Explore</Link>
            <img src={steve1} alt=""/>
        </article>
    )
}