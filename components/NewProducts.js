import ProductBox from "./ProductBox";

export default function NewProducts({ products }) {
    console.log(products);
    return (
        <>
            {products && (
                <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-9/12 my-10">
                    {Array.isArray(products) && products?.length > 0 ? (
                        products.map((product, index) => (
                            <ProductBox product={product} key={product._id} index={index} />
                        ))
                    ) : (
                        <div>No products found</div>
                    )}
                </div>
            )}
        </>
    )
}