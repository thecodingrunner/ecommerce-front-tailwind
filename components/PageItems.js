import ItemBox from "./ItemBox";

export default function NewProducts({products}) {
    console.log(products[0].id)
    return (
        <div className="grid xl:grid-cols-3 gap-5 mx-auto w-9/12 my-10 sm:grid-cols-1 lg:grid-cols-2">
            {products.length > 0 && products.map(product => (
                <ItemBox product={product} />
            ))}
        </div>
    )
}