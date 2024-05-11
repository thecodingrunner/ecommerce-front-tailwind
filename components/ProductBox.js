import { useContext } from "react"
import { CartContext } from "./CartContext"
import Link from "next/link"

export default function ProductBox({product}) {
    console.log(product)
    const {addProduct} = useContext(CartContext)
    return (
        <Link href={'/product/'+product._id}>
            <div className="h-52 flex justify-center">
                <img src={product.images[0]} alt='' className="max-h-full" />
            </div>
            <div className="px-3 mt-6">{product.title}</div>
            <div className="flex justify-between items-center px-3">
                <p className="text-lg">£{product.price}</p>
                <button onClick={() => addProduct(product._id)} className="btn-primary">Add to cart</button>
            </div>
        </Link>
    )
}