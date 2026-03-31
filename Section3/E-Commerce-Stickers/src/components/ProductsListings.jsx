import React from 'react'
import ProductCard from "./ProductCard";

const ProductsListings = ({ products }) => {
  return (
    <div className="container-pageListings">
        <div className="container-pageListingGrid">
        { products.length>0 ? (
                products.map((product)=>
                    <ProductCard key= {product.productId} product = {product}/>)
                ) :
                (
                    <p className="products-empty">No Record Found</p>
                )
        }
        </div>
    </div>
  )
}

export default ProductsListings
