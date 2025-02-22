import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import App from './App.jsx'

import HomePage from "./pages/HomePage";
import ProductPage from './pages/ProductPage.jsx';
import CheckoutPage from "./pages/CheckoutPage.jsx";

// import ModelView from "./pages/ModelView.jsx";
// R3F not compatible with react 19

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="ProductPage" element={<ProductPage/>}></Route>
      {/* <Route path="ModelView" element={<ModelView/>}></Route> */}
      <Route path="CheckoutPage" element={<CheckoutPage/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
