"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";

export default function Cart() {
  const [cart, setcart] = useState([]);
  const [click, setClick] = useState(0);
  useEffect(() => {
    let rawCart = localStorage.getItem("cart");

    if (rawCart) {
      setcart(JSON.parse(rawCart));
    }
  }, []);
  function handleRemove(ite) {
    let filterData = cart.filter((ites) => ites.unId != ite.unId);
    localStorage.setItem("cart", JSON.stringify(filterData));
    let rawCart = localStorage.getItem("cart");

    if (rawCart) {
      setcart(JSON.parse(rawCart));
    }
    setClick(cart.length);
  }

  console.log(cart);
  return (
    <div>
      <Header click={click} />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl p-8">
          <h1 className="mt-8 text-3xl font-bold text-neutral-900">
            Your Shopping Cart
          </h1>
          <div className="mt-12">
            <ul
              data-testid="CartProductList"
              role="list"
              className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
            >
              {cart.map((ite) => (
                <li className="flex py-4" key={ ite.id} >
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
                        <a href="/default-channel/products/grey-hoodie?variant=UHJvZHVjdFZhcmlhbnQ6MzQ1">
                          <h2 className="font-medium text-neutral-700">
                            {ite.title}
                          </h2>
                        </a>
                        <p className="mt-1 text-sm text-neutral-500">
                          {ite.category}
                        </p>
                      </div>
                      <p className="text-right font-semibold text-neutral-900">
                        {ite.price}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm font-bold"></div>
                      <button
                        type="button"
                        className="text-sm text-neutral-500 hover:text-neutral-900"
                        aria-disabled="false"
                        onClick={() => handleRemove(ite)}
                      >
                        Remove<span className="sr-only">line from cart</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <div className="rounded border bg-neutral-50 px-4 py-2">
                <div className="flex items-center justify-between gap-2 py-2">
                  <div>
                    <p className="font-semibold text-neutral-900">Your Total</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Shipping will be calculated in the next step
                    </p>
                  </div>
                  <div className="font-medium text-neutral-900">
                    {Math.floor(
                      cart
                        .map((item) => item.price)
                        .reduce((acc, curr) => acc + curr, 0)
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 text-center">
                <button className="inline-block max-w-full rounded border border-transparent bg-neutral-900 px-6 py-3 text-center font-medium text-neutral-50 hover:bg-neutral-800 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-500 sm:px-16 w-full sm:w-1/3">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
