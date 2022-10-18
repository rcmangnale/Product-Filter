import React from "react";

export default function Everyone() {
  return (
    <>
      <p>ram</p>
      <div className="flex items-center justify-center ">
        <div className="container grid w-full grid-cols-4 p-4 mx-auto">
          <div className="flex flex-col justify-center p-5 bg-white card">
            <div className="prod-img">
              <img
              alt="pic"
                src="https://moveonshop.com/wp-content/uploads/2022/06/5-1.jpg.webp"
                className="object-cover object-center w-72"
              />
            </div>
            <div>
              <div className="flex flex-col items-center justify-between text-gray-900 w-72 md:flex-row">
                <div>
                  <button className="px-2 text-white bg-green-700 border ">
                    NEW
                  </button>
                  <p className="pt-3 font-bold">Air Jorden 1 Mid SE</p>
                  <p className=" text-md font-extralight">₹ 650 </p>
                </div>
                <div>
                  <ul className="flex flex-row items-center justify-center">
                    <li className=" last:mr-0">
                      <span className="block transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                        <a
                        alt="pic"
                          href="#blue"
                          className="block w-6 h-6 bg-blue-900 rounded-full"
                        ></a>
                      </span>
                    </li>
                    <li className=" last:mr-0">
                      <span className="block transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                        <a
                        alt="pic"
                          href="#yellow"
                          className="block w-6 h-6 bg-yellow-500 rounded-full"
                        ></a>
                      </span>
                    </li>
                    <li className=" last:mr-0">
                      <span className="block transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                        <a
                        alt="pic"
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
        
        </div>
      </div>
    </>
  );
}
