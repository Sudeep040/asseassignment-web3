"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header({ click }) {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    let rawCart = localStorage.getItem("cart");

    if (rawCart) {
      setcart(JSON.parse(rawCart));
    }
  }, [click]);

  return (
    <header class="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div class="mx-auto max-w-7xl px-3 sm:px-8">
        <div class="flex h-16 justify-between gap-4 md:gap-8 items-center font-bold">
          <Link className=" space-x-2" aria-label="homepage" href="/">
            MASK
          </Link>
          <nav class="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
            <ul class="hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
              <li class="inline-flex">
                <Link
                  class="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li class="inline-flex">
                <Link
                  class="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700"
                  href="/default-channel/categories/apparel"
                >
                  About
                </Link>
              </li>
            </ul>
            <div class="ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
              <div class="hidden lg:flex">
                <div class="group relative my-2 flex w-full items-center text-sm lg:w-80">
                  <label class="w-full">
                    <span class="sr-only">search for products</span>
                    <input
                      type="text"
                      placeholder="Search for products..."
                      autocomplete="on"
                      required=""
                      class="h-10 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black"
                      name="search"
                    />
                  </label>
                  <div class="absolute inset-y-0 right-0">
                    <button
                      type="submit"
                      class="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700"
                    >
                      <span class="sr-only">search</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-search h-5 w-5"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <Link class="h-6 w-6 flex-shrink-0" href="/ ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span class="sr-only">Log in</span>
              </Link>
              <Link
                class="relative flex items-center"
                data-testid="CartNavItem"
                href=" /cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-bag h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <div class="absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 flex-col items-center justify-center rounded bg-neutral-900 text-xs font-medium text-white w-[2ch]">
                  {cart.length}{" "}
                  <span class="sr-only">items in cart, view bag</span>
                </div>
              </Link>
              <button
                class="flex h-8 w-8 flex-col items-center justify-center gap-1.5 self-end self-center md:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-menu h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
