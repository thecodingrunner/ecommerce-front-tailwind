import Image from "next/image";
import Link from "next/link";

export default function Featured({product}) {
  console.log(product)
  return (
    <div className="grid md:grid-cols-2 mx-auto w-9/12 pt-10 sm:grid-cols-1">
        <div className="flex justify-center flex-col">
            <h1 className="h2 sm:h1 mb-4">{product.title}</h1>
            <div className="desc">{product.description.split(/\n/g).map(s => (
              <p key={product.id}>{s}</p>
            ))}</div>
        </div>
        <div className="md:flex justify-center items-center hidden">
          <Image src={product.image.src} alt={product.title} className="max-h-96" />
        </div>
    </div>
  );
}