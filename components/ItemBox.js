import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ItemBox({product}) {
    console.log(product.id)

    return (
        <div className={`h-80 flex justify-center ${(product.id.includes('steve') || product.id.includes('letter')) ? "h-96" : "h-60"}`}>
            <img src={product.image.src} alt={product.id} className="max-h-full shadow-md object-contain" />
        </div>
    )
}