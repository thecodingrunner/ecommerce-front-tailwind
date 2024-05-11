import Link from "next/link";

export default function Hero() {
    return (
        <article className="hero">
            <h1 className="h1">Very Short Stories</h1>
            <Link className="btn-primary" href={'/very-short-stories'}>Explore</Link>
        </article>
    )
}