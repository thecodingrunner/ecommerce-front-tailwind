import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from "mongoose";
import { useContext } from "react";

export default function ProductPage({product}) {
    const {addProduct} = useContext(CartContext)
    return (
        <>
            <Header />
            <div className="grid grid-cols-2 gap-10 w-9/12 mx-auto">
                <div>
                    <img src={product.images[0]} className="rounded-lg"/>
                </div>
                <div>
                    <h1 className="h1 mb-10">{product.title}</h1>
                    <p className="desc mb-10">{product.description}</p>
                    <div className="flex justify-between items-center px-3">
                        <p className="text-lg">£{product.price}</p>
                        <button onClick={() => addProduct(product._id)} className="btn-primary">Add to cart</button>
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