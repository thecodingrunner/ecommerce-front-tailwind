import ProductBox from "./ProductBox";

export default function NewProducts({products}) {
    console.log(products)
    return (
        <div className="grid grid-cols-3 gap-5 mx-auto w-9/12 my-10">
            {products.length > 0 && products.map(product => (
                <ProductBox product={product} key={product._id} />
            ))}
        </div>
    )
}