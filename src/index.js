import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@arco-design/web-react/dist/css/arco.css";
import App from './App';
import Layout from './Layout';
import Register from "./register.jsx"
import Login from "./login.jsx"
import Search from "./search.jsx"
import ProductInfo from './productinfo.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


//document.body.setAttribute('arco-theme', 'dark');
//document.body.removeAttribute('arco-theme');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<App/>} />
        <Route path="productinfo" element={<ProductInfo/>} />
        <Route path="search" element={<Search/>} />
        </Route>
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
