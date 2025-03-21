import React from 'react'
import logo from "../assets/logo.png"
import magnifyingGlass from "../assets/magnifying-glass.svg"
import shoppingCart from "../assets/shopping-cart.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar h-38 bg-white fixed w-full z-10'>
      <div className='navbar-left'>
      <ul>
        <NavLink to='/shop'><li>Shop</li></NavLink>
        <NavLink to='/learn'><li>Learn</li></NavLink>
        <NavLink to='/coffeeexperience'><li>Coffee Experience</li></NavLink>
      </ul>
      </div>

      <div className='navbar-center'>
      <NavLink to='/'><img src={logo} alt="Coffee Studio" width="150px"/></NavLink>
      </div>

      <div className='navbar-right'>
      <ul>
      <li>Singapore (SGD $)</li>
      <li><img src={magnifyingGlass} alt="Magnifying Glass" width="24px" height="24px" /></li>
      <li><img src={shoppingCart} alt="Shopping Cart" width="24px" height="24px" /></li>
      </ul>
      </div>
      
    </div>
  )
}

export default Navbar
