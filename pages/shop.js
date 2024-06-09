import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import Pagination from "@/components/Pagination";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useEffect, useState } from "react";

export default function ShopPage({ featuredProduct, newProducts, currentPage, totalPages }) {
  const [page, setPage] = useState(1);
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const productsPerPage = 9;

  const handlePageChange = (newPage) => {
    setPage(newPage);
    
    const skip =  (page - 1) * productsPerPage
    const limit =  productsPerPage
    const tempArray = newProducts
    setProductsToDisplay(tempArray.slice(skip, limit))
    console.log(productsToDisplay)
  };

  useEffect(() => {
    const skip =  (page - 1) * productsPerPage
    const limit =  productsPerPage
    const tempArray = newProducts
    setProductsToDisplay(tempArray.slice(skip, limit))
  }, [])

  console.log(productsToDisplay)

  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      {productsToDisplay && (
        <NewProducts products={productsToDisplay}/>
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
  await mongooseConnect()
  const featuredProduct = await Product.findById(featuredProductId)

  const page = parseInt(query.page) || 1;  
  const productsPerPage = 9;
  const totalProducts = await Product.countDocuments(); 
  console.log(totalProducts)
  const totalPages = Math.ceil(totalProducts / productsPerPage); 

  const newProducts = await Product.find({}, null, {
    sort: { '_id': -1 }
  });

  console.log(newProducts)

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      currentPage: page,
      totalPages,
    },
  };
}