import ItemBox from "./ItemBox";

export default function NewProducts({products}) {
    return (
        <div className="grid grid-cols-3 gap-5 mx-auto w-9/12 my-10">
            {products.length > 0 && products.map(product => (
                <ItemBox product={product} />
            ))}
        </div>
    )
}