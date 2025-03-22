import React from 'react'
import ShopBanner from '../components/ShopBanner'
import CoffeeList from './CoffeeList'
import Dropdown from '../components/Dropdown'

const Shop = () => {
  return (
    <div className='w-screen'>
      <ShopBanner />
      <Dropdown />
      <CoffeeList />
    </div>
  )
}

export default Shop
