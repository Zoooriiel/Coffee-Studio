import React from 'react'
import ShopBanner from '../components/ShopBanner'
import CoffeeList from './CoffeeList'
import Filters from '../components/Filters'

const Shop = () => {
  return (
    <div className='w-screen'>
      <ShopBanner />
      <Filters />
      <CoffeeList />
    </div>
  )
}

export default Shop
