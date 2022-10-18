import React, { useState } from "react";
import { data } from "../data/Data";

const Shoes = () => {
  //   console.log(data);
  const [Shoes, setShoes] = useState(data);

  //   Filter Type Catergory
  const filterType = (category) => {
    setShoes(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

 

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      {/* Filter Row */}
      <div className="flex flex-col justify-between">
        {/* Fliter Type */}
        <div>
          <div className="flex justify-center gap-8 py-5 text-2xl border border-y">
            <button
              onClick={() => setShoes(data)}
              className="m-1 hover:text-orange-600"
            >
              Everyone
            </button>
            
            <button
              onClick={() => filterType("Men")}
              className="m-1 hover:text-orange-600"
            >
              Men
            </button>
            <button
              onClick={() => filterType("Women")}
              className="m-1 hover:text-orange-600"
            >
              Women{" "}
            </button>
            <button
              onClick={() => filterType("Unisex")}
              className="m-1 hover:text-orange-600"
            >
              Unisex
            </button>
            <button
              onClick={() => filterType("Kids")}
              className="m-1 hover:text-orange-600"
            >
              Kids
            </button>
          </div>
        </div>
      </div>

      <div className="container grid w-full p-4 mx-auto lg:grid-cols-4 sm:grid-cols-1">
      {Shoes.map((item, index) => (
        <div className="flex flex-col justify-center p-5 bg-white card">
          <div className="prod-img">
            <img
            alt="shoes"
              src={item.image}
              className="object-cover object-center w-72"
            />
          </div>
          <div>
            <div className="flex flex-col items-center justify-between text-gray-900 w-72 md:flex-row">
              <div>
                <button className="px-2 text-white bg-green-700 border ">
                  NEW
                </button>
                <p className="pt-3 font-bold">{item.name}</p>
                <p className=" text-md font-extralight">₹ {item.price}</p>
              </div>
              <div>
                <ul className="flex flex-row items-center justify-center">
                  <li className=" last:mr-0">
                    <span className="block transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                      <a
                        href="#blue"
                        className="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className=" last:mr-0">
                    <span className="block transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                      <a
                        href="#yellow"
                        className="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className=" last:mr-0">
                    <span className="block transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                      <a
                        href="#red"
                        className="block w-6 h-6 bg-red-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         ))}
      </div>
    </div>
  );
};

export default Shoes;
