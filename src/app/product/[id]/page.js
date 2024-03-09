"use client";
import React, { useState } from "react";
import Footer from "../../../../component/footer";
import Header from "../../../../component/header";
import ProductDetail from "../../../../component/ProductDetail";

export default function Product({ params }) {
  const [click, setClick] = useState(0);
  return (
    <div>
      <Header click={click} />
      <ProductDetail id={params.id} setClick={setClick} />
      <Footer />
    </div>
  );
}
