import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

export default function Featured({product}) {
    console.log(product.images[0])
    const {addProduct} = useContext(CartContext)
    function addFeaturedToCart() {
        addProduct(product._id)
    }
  return (
    <div className="grid grid-cols-2 mx-auto w-9/12 pt-10">
        <div className="flex justify-center align-center flex-col">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="flex gap-3 mt-3">
                <Link href={'/product/' + product._id} className="btn-primary">Read more</Link>
                <button className="flex btn-primary" onClick={addFeaturedToCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
        <div className="responsive h-auto">
            <img src={product.images[0]} alt={product._id} className="object-contain" />
        </div>
    </div>
  );
}


