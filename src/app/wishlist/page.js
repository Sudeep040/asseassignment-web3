"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import { Alert, AlertTitle, Button } from "@mui/material";
import Link from "next/link";

export default function Wishlist() {
  const [cart, setcart] = useState([]);
  const [click, setClick] = useState(0);
  const [showAlertCart, setShowAlertCart] = useState(false);
  const [showAlertWishlist, setShowAlertWishlist] = useState(false);

  useEffect(() => {
    let rawCart = localStorage.getItem("wishlist");

    if (rawCart) {
      setcart(JSON.parse(rawCart));
    }
  }, []);
  function handleRemove(ite) {
    let filterData = cart.filter((ites) => ites.unId != ite.unId);
    localStorage.setItem("wishlist", JSON.stringify(filterData));
    let rawCart = localStorage.getItem("wishlist");

    if (rawCart) {
      setcart(JSON.parse(rawCart));
    }
    setClick(cart.length);
    setTimeout(() => {
      setShowAlertWishlist(false);
    }, 1000);
  }
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
    setTimeout(() => {
      setShowAlertCart(false);
    }, 1000);
  }

  return (
    <div>
      <Header click={click} />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl p-8">
          <h1 className="mt-8 text-3xl font-bold text-neutral-900">
            My Wishlist
          </h1>
          <div className="mt-12">
            <ul
              data-testid="CartProductList"
              role="list"
              className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
            >
              {cart.map((ite) => (
                <li className="flex py-4" key={ite.id}>
                  <div className="aspect-square h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-neutral-50 sm:h-32 sm:w-32">
                    <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-contain object-center"
                      src={ite.image}
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between p-4 py-2">
                    <div className="flex justify-between justify-items-start gap-4">
                      <div>
                        <Link href={`/product/${ite.id}`}>
                          <h2 className="font-medium text-neutral-700">
                            {ite.title}
                          </h2>
                        </Link>
                        <p className="mt-1 text-sm text-neutral-500">
                          {ite.category}
                        </p>
                      </div>
                      <p className="text-right font-semibold text-neutral-900">
                        {ite.price}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <div className="text-sm font-bold"></div>
                      <div className=" me-4">
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#1976d2", color: "white" }}
                          onClick={() => {
                            handlecart(ite);
                            setShowAlertCart(true);
                          }}
                        >
                          Add To Cart
                        </Button>
                      </div>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(205 22 22)",
                          color: "white",
                        }}
                        onClick={() => {
                          setShowAlertWishlist(true);
                          handleRemove(ite);
                        }}
                      >
                        Remove<span className="sr-only">line from cart</span>
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
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
            Removed from wishlist
          </Alert>
        </div>
      )}
      <Footer />
    </div>
  );
}
