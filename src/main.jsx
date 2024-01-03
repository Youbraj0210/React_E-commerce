import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory category="men"/>}/>
      <Route path='/women' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productid' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
