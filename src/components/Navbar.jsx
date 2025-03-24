import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import SearchBar from './SearchBar';

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();
  const searchBarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(searchBarRef.current && !searchBarRef.current.contains(event.target)){
        setSearchBar(false);
      }  
    }
    
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  

  return (
    <div className='font-bold navbar flex justify-between items-center px-8 py-2 h-24 bg-white fixed w-full z-10'>
      
      <div className='flex space-x-6 justify-start flex-1'>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/learn'>Learn</NavLink>
        <NavLink to='/coffeeexperience'>Coffee Experience</NavLink>
      </div>

      <div className='navbar-center'>
      <NavLink to='/'><img src={logo} alt="Coffee Studio" width="90px"/></NavLink>
      </div>

      <div className='flex flex-1 justify-end items-center space-x-6'>
      <span>Singapore (SGD $)</span>
      
      <button ref={searchBarRef} className='cursor-pointer' onClick={() => setSearchBar(true)}>{searchBar ? <SearchBar /> : <HiMiniMagnifyingGlass color="#341c02" size={24} />}</button>

      <button className='cursor-pointer' onClick={() => navigate("/shop")}><IoCartOutline    color="#341c02" size={24} /></button>

      <button className='cursor-pointer' onClick={() => navigate("/shop")}><AiOutlineUser  color="#341c02" size={24} /></button>
      </div>
      
    </div>
  )
}

export default Navbar
