import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='w-[380px] h-[550px] bg-white rounded-lg'>
      <img src={props.img} alt={props.name} className='w-full h-[400px] object-cover rounded-t-md'/>
      <div className='p-6 flex flex-col justify-center gap-1 text-lg'>
        <h3>Product type</h3>
        <a className='font-bold' href="">{props.name}</a>
        <p className='font-light'>${props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
