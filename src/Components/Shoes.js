import React, { useState } from "react";
import { data } from "../data/Data";

const Shoes = () => {
  //   console.log(data);
  const [Shoes, setShoes] = useState(data);

  //   Filter Type burgers/pizza/etc
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
          <div className="py-5 flex justify-center gap-8 text-2xl border border-y">
            <button
              onClick={() => setShoes(data)}
              className="m-1  hover:text-orange-600"
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

      {/* Display Shoes */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {Shoes.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="container mx-auto  w-full grid grid-cols-4 p-4">
      {Shoes.map((item, index) => (
        <div className="card flex flex-col justify-center p-5 bg-white">
          <div className="prod-img">
            <img
              src={item.image}
              className="w-72  object-cover object-center"
            />
          </div>
          <div>
            <div className="flex w-72 flex-col md:flex-row justify-between items-center text-gray-900">
              <div>
                <button className="text-white border  px-2  bg-green-700 ">
                  NEW
                </button>
                <p className="pt-3 font-bold">{item.name}</p>
                <p className=" text-md font-extralight">₹ {item.price}</p>
              </div>
              <div>
                <ul className="flex flex-row justify-center items-center">
                  <li className=" last:mr-0">
                    <span className="block  border-2 border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#blue"
                        className="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className=" last:mr-0">
                    <span className="block  border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#yellow"
                        className="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className=" last:mr-0">
                    <span className="block  border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
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
