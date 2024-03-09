"use client";
import { Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { faHeart as solidheart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularheart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductDetail({ id, setClick }) {
  const [product, setProduct] = useState([]);
  const [loading, setLaoding] = useState(true);
  const [fav, setfav] = useState(true);
  useEffect(() => {
    async function product() {
      try {
        await fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((json) => {
            setProduct(json);
            setLaoding(false);
          });
      } catch (error) {}
    }
    product();
  }, []);

  function handlecart(ite) {
    let rawCart = localStorage.getItem("cart");
    let cart = [];

    if (rawCart) {
      cart = JSON.parse(rawCart);
    }
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...ite, unId: Math.random() * 10 }])
    );
    setClick(cart.length);
  }

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-8  py-10 flex flex-col sm:flex-row ">
      {loading ? (
        <Skeleton variant="rounded" className=" md:w-3/6 " height={620} />
      ) : (
        <div className=" aspect-square overflow-hidden bg-white shadow cursor-pointer md:w-3/6    relative  ">
          <img
            className="h-full w-full object-contain object-center p-2 product-card hover:scale-105 transition-transform duration-300"
            width={50}
            src={product.image}
            style={{ color: "transparent" }}
          />
          <button
            className=" absolute top-4 right-4"
            onClick={() => setfav(!fav)}
          >
            {fav ? (
              <FontAwesomeIcon
                className=" text-red-600"
                icon={regularheart}
                width={20}
              />
            ) : (
              <FontAwesomeIcon
                className=" text-red-600"
                icon={solidheart}
                width={20}
              />
            )}
          </button>
        </div>
      )}
      {loading ? (
        <Skeleton
          variant="rounded"
          className="  md:w-3/6 ms-10 "
          height={320}
        />
      ) : (
        <div className=" md:w-3/6 md:ps-10 pt-7  ">
          <div className=" font-bold text-2xl">{product.title}</div>
          <div className=" pt-2 text-slate-800 pb-6">$ {product.price}</div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#1976d2", color: "white" }}
            onClick={() => handlecart(product)}
          >
            {" "}
            Add To Cart{" "}
          </Button>
          <div className=" font-bold text-1xl pt-8 "> Description:- </div>
          <div className=" text-sm text-slate-800 ">{product.description}</div>
          <div className=" pt-5 font-bold text-xl ">{product.category}</div>

          {/* <div>{product.rating.rate}</div> */}
        </div>
      )}
    </div>
  );
}
