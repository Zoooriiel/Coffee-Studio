import React from 'react'
import shopBanner from '../assets/Shop-banner.jpg'

const ShopBanner = () => {
  return (
    <div className=''>
    <img
      src={shopBanner}
      alt="Banner Image"
      className="w-full h-[55vh] object-cover"
    />
  </div>
  )
}

export default ShopBanner
