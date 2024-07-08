import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import ProductPage from './Components/Products/ProductPage/ProductPage';
import ContactUs from './Components/ContactUs/ContactUs';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import PrivacyPolicy from './Components/PrivacyPolicies/PrivacyPolicy';

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='product-page/:productId' element={<ProductPage/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='category/:type' element={<CategoryPage/>}/>
      <Route path='privacy-policies' element={<PrivacyPolicy/>}/>

    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

