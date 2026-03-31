import React from 'react';

const StickerShopButtonBootStrap = ({text,type}) => {
  return (
  <>
      <button className={`btn btn-${type}`}>{text}</button>
  </>
  )
}

export default StickerShopButtonBootStrap;
