"use client";
import { Box, Skeleton } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Grid() {
  const [product, setProduct] = useState([]);
  const [loading, setLaoding] = useState(true);
  useEffect(() => {
    async function product() {
      try {
        await fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => {
            setProduct(json);
            setLaoding(false);
          });
      } catch (error) {}
    }
    product();
  }, []);

  return (
    <div className=" bg-neutral-50">
      <div className=" bg-neutral-50 mx-auto max-w-7xl p-4 pb-16 pt-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            <>
              {" "}
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
              <Skeleton variant="rounded" className="  " height={320} />
            </>
          ) : (
            product.map((ite) => (
              <Link href={`/product/${ite.id}`} key={ite.id}>
                <div className=" aspect-square overflow-hidden bg-white shadow cursor-pointer   ">
                  <motion.div
                    className=" h-full"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      className="h-full w-full object-contain object-center p-2  "
                      width={50}
                      src={ite.image}
                      style={{ color: "transparent" }}
                    />
                  </motion.div>
                </div>
                <div className=" flex justify-between pt-3">
                  <div className=" font-bold w-44 whitespace-nowrap overflow-hidden overflow-ellipsis ">
                    {ite.title}{" "}
                  </div>
                  <div className=" text-yellow-600">$ {ite.price}</div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
