import "./App.css";
import React from "react";
import ProductList from "./components/ProductList/ProductList.jsx";
import Searchproductlist from "./components/searchproduct/Searchproductlist";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProduk from "./components/DetailProduk/DetailProduk";
import Stripecontainer from "./components/paymentform/Stripecontainer";
import Likeproductlist from "./components/likeproduct/Likeproductlist";
import Favorite from "./components/likeproduct/Favorite";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/searchproductlist" element={<Searchproductlist />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/favproduct" element={<Favorite />} />
          <Route path="/likeproductlist" element={<Likeproductlist />} />
          <Route path="/detailedprodut" element={<DetailProduk />} />
          <Route path="/stripecontainer" element={<Stripecontainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
