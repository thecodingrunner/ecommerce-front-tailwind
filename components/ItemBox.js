import Link from "next/link";

export default function ItemBox({product}) {
    return (
        <Link href={'/expand/'+product.title}>
            <div className="h-52 flex justify-center">
                <img src={product.image.src} alt='' className="max-h-full shadow-md" />
            </div>
            {/* <div>
                <h1 className="px-3 mt-6 h2 text-center">{product.title}</h1>
            </div> */}
        </Link>
    )
}