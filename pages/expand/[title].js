"use client"

import Header from "@/components/Header"
import { CrazieSteve, ScribbleDogs, VeryShortStories } from "@/content/Items"
import { usePathname } from "next/navigation"

export default function ExpandedView(product) {
    console.log(product.product)
    return (
        <>
            <Header />
            <div className="display-container">
                <div className="img-container">
                    <img src={product.product.image.src} alt="" className="h-full"/>
                </div>
                <div>
                    <h1 className="h1 text-center">{product.product.title}</h1>
                    <p className="desc">{product.product.description}</p>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const {title} = context.query
    let product
    if (title.includes('story')) {
        product = VeryShortStories.filter(story => story.title === title)[0];
    }
    if (title.includes('dog')) {
        product = ScribbleDogs.filter(story => story.title === title)[0]
    }
    if (title.includes('steve')) {
        product = CrazieSteve.filter(story => story.title === title)[0]
    }
    return {
        props: {
            product,
        }
    }
}