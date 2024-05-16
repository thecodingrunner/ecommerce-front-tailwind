"use client"

import Header from "@/components/Header"
import { CrazieSteve, ScribbleDogs, VeryShortStories } from "@/content/Items"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ExpandedView(product) {
    console.log(product)
    // function goBack() {
    //     window.history.back();
    // }
    return (
        <>
            <Header />
            <div className={product.product.id.includes("dog") ? "display-container-image" : "display-container"} >
                <div className="img-container">
                    <img src={product.product.image.src} alt="" className="h-full object-contain"/>
                </div>
                <div className="relative p-6">
                    <a href='javascript:window.history.back()' className="cross-pos">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </a>
                    <h1 className="h2 text-center mb-10">{product.product.title}</h1>
                    <p className="desc text-center leading-8">{product.product.description.split(/\n/g).map(s => (
                        <p>{s}</p>
                    ))}</p>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const {id} = context.query
    let product
    if (id.includes('story')) {
        product = VeryShortStories.filter(story => story.id === id)[0];
    }
    if (id.includes('dog')) {
        product = ScribbleDogs.filter(story => story.id === id)[0]
    }
    if (id.includes('steve')) {
        product = CrazieSteve.filter(story => story.id === id)[0]
    }
    return {
        props: {
            product,
        }
    }
}