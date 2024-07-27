"use client"

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import shopBackground from '../public/ShopBackground-min.png'

export default function Featured() {

    let scrollToProducts
    if(typeof document !== "undefined") {
        scrollToProducts = document.getElementById("products");
    }

  return (
    <>
        <div className="w-[90vw] md:w-4/5 lg:w-3/4 mx-auto h-[50vh] bg-white mt-10 rounded-xl overflow-hidden relative flex justify-center items-center">
            <img src={shopBackground.src} alt='Shop Background' className="h-full w-full object-cover absolute left-0 top-0 z-0" />
            <h1 className="text-4xl sm:text-6xl md:text-8xl z-20 font-bold text-white">Shop</h1>
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-10" />
        </div>
        <div className="mx-auto text-center">
            <h2 className="mt-10 text-3xl">View Shop</h2>
            <button onClick={() => {
                if (scrollToProducts) {
                    scrollToProducts.scrollIntoView({ behavior: "smooth" })
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-28">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
        <div id="test" />
    </>
  );
}


