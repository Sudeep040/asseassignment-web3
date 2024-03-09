import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="border-neutral-300 bg-neutral-200">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-8 py-16">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Mask </h3>
              <ul className="mt-4 space-y-4 [&amp;>li]:text-neutral-500">
                <li className="text-sm">
                  <a href="/ ">About</a>
                </li>
                <li className="text-sm">
                  <a href=" ">Documentation</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                Collections
              </h3>
              <ul className="mt-4 space-y-4 [&amp;>li]:text-neutral-500">
                <li className="text-sm">
                  <a href=" ">Featured Products</a>
                </li>
                <li className="text-sm">
                  <a href=" ">Summer Picks</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
            <p className="text-sm text-neutral-500">Copyright © Sudeep, Inc.</p>
            <p className="flex gap-1 text-sm text-neutral-500">
              Powered by
              <a target="_blank" href=" ">
                Sudeep
              </a>{" "}
              <a target="_blank" className="opacity-30" href=" "></a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
