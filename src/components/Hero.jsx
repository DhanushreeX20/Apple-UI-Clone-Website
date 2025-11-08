import iphone from "../assets/hero1.jpg";
import banner from '../assets/banner1.jpg'
import bannertwo from '../assets/banner2.jpg'
 function Hero() {
  return (
    <>
    
    {/* herobanner */}

    <section className="relative w-full h-screen bg-black overflow-hidden">

      <div className="absolute top-[14%] w-full text-center text-white z-10">
        <h2 className="text-3xl md:text-6xl font-bold">iPhone 17 Pro</h2><br></br>
        <h4 className="font-semibold">All Out Pro.</h4>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 m-2 rounded-full text-lg font-medium">
          Learn more
        </button>
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-full text-sm font-medium"> Buy </button>
      </div>
      <img src={iphone} alt="iPhone"  className="absolute bottom-0 w-full max-h-[90vh] object-cover"/>
    </section>

    {/* BannerOne */}

        <section className="relative w-full h-screen mt-5 shadow-2xl overflow-hidden">
           <div className=" top-[18%] w-full text-center text-black">
            <h2 className="text-3xl md:text-5xl font-bold">iPhone Air</h2>
            <p>The thinnest iPhone ever.<br></br>With the power of pro inside.</p>
         <button className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 m-2 rounded-full text-lg font-medium"> Learn more
            </button>
           <button className="border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-full text-sm font-medium"> Buy</button>
          </div>
          <img src={banner} alt="iPhone"className="absolute bottom-0 w-full max-h-[90vh] object-cover"  />
        </section>
    
          {/* Bannertwo */}

        <section className="relative w-full h-screen mt-5 bg-black overflow-hidden ">
          <div className="top-[18%] w-full text-center text-white relative ">
            <h2 className=" text-3xl md:text-5xl font-bold">MacBook Pro 14"</h2>
            <p>Supercharged by M5</p>
      <button className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-7 py-2 m-2 rounded-full text-lg font-medium">
              Learn more</button>
             <button className="border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-full text-sm font-medium">Buy</button>
          </div>
          <img src={bannertwo} alt="iPhone" className="w-full max-h-[90vh]"/>
        </section>
  
        </>
  );
}

export default Hero