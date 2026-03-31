import React from 'react';
import Price from './Price';

const ProductCard = ({ product }) => {
  return (
    <div className='container-productcard'>
        <div className='container-productcardGrid'>
            <img src={product.imageUrl} alt={product.name}  className='productCardImages'/>
        </div>
       <div className='productCardDetails'>
          <h2 className='product-card-title'>{product.name}</h2>
          <p className='.product-card-description'>{product.description}</p>
       <div className='productCardFooter'>
       <div className='productCardPrice'>
           <Price currency="$" price={product.price}></Price>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ProductCard
