import Link from "next/link";

export default function Featured({product}) {
  console.log(product)
  return (
    <div className="featured-container mx-auto w-9/12 pt-10">
        <div className="flex justify-center align-center flex-col">
            <h1 className="h1 mb-4">{product.title}</h1>
            <p className="desc">{product.description}</p>
        </div>
        <img src={product.image.src} alt=""></img>
    </div>
  );
}