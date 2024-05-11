import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function Header() {
    const {cartProducts} = useContext(CartContext)
    return (
        <div className="px-10 py-10 flex justify-between text-xl">
            <Link href={'/'}>Dickie Mellie</Link> 
            <nav className="flex gap-8">
                <Link href={'/'}>Home</Link>
                <Link href={'/scribble-dogs'}>Scribble Dogs</Link>
                <Link href={'/very-short-stories'}>Very Short Stories</Link>
                <Link href={'/crazie-steve'}>Crazie Steve</Link>
                <Link href={'/shop'}>Shop</Link>
                <Link href={'/cart'}>Cart ({cartProducts.length})</Link>
            </nav>
        </div>
    )
}