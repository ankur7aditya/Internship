import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="hero-section">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-20 bg-gray-100">
          <div className="w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Site</h1>
            <p className="text-lg mb-6">
              Want a Pet for your home? WE HAVE IT FOR YOU
            </p>
            <Link to={"faq"}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Learn More
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src="https://imgs.search.brave.com/nfwtCE9k4LzucVsDHGOgG5wIEZiLAx-2bxfgcgXWGRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/NTc1NTQ4L3Bob3Rv/L2lzb2xhdGVkLXBp/Y3R1cmUtb2YtYW4t/YW5ncnktY2F0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/ajdwUkRaemlmVTdj/cFd4dDRjeTZlNGNh/a01GeFNTLW1xc1U3/bDk1eEdzPQ"
              alt="Placeholder"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
