import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import logo from '../public/logo1.jpg'
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
        <div className="px-2 py-2 sm:px-10 sm:py-6 flex justify-between text-xl">
            <Link href={'/'} className="flex flex-col gap-1 items-center justify-center"><img src={logo.src} alt="logo" className="rounded-full h-32"/>Home</Link> 
            <nav className="lg:gap-8 items-center hidden md:gap-2">
                {/* <Link href={'/'} className="header-list">Home</Link> */}
                <Link href={'/crazy-steve'} className={`header-list ${pathname === '/crazy-steve' ? 'text-white bg-black' : 'bg-white'}`}>Crazy Steve</Link>
                <Link href={'/scribble-dogs'} className={`header-list ${pathname === '/scribble-dogs' ? 'text-white bg-black' : 'bg-white'}`} >Scribble Dogs</Link>
                <Link href={'/very-short-stories'} className={`header-list ${pathname === '/very-short-stories' ? 'text-white bg-black' : 'bg-white'}`} >Very Short Stories</Link>
                <Link href={'/letters'} className={`header-list ${pathname === '/letters' ? 'text-white bg-black' : 'bg-white'}`}>My Attempt To...</Link>
                <Link href={'/about'} className={`header-list ${pathname === '/about' ? 'text-white bg-black' : 'bg-white'}`}>About</Link>
                <Link href={'/shop'} className={`header-list font-bold ${pathname === '/shop' ? 'text-white bg-black' : 'bg-white'}`}>Shop</Link>
                <Link href={'/cart'} className={`header-list ${pathname === '/cart' ? 'text-white bg-black' : 'bg-white'}`}>Cart ({cartProducts.length})</Link>
            </nav>

            <div className="flex items-center z-50" onClick={toggleView}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className={`${view ? 'top-0' : '-top-[130vh]'} flex flex-col absolute left-0 w-full z-40 bg-white gap-6 text-2xl text-center items-center pt-10 pb-10 border-b-2 border-black transition-all ease-in-out duration-1000`}>
                <Link href={'/'} className={`header-list ${pathname === '/' ? 'text-white bg-black' : 'bg-white'}`}>Home</Link>
                <Link href={'/crazy-steve'} className={`header-list ${pathname === '/crazy-steve' ? 'text-white bg-black' : 'bg-white'}`}>Crazy Steve</Link>
                <Link href={'/scribble-dogs'} className={`header-list ${pathname === '/scribble-dogs' ? 'text-white bg-black' : 'bg-white'}`} >Scribble Dogs</Link>
                <Link href={'/very-short-stories'} className={`header-list ${pathname === '/very-short-stories' ? 'text-white bg-black' : 'bg-white'}`} >Very Short Stories</Link>
                <Link href={'/letters'} className={`header-list ${pathname === '/letters' ? 'text-white bg-black' : 'bg-white'}`}>My Attempt To...</Link>
                <Link href={'/about'} className={`header-list ${pathname === '/about' ? 'text-white bg-black' : 'bg-white'}`}>About</Link>
                <Link href={'/shop'} className={`header-list ${pathname === '/shop' ? 'text-white bg-black' : 'bg-white'}`}>Shop</Link>
                <Link href={'/cart'} className={`header-list ${pathname === '/cart' ? 'text-white bg-black' : 'bg-white'}`}>Cart ({cartProducts.length})</Link>
                <h3>dickiemellie@gmail.com</h3>
            </div>
        </div>
    )
}

