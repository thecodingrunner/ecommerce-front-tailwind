import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import Pagination from "@/components/Pagination";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { connectToDB } from "@/utils/database";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ShopPage({ featuredProduct, totalPages }) {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(null)
  const productsPerPage = 9;

  useEffect(() => {
    async function getCurrentPage() {
      if (page === 1) {
        handlePageChange(1)
      }
    }
    getCurrentPage()
  },[])

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const skip =  (newPage - 1) * productsPerPage
    // const limit =  productsPerPage
    // const tempArray = newProducts
    async function getProducts() {
      const response = await fetch(`/api/products/${skip}/`)
      console.log(response)
      let products = await response.json();
      products = JSON.parse(products)
      console.log(products)
      setProducts(products)
    }
    getProducts()
    window.scrollTo(0, 0)
  };

  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      {products && (
        <NewProducts products={products}/>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const featuredProductId = '6662eea5aa968a347bef75f4'
  await connectToDB()
  const featuredProduct = await Product.findById(featuredProductId)

  const productsPerPage = 9;
  const totalProducts = await Product.countDocuments(); 
  const totalPages = Math.ceil(totalProducts / productsPerPage); 

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      // newProducts: JSON.parse(JSON.stringify(newProducts)),
      // currentPage: page,
      totalPages,
    },
  };
}