import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import logo from '../public/logo.jpg'
import { usePathname } from "next/navigation";

export default function Header() {
    console.log(logo)
    const {cartProducts} = useContext(CartContext)
    let pathname = usePathname()
    const [view, setView] = useState(false)
    function toggleView() {
        setView(prev => !prev)
    }
    return (
        <div className="px-10 py-6 flex justify-between text-xl">
            <Link href={'/'}><img src={logo.src} alt="logo" className="rounded-full h-28"/></Link> 
            <nav className="lg:flex gap-8 items-center hidden">
                {/* <Link href={'/'} className="header-list">Home</Link> */}
                <Link href={'/scribble-dogs'} className={`header-list ${pathname === '/scribble-dogs' ? 'text-white bg-black' : 'bg-white'}`} >Scribble Dogs</Link>
                <Link href={'/very-short-stories'} className={`header-list ${pathname === '/very-short-stories' ? 'text-white bg-black' : 'bg-white'}`} >Very Short Stories</Link>
                <Link href={'/crazie-steve'} className={`header-list ${pathname === '/crazie-steve' ? 'text-white bg-black' : 'bg-white'}`}>Crazie Steve</Link>
                <Link href={'/letters'} className={`header-list ${pathname === '/letters' ? 'text-white bg-black' : 'bg-white'}`}>Letters</Link>
                <Link href={'/shop'} className={`header-list font-bold ${pathname === '/shop' ? 'text-white bg-black' : 'bg-white'}`}>Shop</Link>
                <Link href={'/cart'} className={`header-list ${pathname === '/cart' ? 'text-white bg-black' : 'bg-white'}`}>Cart ({cartProducts.length})</Link>
            </nav>

            <div className="flex items-center lg:hidden z-20" onClick={toggleView}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className={`${view ? 'flex' : 'hidden'} flex-col absolute top-0 left-0 w-full z-10 bg-white gap-10 text-2xl text-center pt-10 pb-10`}>
                <Link href={'/scribble-dogs'} className={``} >Scribble Dogs</Link>
                <Link href={'/very-short-stories'} className={``} >Very Short Stories</Link>
                <Link href={'/crazie-steve'} className={``}>Crazy Steve</Link>
                <Link href={'/shop'} className={``}>Shop</Link>
                <Link href={'/cart'} className={``}>Cart ({cartProducts.length})</Link>
            </div>
        </div>
    )
}

