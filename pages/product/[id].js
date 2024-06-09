import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from "mongoose";
import Image from "next/image";
import { useContext } from "react";

export default function ProductPage({product}) {
    const {addProduct} = useContext(CartContext)
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-9/12 mx-auto mb-20 mt-10">
                <div className="shadow-lg rounded-lg h-[60vh] bg-white overflow-hidden flex items-center">
                    <img src={product.images[0]} className="h-[60vh] object-cover" alt={product.title}/>
                </div>
                <div>
                    <h1 className="h2 mb-10">{product.title}</h1>
                    <div className="desc mb-10">{product.description.split('\n').map(desc => (
                        <p>{desc}</p>
                    ))}</div>
                    <div className="flex justify-between items-center px-3">
                        <p className="desc">£{product.price}</p>
                        <button onClick={() => addProduct(product._id)} className="btn-primary desc flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnect()
    const {id} = context.query
    const product = await Product.findById(id)
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}