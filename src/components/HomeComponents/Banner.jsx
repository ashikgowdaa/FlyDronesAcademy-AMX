import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[75vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://aactxg.stripocdn.email/content/guids/CABINET_f37167ea2322984dfeb6a0a05e92d2480b49356b15fb055bb2ce2e84131a12e4/images/vector_02.JPG')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Text Content */}
      <div className="relative banner-text-container">
    <div className="h-[75vh] flex justify-between gap-16  px-32 py-8 items-center">

      <div className=" text-black text-2xl font-bold flex justify-center items-center w-[50%] m-auto">
      <div className="image-container w-[280px] h-[280px]">
        <img className='h-full w-full' src="https://aactxg.stripocdn.email/content/guids/CABINET_f37167ea2322984dfeb6a0a05e92d2480b49356b15fb055bb2ce2e84131a12e4/images/flydro_logo_png_1.png" alt="" />
      </div>
      </div>
      <div className="flex flex-col gap-16 w-[70%] text-white">
      <div >

      <div className="text-[4.2rem] font-medium">
   FlyDro Academy
      </div>
      <div className=" text-[1.8rem] font-medium">
        Remote Pilot Training Organisation
      </div>
      </div>
      <div className=" text-[2rem] font-medium">
        Let the Sky be the limit
      </div>

    </div>
      </div>
      </ div>
    </div>
  );
};

export default Banner;
