import React from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Learn from './pages/Learn'
import CoffeeExperience from './pages/CoffeeExperience'
import CoffeeList from './pages/CoffeeList'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Product from './pages/Product'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='learn' element={<Learn />} />
        <Route path='coffeeexperience' element={<CoffeeExperience />} />
        <Route path='coffeeList' element={<CoffeeList />}/>
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='place-order' element={<PlaceOrder />} />
        <Route path='orders' element={<Orders />} />
        <Route path='product/:productId' element={<Product />} />
    </Route>
  )
);

  return (
    <RouterProvider router={router} />
  )
}

export default App
