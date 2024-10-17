const CourseBanner = () => {
  return (
    <div className="relative h-[650px] md:h-[72vh] color-primaryColor">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://aactxg.stripocdn.email/content/guids/CABINET_f37167ea2322984dfeb6a0a05e92d2480b49356b15fb055bb2ce2e84131a12e4/images/vector_01.JPG')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      {/* Text Content */}
      <div className="relative banner-text-container">
    <div className="h-[400px] md:h-[72vh] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-16 px-4 md:px-32 py-2 md:py-8">

      <div className="flex flex-col gap-3 md:gap-12 w-full md:w-[80%] text-primaryColor">
      <div >

      <div className="text-[1.6rem] md:text-[2.2rem] mb-3 font-semibold">
        DGCA Approved Pilot Training Course
      </div>
      <div className="text-[1rem] md:text-[1.4rem] font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat aliquid, dolor sit amet consectetur adipisicing elit. Quia quaerat aliquid,  eveniet necessitatibus, deleniti officiis pariatur cumque tenetur veritatis tempore eum mollitia magni voluptates eos minima possimus doloremque officia provident voluptas repellendus qui laborum. Vero cumque ipsam recusandae esse qui.
      </div>
      </div>
      <div className="text-[1.2rem] md:text-[2rem] font-bold">
        Course Duration : 5 Days
      </div>

    </div>
    
    <div className=" text-black text-2xl font-bold flex flex-col gap-6 justify-center items-center w-full md:w-[50%] m-auto">
      <div className="image-container p-4 flex flex-col gap-2 items-center justify-center w-[190px] h-[190px] md:w-[220px] md:h-[220px] rounded-full mb-2 md:mb-6  text-white bg-fill"         
      style={{ backgroundImage: "url('https://aactxg.stripocdn.email/content/guids/CABINET_f37167ea2322984dfeb6a0a05e92d2480b49356b15fb055bb2ce2e84131a12e4/images/vector_02.JPG')" }}
      >
      <div className="flex text-[1.6rem] md:text-[1.8rem] opacity-90">Course Fees</div>
      <div className="flex text-[1.3rem] md:text-[1.6rem] opacity-90">₹ 50,000 /-</div>
      <div className="flex text-[1.3rem] md:text-[1.6rem] opacity-90">inc. of all taxes</div>
      </div>
     
 
      <div className=" text-[1rem] font-medium flex gap-2 md:gap-4">
        <button className='border border-primaryColor text-primaryColor bg-transparent hover:bg-primaryColor hover:text-secondaryColor transition-all  rounded-full py-0 px-3'>Learn More</button>
        <button className='border border-primaryColor text-primaryColor bg-transparent hover:bg-primaryColor hover:text-secondaryColor transition-all  rounded-full py-0 px-3'>Book a Slot</button>
      </div>
      </div>

    </div>
      </div>
      </div>
  );
};

export default CourseBanner;
