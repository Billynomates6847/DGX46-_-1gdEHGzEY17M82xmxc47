import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./pages/home/Home";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";
import User from "./pages/home/user/User";
import NewUser from "./pages/home/newUser/NewUser";
import ProductList from "./pages/home/productList/ProductList";
import Product from "./pages/home/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";



function App() {
  return (
    <Router>
      <Topbar/>
<div className ="container">
  <Sidebar/>
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/users">
      <UserList />
    </Route>
    <Route path="/user/:userId">
      <User />
    </Route>
    <Route path="/newUser">
      <NewUser />
    </Route>
    <Route path="/products">
      <ProductList />
    </Route>
    <Route path="/product/:productsId">
      <Product />
    </Route>
    <Route path="/newproduct">
      <NewProduct />
    </Route>
</Switch>
</div>
    </Router>
  );
}

export default App;
