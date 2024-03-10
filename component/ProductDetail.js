"use client";
import { Alert, AlertTitle, Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { faHeart as solidheart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularheart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function ProductDetail({ id, setClick }) {
  const [product, setProduct] = useState([]);
  const [loading, setLaoding] = useState(true);
  const [fav, setfav] = useState(true);
  const [showAlertCart, setShowAlertCart] = useState(false);
  const [showAlertWishlist, setShowAlertWishlist] = useState(false);
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
    let rawCart = localStorage.getItem("wishlist");
    let cart = [];

    if (rawCart) {
      cart = JSON.parse(rawCart);
    }
    console.log(cart.some((ite) => ite.id == id));
    if (cart.some((ite) => ite.id == id)) {
      setfav(false);
    } else {
      setfav(true);
    }
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
    setClick(cart.length + 1);
  }
  function addwishlist(ite) {
    let rawCart = localStorage.getItem("wishlist");
    let cart = [];

    if (rawCart) {
      cart = JSON.parse(rawCart);
    }
    if (fav) {
      localStorage.setItem(
        "wishlist",
        JSON.stringify([...cart, { ...ite, unId: Math.random() * 10 }])
      );
      setShowAlertWishlist(true);
    } else {
      localStorage.setItem(
        "wishlist",
        JSON.stringify(cart.filter((obj) => obj.id != ite.id))
      );
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-8  py-10 flex flex-col sm:flex-row ">
      {loading ? (
        <Skeleton variant="rounded" className=" md:w-3/6 " height={620} />
      ) : (
        <div className=" aspect-square overflow-hidden bg-white shadow cursor-pointer md:w-3/6    relative  ">
          <motion.div
            className=" h-full"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-full w-full object-contain object-center p-2  first-line:  "
              width={50}
              src={product.image}
              style={{ color: "transparent" }}
            />
          </motion.div>{" "}
          <button
            className=" absolute top-4 right-4"
            onClick={() => {
              setfav(!fav);
              addwishlist(product);
              setShowAlertWishlist(!fav);
            }}
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
            onClick={() => {
              handlecart(product);
              setShowAlertCart(true);
            }}
          >
            Add To Cart
          </Button>
          <div className=" font-bold text-1xl pt-8 "> Description:- </div>
          <div className=" text-sm text-slate-800 ">{product.description}</div>
          <div className=" pt-5 font-bold text-xl ">{product.category}</div>

          {/* <div>{product.rating.rate}</div> */}
        </div>
      )}
      {showAlertCart && (
        <div className=" absolute top-20  right-5 border">
          <Alert severity="success" onClose={() => setShowAlertCart(false)}>
            <AlertTitle>Success</AlertTitle>
            Added to the cart
          </Alert>
        </div>
      )}
      {showAlertWishlist && (
        <div className=" absolute top-20  right-5 border">
          <Alert severity="success" onClose={() => setShowAlertWishlist(false)}>
            <AlertTitle>Success</AlertTitle>
            {fav ? " Removed to the wishlist" : " Added to the wishlist"}
          </Alert>
        </div>
      )}
    </div>
  );
}
