import React from "react";
import AppLayout from "./AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./dashboard/DashboardLayout";
import Categories from "./dashboard/Categories";
import About from "./pages/About";
import AddCategory from "./dashboard/AddCategory";
import AddProduct from "./dashboard/AddProduct";
import ProductTable from "./dashboard/ProductTable";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<About/>}></Route>
            <Route path="/" element={<Products />}></Route>
            <Route path="/" element={<Contact />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="categories" element={<Categories />}></Route>
            <Route path="categories/addcategory" element={<AddCategory />}></Route>
            <Route path="products" element={<ProductTable />}></Route>
            <Route path="products/addproducts" element={<AddProduct />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
