import Link from "next/link";

export default function Hero() {
    // console.log(steveBackground)
    return (
        <article className="hero relative crazy-hero">
            <div className="z-10 text-center background">
                <h1 className="h2 text-white">Crazy Steve</h1>
                <Link className="btn-primary text-2xl" href={'/crazy-steve'}>Explore</Link>
            </div>
        </article>
    )
}