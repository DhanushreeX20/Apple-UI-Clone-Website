function Filmban() {
  const banners = [
       {
      bg: "https://is1-ssl.mzstatic.com/image/thumb/5fF2vNTh4Bo1hT1Mcbmggw/2400x1350sr.webp",
      logo:"https://www.apple.com/v/home/ci/images/tv-plus-gallery/logo_hero_light__d7t8cya4x26a_small_2x.png",
      titleImg: "https://is1-ssl.mzstatic.com/image/thumb/zN89OCcVdgPk0r8fPqoAzw/432x162.png",
      title: "",
      subtitle: "Comedy • 2025 Emmy® Winner."
    },
    {
      bg: "https://is1-ssl.mzstatic.com/image/thumb/xEIxiIVRDqaFJ3H3pTGczQ/2400x1350sr.webp",
     logo:"https://www.apple.com/v/home/ci/images/tv-plus-gallery/logo_hero_light__d7t8cya4x26a_small_2x.png",
      titleImg:"https://is1-ssl.mzstatic.com/image/thumb/5_OvKjXpgXJyKi11wPoEVw/432x162.png",
      title: "",
      subtitle: "Action • It's only a legend until you discover it."
    },
    {
      bg: "https://is1-ssl.mzstatic.com/image/thumb/qEO2ivDk7pTF8wJQlJ-QDw/2400x1350sr.webp",
      logo:"https://www.apple.com/v/home/ci/images/tv-plus-gallery/logo_hero_light__d7t8cya4x26a_small_2x.png",
      titleImg: "https://is1-ssl.mzstatic.com/image/thumb/lvZ2b3skKnno7C-36QvFrg/432x162.png",
      title: "",
      subtitle: "Comedy • Getting it together. Together."
    },
    {
      bg: "https://is1-ssl.mzstatic.com/image/thumb/zaxin710Cia1XCPsrs3-iQ/2400x1350sr.webp",
      logo:"https://www.apple.com/v/home/ci/images/tv-plus-gallery/logo_hero_light__d7t8cya4x26a_small_2x.png",
      titleImg: "https://is1-ssl.mzstatic.com/image/thumb/w6iOdqXGZLugnUgKmWZp0g/432x162.png",
      title: "",
      subtitle: "Sci-Fi • To live, you need something to die for."
    },
    {
      bg: "https://is1-ssl.mzstatic.com/image/thumb/Zv1nb93ntCIgEzns-N528A/2400x1350sr.webp",
      logo:"https://www.apple.com/v/home/ci/images/tv-plus-gallery/logo_hero_light__d7t8cya4x26a_small_2x.png",
      titleImg: "https://is1-ssl.mzstatic.com/image/thumb/cZzCY0sU6ok8DdXspGvkLA/432x162.png",
      title: "",
      subtitle: "Thriller • The World's most dangerous secret lies between them."
    }
  ];

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap flex gap-6 px-4 py-6">
      {banners.map((item, index) => (
        <div
          key={index}
          className="min-w-[850px] h-[580px] relative overflow-hidden flex-shrink-0"
        >
          <img
            src={item.bg}
            className="w-full h-full object-cover"
          />

          {/* TEXT CONTAINER */}
          <div className="absolute inset-0 flex flex-col justify-between text-white px-6 py-6">

            {/* logo */}
          {item.logo && (
           <img src={item.logo}className="absolute top-6 right-6 w-[50px] md:w-[70px] object-contain drop-shadow-lg" />
)}
            {/* ✅ Title Centered */}
            <div className="flex justify-center mt-10">
                
              {item.titleImg ? (
                <img
                  src={item.titleImg}
                  className="w-[220px] md:w-[320px] object-contain"
                />
              ) : (
                <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight">
                  {item.title}
                </h1>
              )}
            </div>

{/* ✅ Stream now first, then subtitle */}
<div className="flex items-center gap-4">
  <button className="px-7 py-2 bg-white text-black rounded-full text-base font-semibold shadow hover:bg-neutral-200 transition">
    Stream now
  </button>

  <p className="text-lg font-medium">
    {item.subtitle}
  </p>
</div>


          </div>
        </div>
      ))}
    </div>
  );
}

export default Filmban;
