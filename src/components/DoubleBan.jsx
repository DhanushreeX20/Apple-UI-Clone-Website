import React from "react";
import img1 from "../assets/db1.jpg";
import img2 from "../assets/db5.jpg";
import img3 from "../assets/db3.jpg";
import img4 from "../assets/db4.jpg";
import img5 from "../assets/db5.jpg";
import img6 from "../assets/db1.jpg"; 

const gridItems = [
  {
    img: img1,
    titleImg:"https://www.apple.com/v/home/ci/images/logos/apple-watch-series-11/promo_logo_apple_watch_series_11_preorder__fl4pzqrs45me_small_2x.png",
    title: "",
    subtitle: "The ultimate watch for a healthy life.",
  },
  {
    img: img2,
    title: "iPad Pro",
    subtitle: "Advanced AI performance and game-changing capabilities.",
  },
  {
    img: img3,
    title: "AirPods Pro 3",
    subtitle: "The world’s best in-ear Active Noise Cancellation.",
  },
  {
    img: img4,
    title: "Apple Watch SE",
    subtitle: "Walk it. Talk it. Track it. Love it.",
  },
  {
    img: img5,
    titleImg:"https://www.apple.com/v/home/ci/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_small_2x.png",
    title: "",
    subtitle: "Upgrade your iPhone with Trade-in program.",
  },
  {
    img: img6,
    titleImg:"https://www.apple.com/v/home/ci/images/logos/apple-watch-series-11/promo_logo_apple_watch_series_11_preorder__fl4pzqrs45me_small_2x.png",
    title: "",
    subtitle: "The ultimate watch for a healthy life.",
  },
];

function DoubleBan() {
  return (
    <div className="p-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-9xl mx-auto">
        {gridItems.map((item, index) => (
          <div key={index} className="bg-[#F5F5F7] shadow-lg overflow-hidden flex flex-col">

            <div className="p-4 text-center flex flex-col items-center gap-3">
              <img src={item.titleImg} className="w-[220px] md:w-[320px] object-contain"/>
              <h2 className="text-4xl font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.subtitle}</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Learn More
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-full text-sm font-medium">
                  Buy
                </button>
              </div>
            </div>

            {/* Images */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoubleBan;

