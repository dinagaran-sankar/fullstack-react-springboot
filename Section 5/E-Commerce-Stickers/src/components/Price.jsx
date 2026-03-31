import React from 'react'

const Price = ({ currency,price }) => {
  return (
         <>
           {currency}
           <span>{price}</span>
        </>
  )
}

export default Price
