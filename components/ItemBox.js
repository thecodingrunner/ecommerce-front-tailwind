import Link from "next/link";
import { useState } from "react";

export default function ItemBox({product}) {
    console.log(product.id)

    return (
            <div className={`${(product.id.includes('steve') || product.id.includes('letter')) ? "h-86" : "h-60"} flex justify-center`}>
                <img src={product.image.src} alt='' className="max-h-full shadow-md" />
            </div>
    )
}