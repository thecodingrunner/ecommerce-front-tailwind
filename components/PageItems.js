import { useState } from "react";
import ItemBox from "./ItemBox";
import Modal from "./Modal";



export default function NewProducts({products}) {
    const [openModal, setOpenModal] = useState(null)

    console.log(products[0].id)
    return (
        <div className="grid xl:grid-cols-3 gap-5 mx-auto w-9/12 my-10 sm:grid-cols-1 lg:grid-cols-2">
            {products.length > 0 && products.map((product) => (
                <button onClick={() => setOpenModal(product)}>
                    <ItemBox product={product} />
                </button>
            ))}
            <Modal openModal={openModal} setOpenModal={setOpenModal} products={products} />
        </div>
    )
}