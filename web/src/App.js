import "./App.css";
import React, { useEffect, useState } from "react";
import Auntentication from "./components/Auntentication";
import ProductList from "./components/ProductList/ProductList.jsx";
import Searchproductlist from "./components/searchproduct/Searchproductlist";
import Splashscreen from "./components/Splashscreen";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProduk from "./components/DetailProduk/DetailProduk";
import Stripecontainer from "./components/paymentform/Stripecontainer";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setOpen(true);
    }, 3500);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={open ? <Auntentication /> : <Splashscreen />}
          ></Route>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/searchproductlist" element={<Searchproductlist />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/detailedprodut" element={<DetailProduk />} />
          <Route path="/stripecontainer" element={<Stripecontainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
