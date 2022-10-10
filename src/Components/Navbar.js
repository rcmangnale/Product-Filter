import React from "react";

export default function Navbar() {
  return (
    <header className=" py-6 bg-white shadow-sm lg:static lg:overflow-y-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between lg:gap-8 xl:grid-cols-12">
          <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div className="flex flex-shrink-0 items-center font-bold text-xl">
              <p>NIKERS</p>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <img alt="cart" src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" />
          </div>
        </div>
      </div>
    </header>
  );
}
