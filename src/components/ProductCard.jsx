import React from 'react'
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();

  
  return (
    <div className='w-[380px] h-[550px] bg-white rounded-lg'>
      <img 
      onClick={() => navigate(`/product/${props.id}`)} 
      src={props.img} alt={props.name} 
      className='w-full h-[400px] object-cover rounded-t-md cursor-pointer'
      />
      <div className='p-6 flex flex-col justify-center gap-1 text-lg'>
        <h3>Product type</h3>
        <span 
        onClick={() => navigate(`/product/${props.id}`)} 
        className='font-bold cursor-pointer' 
        >{props.name}
        </span>
        <p className='font-light'>${props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
