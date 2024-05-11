import Link from "next/link";

export default function Hero() {
    return (
        <article className="flex flex-col justify-center items-center h-screen">
            <h1 className="h1">Dickie Mellie</h1>
            <Link className="btn-primary" href={'/shop'}>Shop</Link>
        </article>
    )
}